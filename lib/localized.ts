export type Locale = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export function localized(id: string, en: string): LocalizedText {
  return { id, en };
}

export function resolveLocalizedText(value: string | LocalizedText, locale: Locale): string {
  if (typeof value === "string") {
    return value;
  }

  return locale === "en" ? value.en || value.id : value.id;
}