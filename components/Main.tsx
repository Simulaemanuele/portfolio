"use client";

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { MultiStepLoader as Loader } from "@/components/ui/MultiStepLoader";
import { enable, loadingStates, navItems } from "@/data";
import { useEffect, useState } from "react";
import MagicButton from "./ui/MagicButton";
import Spinner from "./ui/Spinner";

export default function Main() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isMounted === false) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <main className="relative dark:bg-black-100 bg-stone-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
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
