"use client";

import { createContext, useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const ROUTES = ["/me", "/resume", "/photography"] as const;

const pathToTab = (p: string | null) => {
  if (!p) return 0;
  if (p.startsWith("/resume")) return 1;
  if (p.startsWith("/photography")) return 2;
  return 0;
};

type TabValue = {
  tab: number;
  setTab: (n: number) => void;
};

const TabContext = createContext<TabValue>({ tab: 0, setTab: () => {} });

export const useTab = () => useContext(TabContext);

export function TabProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const tab = pathToTab(pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const setTab = (n: number) => {
    const target = ROUTES[n] ?? ROUTES[0];
    if (target !== pathname) router.push(target, { scroll: false });
  };

  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
