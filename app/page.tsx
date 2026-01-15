import Image from "next/image";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Home() {
  return (
    <>
      <HeroGeometric  title1="Vincenzo Tulimieri" title2="Full Stack Developer" />
      <section id="projects" className="text-center">
        <h1>progetti</h1>
      </section>
    </>
  );
}
