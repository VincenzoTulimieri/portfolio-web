import Image from "next/image";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

// Dati dei progetti
const projects: FocusRailItem[] = [
  {
    id: 1,
    title: "Visual Gaming",
    description: "Experience the vibrant nightlife and illuminated streets of Shinjuku.",
    meta: "React • Bootstrap • Node js ",
    videoSrc: "/video-visualgaming.mkv",
    imageSrc: "/visualgaming-home.png",
    href: "https://github.com/VincenzoTulimieri/progetto-finale-spec-frontend-front",
  },
  {
    id: 2,
    title: "Boolshop",
    description: "E-commerce sviluppata in team.",
    meta: "Design • Nature",
    videoSrc: "/video-boolshop.mkv",
    imageSrc: "/boolshop-homepage.png",
    href: "#nordic",
  },
  {
    id: 3,
    title: "Spotyfy",
    description: "Layout solo grafico della web app di spotify",
    meta: "HTML • CSS • Resposive",
    videoSrc: "",
    imageSrc: "/spotify-layout.png",
    href: "#sahara",
  },
  {
    id: 4,
    title: "Spotyfy",
    description: "Layout solo grafico della web app di spotify.",
    meta: "HTML • CSS • Resposive",
    videoSrc: "",
    imageSrc: "/spotify-layout.png",
    href: "#cyber",
  }
];

// Dati About me
const myDate: {
  id: number;
  name: string;
  imgSrc?: string;
  designation: string;
  description: string;
}[] = [
   {
      id: 1,
      imgSrc: "/foto-profilo.jpeg",
      name: "Vincenzo Tulimieri",
      designation: "Junior Full-Stack Developer",
      description: "A gennaio 2025 ho deciso di iscrivermi all'Academy di Boolean, dove, oltre a imparare i linguaggi di programmazione, ho incontrato persone fantastiche. È stato un percorso bellissimo ma anche impegnativo; grazie alla perseveranza, sono riuscito a raggiungere il mio obiettivo. Superando l'esame finale, ho ottenuto il mio primo certificato da Full-Stack Web Developer con specializzazione in Frontend e React."
    },
    {
      id: 2,
      imgSrc: "/attestato-boolean.png",
      name: "Certificato Boolean",
      designation: "HTML, CSS, JavaScript, React js, Bootstrap, Node js, Express, MySQL, TypeScript",
      description: "A gennaio 2025 ho deciso di iscrivermi all'Academy di Boolean, dove, oltre a imparare i linguaggi di programmazione, ho incontrato persone fantastiche. È stato un percorso bellissimo ma anche impegnativo; grazie alla perseveranza, sono riuscito a raggiungere il mio obiettivo. Superando l'esame finale, ho ottenuto il mio primo certificato da Full-Stack Web Developer con specializzazione in Frontend e React."
    },
     {
      id: 3,
      imgSrc: "",
      name: "Certificato Boolean",
      designation: "Java, Spring, HTML, CSS, Javascript, React, Node.js",
      description: "A gennaio 2025 ho deciso di iscrivermi all'Academy di Boolean, dove, oltre a imparare i linguaggi di programmazione, ho incontrato persone fantastiche. È stato un percorso bellissimo ma anche impegnativo; grazie alla perseveranza, sono riuscito a raggiungere il mio obiettivo. Superando l'esame finale, ho ottenuto il mio primo certificato da Full-Stack Web Developer con specializzazione in Java."
    }
  ]

export default function Home() {
  return (
    <>
      <HeroGeometric title1={myDate[0].name} title2={myDate[0].designation} myDate={myDate}/>
      <section id="about" className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center py-50">
        <div className="text-center mb-50">
          <h1 className="text-4xl font-bold text-white mb-20">Su di Me</h1>
          <p className="text-neutral-400 w-500">{myDate[0].description}</p>
        </div>
        <div className="text-center">
          <h1>qui vanno le card</h1>
        </div>
      </section>
      <section id="projects" className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center justify-center py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">I Miei Progetti</h1>
        </div>
        <FocusRail items={projects} autoPlay={true} loop={true} />
      </section>
    </>
  );
}
