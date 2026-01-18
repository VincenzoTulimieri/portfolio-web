"use client";

import * as React from "react";
import { motion, AnimatePresence, PanInfo, Transition } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  videoSrc?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

const BASE_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

const TAP_SPRING = {
  type: "spring",
  stiffness: 450,
  damping: 18,
  mass: 1,
};

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastWheelTime = React.useRef<number>(0);

  const [zoomItem, setZoomItem] = React.useState<FocusRailItem | null>(null)
  const closeZoom = () => setZoomItem(null);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];


  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);


  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);


  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };


  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "group relative flex h-[600px] w-full flex-col overflow-hidden bg-neutral-950 text-white outline-none select-none overflow-x-hidden",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${activeItem.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeItem.imageSrc}
              alt=""
              fill
              priority
              className="h-full w-full object-cover blur-3xl saturate-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>


      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">

        <motion.div
          className="relative mx-auto flex h-[360px] w-full max-w-6xl items-center justify-center perspective-[1200px] cursor-pointer active:cursor-pointer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);


            const xOffset = offset * 480;
            const zOffset = -dist * 180;
            const scale = isCenter ? 1 : 0.85;
            const rotateY = offset * -20;

            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5);
            const blur = isCenter ? 0 : dist * 6;
            const brightness = isCenter ? 1 : 0.5;

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute aspect-video w-[320px] md:w-[500px] rounded-2xl border-t border-white/20 bg-neutral-900 shadow-2xl transition-shadow duration-300",
                  isCenter ? "z-20 shadow-white/10" : "z-10"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={{
                  stiffness: BASE_SPRING.stiffness,
                  damping: BASE_SPRING.damping,
                  mass: BASE_SPRING.mass,
                  scale: {
                    type: "spring",
                    stiffness: TAP_SPRING.stiffness,
                    damping: TAP_SPRING.damping,
                    mass: TAP_SPRING.mass,
                  },
                } as Transition}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (isCenter) {
                    setZoomItem(item);
                  } else {
                    setActive(absIndex);
                  }
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  {item.videoSrc ? (
                    <video
                      src={item.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={item.imageSrc}
                      className="h-full w-full object-cover pointer-events-none"
                    />
                  ) : (
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 320px, 520px"
                      className="pointer-events-none"
                      priority={isCenter}
                    />
                  )}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none mix-blend-multiply" />
              </motion.div>
            );
          })}

        </motion.div>
        <div className="mx-auto mt-12 flex w-full max-w-4xl flex-col items-center justify-between gap-6 md:flex-row pointer-events-auto">
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left h-32 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {activeItem.meta && (
                  <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                    {activeItem.meta}
                  </span>
                )}
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
                  {activeItem.title}
                </h2>
                {activeItem.description && (
                  <p className="max-w-md text-neutral-400">
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full bg-neutral-900/80 p-1 ring-1 ring-white/10 backdrop-blur-md z-60">
              <button
                onClick={(e) =>{
                  e.stopPropagation()
                  handlePrev()
                }}
                className="rounded-full p-3 text-neutral-400 transition hover:bg-white/10 hover:text-white active:scale-95  z-60"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[40px] text-center text-xs font-mono text-neutral-500">
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                className="rounded-full p-3 text-neutral-400 transition hover:bg-white/10 hover:text-white active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {activeItem.href && (
              <Link
                href={activeItem.href}
                className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vedi su GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
          {/* OVERLAY MODALE */}
          <AnimatePresence>
            {zoomItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                onClick={closeZoom} 
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
                  onClick={(e) => e.stopPropagation()} 
                >               
                  <button
                    onClick={closeZoom}
                    className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-white/20"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {zoomItem.videoSrc ? (
                    <video src={zoomItem.videoSrc} autoPlay loop controls className="h-full w-full object-contain" />
                  ) : (
                    <div className="relative h-full w-full">
                      <Image src={zoomItem.imageSrc} alt="" fill className="object-contain" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}