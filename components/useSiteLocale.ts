"use client";

import { useCallback, useEffect, useState } from "react";

export type SiteLocale = "id" | "en";

const LOCALE_KEY = "site-locale";
const LOCALE_EVENT = "site-locale-change";

function readLocale(): SiteLocale {
  if (typeof window === "undefined") {
    return "en";
  }

  const value = window.localStorage.getItem(LOCALE_KEY);
  return value === "id" ? "id" : "en";
}

export function useSiteLocale() {
  const [locale, setLocaleState] = useState<SiteLocale>("en");

  useEffect(() => {
    const next = readLocale();
    setLocaleState(next);
    document.documentElement.lang = next;

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== LOCALE_KEY) {
        return;
      }

      setLocaleState(readLocale());
    };

    const handleLocaleEvent = () => {
      setLocaleState(readLocale());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(LOCALE_EVENT, handleLocaleEvent);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(LOCALE_EVENT, handleLocaleEvent);
    };
  }, []);

  const setLocale = useCallback((next: SiteLocale) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LOCALE_KEY, next);
    document.documentElement.lang = next;
    window.dispatchEvent(new Event(LOCALE_EVENT));
    setLocaleState(next);
  }, []);

  return { locale, setLocale };
}