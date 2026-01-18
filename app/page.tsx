import Image from "next/image";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const projects: FocusRailItem[] = [
  {
    id: 1,
    title: "Visual Gaming",
    description: "Experience the vibrant nightlife and illuminated streets of Shinjuku.",
    meta: "React • Bootstrap • Node js ",
    videoSrc:"/video-visualgaming.mkv",
    imageSrc: "/visualgaming-home.png",
    href: "https://github.com/VincenzoTulimieri/progetto-finale-spec-frontend-front",
  },
  {
    id: 2,
    title: "Boolshop",
    description: "E-commerce sviluppata in team.",
    meta: "Design • Nature",
    videoSrc:"/video-boolshop.mkv",
    imageSrc: "/boolshop-homepage.png",
    href: "#nordic",
  },
  {
    id: 3,
    title: "Spotyfy",
    description: "Layout solo grafico della web app di spotify",
    meta: "HTML • CSS • Resposive",
    videoSrc:"",
    imageSrc: "/spotify-layout.png",
    href: "#sahara",
  },
  {
    id: 4,
    title: "Spotyfy",
    description: "Layout solo grafico della web app di spotify.",
    meta: "HTML • CSS • Resposive",
    videoSrc:"",
    imageSrc: "/spotify-layout.png",
    href: "#cyber",
  }
];

export default function Home() {
  return (
    <>
      <HeroGeometric title1="Vincenzo Tulimieri" title2="Full Stack Developer" />
      <section id="projects" className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center justify-center py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">I Miei Progetti</h1>
          <p className="text-neutral-400">Navigate the rail to explore selected works.</p>
        </div>
        <FocusRail items={projects} autoPlay={true} loop={true} />
      </section>
    </>
  );
}
