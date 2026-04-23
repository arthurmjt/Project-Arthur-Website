"use client";

import { createContext, useContext, useState } from "react";

type TabValue = {
  tab: number;
  setTab: (n: number) => void;
};

const TabContext = createContext<TabValue>({ tab: 0, setTab: () => {} });

export const useTab = () => useContext(TabContext);

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [tab, setTabState] = useState(0);

  const setTab = (n: number) => {
    setTabState(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
