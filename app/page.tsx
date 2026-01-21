// importazioni 
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { TextShimmer } from '@/components/ui/text-shimmer';
import { InteractiveTiltCard } from "@/components/ui/tilt-card";
import { Download } from "lucide-react";

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
      description: "Mi considero una persona curiosa e motivata dalle sfide. Nel mio percorso formativo e professionale ho imparato a lavorare in squadra e ad affrontare i problemi con un approccio analitico e creativo. Unisco la mia passione per la Psicologia al mondo IT, convinto che comprendere le persone e le loro esigenze sia la chiave per creare soluzioni tecnologiche più efficaci e relazioni professionali più solide."
    },
    {
      id: 2,
      imgSrc: "/attestato-boolean.png",
      name: "Attestato Boolean",
      designation: "HTML, CSS, JavaScript, React js, Bootstrap, Node js, Express, MySQL, TypeScript",
      description: "A gennaio 2025 ho deciso di iscrivermi all'Academy di Boolean, dove, oltre a imparare i linguaggi di programmazione, ho incontrato persone fantastiche. È stato un percorso bellissimo ma anche impegnativo; grazie alla perseveranza, sono riuscito a raggiungere il mio obiettivo. Superando l'esame finale, ho ottenuto il mio primo certificato da Full-Stack Web Developer con specializzazione in Frontend e React."
    },
  ]

export default function Home() {
  return (
    <>
      <HeroGeometric title1={myDate[0].name} title2={myDate[0].designation} myDate={myDate} />
      <section id="about" className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center pt-30">
        <div className="text-center mb-20 w-full max-w-7xl mx-auto px-2 md:px-0">
          <TextShimmer className="font-mono text-lg md:text-xl leading-relaxed" duration={5}>
            {myDate[0].description}
          </TextShimmer>
        </div>
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full max-w-6xl mx-auto">
            <div style={{ width: "300px", height: "400px" }}>
              <InteractiveTiltCard
                image={{
                  src: "/attestato-boolean.png",
                  alt: "Blue flower in a vase",
                }}
                tiltFactor={20}
                hoverScale={1.07}
                shadowIntensity={0.6}
                glareEffect={true}
                glareIntensity={0.4}
              />
              <p className="mt-10 font-mono text-lg md:text-xl leading-relaxed">{myDate[1].name}</p>
            </div>
            <div style={{ width: "300px", height: "400px" }}>
              <InteractiveTiltCard
                image={{
                  src: "/foto-CV.png",
                  alt: "Blue flower in a vase",
                }}
                tiltFactor={20}
                hoverScale={1.07}
                shadowIntensity={0.6}
                glareEffect={true}
                glareIntensity={0.4}
              />
              <p className="mt-10 font-mono text-lg md:text-xl leading-relaxed">Curriculum Vitae</p>
              <a
                href="/CV-vincenzo-tulimieri.pdf" 
                download="CV_Vincenzo_Tulimieri.pdf" 
                className="mt-4 inline-flex items-center justify-center px-6 py-2 border border-white/20 rounded-full bg-white/5 text-white font-mono text-sm hover:bg-white hover:text-black transition-colors duration-300 gap-2"
              >
                <Download size={16} className="group-hover:animate-bounce " />
                <span className="font-mono">Scarica CV</span>
              </a>
            </div>
          </div>
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
