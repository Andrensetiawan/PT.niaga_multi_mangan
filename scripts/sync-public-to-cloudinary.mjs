import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const outputFile = path.join(rootDir, "FILE", "cloudinary-migration-map.json");

function loadEnvFromFile(envPath) {
  return fs
    .readFile(envPath, "utf8")
    .then((text) => {
      for (const line of text.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) {
          continue;
        }

        const equalIndex = trimmed.indexOf("=");
        if (equalIndex < 0) {
          continue;
        }

        const key = trimmed.slice(0, equalIndex).trim();
        let value = trimmed.slice(equalIndex + 1).trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }

        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    })
    .catch(() => {
      // Ignore missing .env.local
    });
}

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function normalizePublicId(relativePath) {
  return relativePath
    .replace(/\\/g, "/")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9/_-]/g, "-")
    .replace(/-+/g, "-");
}

async function uploadFileToCloudinary({ filePath, cloudName, uploadPreset }) {
  const fileBuffer = await fs.readFile(filePath);
  const relativePath = path.relative(publicDir, filePath);
  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

  const formData = new FormData();
  const fileName = path.basename(filePath);
  formData.append("file", new Blob([fileBuffer]), fileName);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "nmp/migration");
  formData.append("public_id", normalizePublicId(relativePath));
  formData.append("use_filename", "true");
  formData.append("unique_filename", "false");
  formData.append("overwrite", "true");

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  const payload = await response.json();
  if (!response.ok || !payload.secure_url) {
    throw new Error(`Upload gagal untuk ${relativePath}: ${payload?.error?.message ?? "Unknown error"}`);
  }

  return {
    localPath: `/${relativePath.replace(/\\/g, "/")}`,
    secureUrl: payload.secure_url,
    resourceType: payload.resource_type,
  };
}

async function main() {
  await loadEnvFromFile(path.join(rootDir, ".env.local"));
  await loadEnvFromFile(path.join(rootDir, ".env.local.example"));

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? process.env.NEXT_PUBLIC_niaga_multi_pangan;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary env belum lengkap. Pastikan NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME dan NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET (atau NEXT_PUBLIC_niaga_multi_pangan) terisi.",
    );
  }

  const files = await walkFiles(publicDir);
  const map = {};
  const failed = [];

  for (const filePath of files) {
    try {
      const result = await uploadFileToCloudinary({ filePath, cloudName, uploadPreset });
      map[result.localPath] = result.secureUrl;
      console.log(`Uploaded: ${result.localPath}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      failed.push({ filePath, message });
      console.error(message);
    }
  }

  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(
    outputFile,
    JSON.stringify(
      {
        cloudName,
        uploadedAt: new Date().toISOString(),
        totalUploaded: Object.keys(map).length,
        totalFailed: failed.length,
        map,
        failed,
      },
      null,
      2,
    ) + "\n",
    "utf8",
  );

  console.log(`Done. Mapping saved to ${outputFile}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});