"use client";

import { motion } from "framer-motion";
import { useT } from "@/components/providers/i18n-provider";
import { SocialIcon, type SocialName } from "@/components/icons/social-icon";

type SocialLink = { id: SocialName; label: string; href: string };

export function Footer() {
  const { t } = useT();

  const socials: SocialLink[] = [
    { id: "email",     label: "Email",     href: `mailto:${t.email}` },
    { id: "linkedin",  label: "LinkedIn",  href: "https://www.linkedin.com/in/jingtang-ma-259673174" },
    { id: "github",    label: "GitHub",    href: "https://github.com/arthurmjt" },
    { id: "bilibili",  label: "Bilibili",  href: "https://space.bilibili.com/473626838" },
    { id: "youtube",   label: "YouTube",   href: "https://www.youtube.com/@arthurnotasir" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/arthurmjt" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="relative pb-14">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-center text-center gap-5 py-12 border-t border-[color:var(--veil-2)]">
          <div className="eyebrow text-[color:var(--ink-3)]">{t.contactEyebrow}</div>

          <div className="mt-2 flex flex-wrap justify-center max-w-full glass rounded-2xl md:rounded-full px-3 md:px-4 py-2.5 md:py-3 gap-1.5 md:gap-2">
            {socials.map((s) => (
              <motion.a
                key={s.id}
                href={s.href}
                target={s.id === "email" ? undefined : "_blank"}
                rel={s.id === "email" ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                title={s.label}
                data-brand={s.id}
                className="social-chip"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <SocialIcon name={s.id} />
              </motion.a>
            ))}
          </div>

          <p className="mt-3 text-[15px] md:text-[16px] leading-[1.7] text-[color:var(--ink-2)]">
            {t.contactNote}
          </p>
        </div>

        <div className="pt-6 flex justify-center eyebrow text-[color:var(--ink-3)]">
          <span>{t.copyright(year)}</span>
        </div>
      </div>
    </footer>
  );
}
