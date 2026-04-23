"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DICT, type Dict, type Lang } from "@/lib/dict";

type I18nValue = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<I18nValue>({
  lang: "en",
  t: DICT.en,
  setLang: () => {},
});

export const useT = () => useContext(I18nContext);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  }, [lang]);

  const value = useMemo(() => ({ lang, t: DICT[lang], setLang }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
