"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { fr } from "@/content/fr";
import { en } from "@/content/en";
import type { Locale, SiteContent } from "@/content/types";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Read the data-locale attribute set by the inline script before React hydrates,
    // so locale is correct on first render (no flash).
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-locale") === "en" ? "en" : "fr";
    }
    return "fr";
  });

  function setLocale(l: Locale) {
    setLocaleState(l);
    document.documentElement.setAttribute("data-locale", l);
    try {
      const saved = JSON.parse(localStorage.getItem("site-settings") || "{}");
      localStorage.setItem("site-settings", JSON.stringify({ ...saved, locale: l }));
    } catch {}
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, content: locale === "en" ? en : fr }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useContent(): SiteContent {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useContent must be used within LocaleProvider");
  return ctx.content;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}
