"use client";

import { I18nProvider } from "@/components/providers/i18n-provider";
import { TabProvider, useTab } from "@/components/providers/tab-provider";
import { TopBar } from "@/components/top-bar";
import { Footer } from "@/components/footer";
import { MePage } from "@/components/pages/me-page";
import { PhotoPage } from "@/components/pages/photo-page";
import { ResumePage } from "@/components/pages/resume-page";

const Pages = [MePage, ResumePage, PhotoPage];

function Main() {
  const { tab } = useTab();
  const Page = Pages[tab] || MePage;
  return (
    <main key={tab}>
      <Page />
    </main>
  );
}

export function App() {
  return (
    <I18nProvider>
      <TabProvider>
        <div className="relative">
          <TopBar />
          <Main />
          <Footer />
        </div>
      </TabProvider>
    </I18nProvider>
  );
}
