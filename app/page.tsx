"use client";

import "../i18n";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/components/Main"));

export default function Home() {
  return <Main />;
}
