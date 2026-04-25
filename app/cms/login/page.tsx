"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CmsLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/cms/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { message?: string };
        setError(payload.message ?? "Login failed.");
        return;
      }

      router.push("/cms");
      router.refresh();
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 px-6 py-16">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700">
          CMS Access
        </p>
        <h1 className="mt-2 text-3xl font-black text-emerald-950">Admin Login</h1>
        <p className="mt-3 text-sm text-stone-600">
          Sign in to the CMS panel to edit product and partner data.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
              Username
            </label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none ring-emerald-500 transition focus:ring"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none ring-emerald-500 transition focus:ring"
              required
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-emerald-950 px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Processing..." : "Sign In to CMS"}
          </button>

          <Link
            href="/home"
            className="block w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-emerald-900 transition hover:bg-emerald-50"
          >
            Back to Website
          </Link>
        </form>
      </div>
    </main>
  );
}
