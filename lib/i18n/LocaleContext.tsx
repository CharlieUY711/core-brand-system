"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import es, { Dictionary } from "./dictionaries/es";
import pt from "./dictionaries/pt";
import en from "./dictionaries/en";

export type Locale = "es" | "pt" | "en";
export const DEFAULT_LOCALE: Locale = "es";
export const LOCALES: Locale[] = ["es", "pt", "en"];

const STORAGE_KEY = "core-locale";

const dictionaries: Record<Locale, Dictionary> = { es, pt, en };

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as string[]).includes(value);
}

type Ctx = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Dot-path lookup into the active dictionary, e.g. t("nav.groups.system").
   * Falls back to the path itself if the key is missing, so a translation
   * gap is visible instead of crashing. Supports {var} interpolation. */
  t: (path: string, vars?: Record<string, string | number>) => string;
  /** The full active dictionary object, typed. Use this (not `t`) for
   * structured per-entity/per-vertical lookups (arrays, nested objects) —
   * e.g. dict.entities.oddy.bullets — where a flat dot-path string doesn't
   * fit. `t` stays the right tool for flat UI-chrome strings. */
  dict: Dictionary;
};

const LocaleContext = createContext<Ctx | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) => {
      const value = getByPath(dictionaries[locale], path);
      return typeof value === "string" ? interpolate(value, vars) : path;
    },
    [locale]
  );

  const dict = dictionaries[locale];

  const value = useMemo(() => ({ locale, setLocale, t, dict }), [locale, setLocale, t, dict]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
