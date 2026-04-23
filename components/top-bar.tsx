"use client";

import { useEffect, useState } from "react";
import { useT } from "@/components/providers/i18n-provider";
import { useTab } from "@/components/providers/tab-provider";

export function TopBar() {
  const { t, lang, setLang } = useT();
  const { tab, setTab } = useTab();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "border-b border-[color:var(--veil-2)] glass" : ""
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        <button
          onClick={() => setTab(0)}
          className="eyebrow text-[color:var(--ink)] lift tracking-[0.28em] hover:text-[color:var(--orange-1)]"
          aria-label="Project Arthur — return to Me"
        >
          {t.logo}
        </button>

        <nav className="hidden md:flex items-center gap-1 rounded-full p-1 border border-[color:var(--veil-2)] bg-[rgba(255,255,255,0.6)] backdrop-blur-md">
          {t.tabs.map((label, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              data-active={tab === i}
              className="tab px-4 py-1.5 text-[13px] font-medium"
              style={i === 0 && lang === "zh" ? { fontFamily: "var(--font-cn), serif" } : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="rounded-full border border-[color:var(--veil-2)] bg-[rgba(255,255,255,0.6)] backdrop-blur-md p-[3px] flex items-center">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`eyebrow px-2.5 py-1.5 rounded-full transition-colors ${
                lang === "en"
                  ? "bg-[color:var(--ink)] text-[color:var(--ivory)]"
                  : "text-[color:var(--ink-2)] hover:text-[color:var(--orange-1)]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("zh")}
              aria-pressed={lang === "zh"}
              className={`px-2.5 py-1.5 rounded-full transition-colors text-[13px] ${
                lang === "zh"
                  ? "bg-[color:var(--ink)] text-[color:var(--ivory)]"
                  : "text-[color:var(--ink-2)] hover:text-[color:var(--orange-1)]"
              }`}
              style={{ fontFamily: "var(--font-cn), serif" }}
            >
              中
            </button>
          </div>
        </div>
      </div>

      <nav className="md:hidden px-4 pb-3 flex gap-1 overflow-x-auto">
        {t.tabs.map((label, i) => (
          <button
            key={i}
            onClick={() => setTab(i)}
            data-active={tab === i}
            className="tab shrink-0 px-3 py-1.5 text-[12px] font-medium"
            style={i === 0 && lang === "zh" ? { fontFamily: "var(--font-cn), serif" } : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
