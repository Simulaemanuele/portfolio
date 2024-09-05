"use client";

import { appWithTranslation } from "next-i18next";
import "../i18n";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/Main"));

function Home() {
  return <Main />;
}

export default appWithTranslation(Home);
