import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ui/Toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <ModeToggle />
        <Hero />
      </div>
    </main>
  );
}
