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
    description: "Visual Gaming è una web app dedicata al mondo dei videogiochi, pensata per esplorare, confrontare e salvare titoli in una wishlist personale. Ho usato React per la gestione dei componenti e dello stato dell’app, Bootstrap per un layout e CSS Vanilla per la personalizzazione grafica e lo stile. Le funzionalità principali sono Visualizzazione di una libreria di videogiochi, Filtri per categoria e ordinamento, Ricerca per titolo, Sistema di selezione per il confronto, Interfaccia moderna e user-friendly a tema gaming.",
    meta: "JavaScript • React js • Bootstrap • Node js ",
    videoSrc: "/video-visualgaming.mkv",
    imageSrc: "/visualgaming-home.png",
    href: "https://github.com/VincenzoTulimieri/progetto-finale-spec-frontend-front",
  },
  {
    id: 2,
    title: "Boolshop",
    description: "BoolShop è un progetto full-stack sviluppato in team con suddivisione dei task, collaborazione e integrazione frontend–backend, pensato come un E-commerce dedicato alla vendita di album musicali, con un’interfaccia moderna e un flusso completo di navigazione e consultazione dei prodotti. Le funzionalità principali sono Homepage con sezioni dedicate ad album più venduti e più recenti navigazione tra negozio e artisti, visualizzazione dettagliata dei prodotti, gestione dei dati tramite backend dedicato, layout responsive e coerente su diversi dispositivi, gestione del carrello è checkout prodotti",
    meta: "Team Work • React js • Node Js • MySql",
    videoSrc: "/video-boolshop.mkv",
    imageSrc: "/boolshop-homepage.png",
    href: "https://github.com/VincenzoTulimieri/boolshop-react-main",
  },
  {
    id: 3,
    title: "Spotyfy",
    description: "Layout dell'applicazione web Spotify realizzato completamente in HTML e CSS vanilla, senza framework o componenti preconfezionati. Il progetto mette in evidenza la capacità di costruire interfacce responsive partendo dalle basi, con attenzione a struttura semantica, adattabilità su diversi dispositivi e fedeltà al design.",
    meta: "HTML • CSS • Resposive",
    videoSrc: "/video-spotify.mkv",
    imageSrc: "/spotify-layout.png",
    href: "https://github.com/VincenzoTulimieri/html-css-spotifyweb/tree/main/day-3",
  },
  {
    id: 4,
    title: "Dropbox",
    description: "Layout del sito web Dropbox  sviluppato completamente in HTML e CSS vanilla, senza l’uso di framework o componenti predefiniti. Il progetto mette in evidenza la capacità di strutturare un’interfaccia web curando layout, gerarchia visiva e organizzazione dei contenuti, partendo dalle basi del front-end",
    meta: "HTML • CSS",
    videoSrc: "/video-dropbox.mkv",
    imageSrc: "/screenshot-dropbox.png",
    href: "https://github.com/VincenzoTulimieri/htmlcss-dropboxr",
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
    {
      id: 3,
      imgSrc: "/foto-CV.png",
      name: "Curriculum Vitae",
      designation: "HTML, CSS, JavaScript, React js, Bootstrap, Node js, Express, MySQL, TypeScript",
      description: "Ecco qui il mio Curriculum Vitae"
    }
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
          <div className="text-center px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full max-w-5xl mx-auto items-start">
              <div className="flex flex-col items-center">
                <div className="w-[280px] h-[380px] sm:w-[300px] sm:h-[400px]">
                  <InteractiveTiltCard
                    image={{
                      src: myDate[1].imgSrc || "",
                      alt: myDate[1].name,
                    }}
                    tiltFactor={20}
                    hoverScale={1.07}
                    shadowIntensity={0.6}
                    glareEffect={true}
                    glareIntensity={0.4}
                  />
                </div>
                <h3 className="mt-8 font-mono text-xl font-bold text-white">{myDate[1].name}</h3>
                <p className="mt-10 font-mono text-sm leading-relaxed text-neutral-400 max-w-[320px] text-center">
                  {myDate[1].description}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[280px] h-[380px] sm:w-[300px] sm:h-[400px]">
                  <InteractiveTiltCard
                    image={{
                      src: myDate[2].imgSrc || "",
                      alt: myDate[2].name,
                    }}
                    tiltFactor={20}
                    hoverScale={1.07}
                    shadowIntensity={0.6}
                    glareEffect={true}
                    glareIntensity={0.4}
                  />
                </div>
                <h3 className="mt-8 font-mono text-xl font-bold text-white">{myDate[2].name}</h3>
                <p className="mt-10 font-mono text-sm leading-relaxed text-neutral-400 max-w-[320px] text-center">
                  {myDate[2].description}
                </p>
                <a
                  href="/CV-vincenzo-tulimieri.pdf"
                  download="CV_Vincenzo_Tulimieri.pdf"
                  className="mt-5 inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-full bg-white/5 text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-300 gap-2 group"
                >
                  <Download size={18} className="group-hover:animate-bounce" />
                  <span>Scarica CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen overflow-x-hidden w-full bg-neutral-950 flex flex-col items-center justify-center py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">I Miei Progetti</h1>
        </div>
        <FocusRail items={projects} autoPlay={false} loop={true} />
      </section>
    </>
  );
}
