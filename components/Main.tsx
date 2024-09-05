"use client";

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { enable, navItems } from "@/data";
import { useState } from "react";
import { MultiStepLoaderContainer } from "./LoaderContainer";
import Spinner from "./ui/Spinner";

export default function Main() {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  if (isMounted === false) {
    return (
      <>
        <MultiStepLoaderContainer
          loading={loading}
          setLoading={setLoading}
          setIsMounted={setIsMounted}
        />
      </>
    );
  }

  if (spinnerLoading === true) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <main className="relative dark:bg-black-100 bg-stone-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
          setSpinnerLoading={setSpinnerLoading}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        {enable && <Clients />}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
