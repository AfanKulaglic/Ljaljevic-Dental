import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container, SectionTitle, Reveal, Stars } from "./ui";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const go = (dir) => {
    setActive((curr) => (curr + dir + total) % total);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Decorative quote watermark */}
      <Quote className="absolute top-16 left-8 h-64 w-64 text-teal-500/[0.04] rotate-12" />

      <Container className="relative">
        <Reveal>
          <SectionTitle
            eyebrow="Iskustva pacijenata"
            title={
              <>
                Šta kažu oni koji su <br className="hidden md:block" />
                <span className="text-gradient-teal">već otvorili usta.</span>
              </>
            }
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Carousel */}
          <Reveal delay={0.05}>
            <div className="relative min-h-[280px] md:min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center gap-6"
                >
                  <Stars count={t.rating} className="justify-center" />
                  <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] text-ink-900 max-w-3xl">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-medium text-ink-900">{t.name}</div>
                    <div className="text-sm text-teal-700">{t.role}</div>
                  </div>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 hover:bg-ink-900 hover:text-cream transition-all"
              aria-label="Prethodni"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "w-8 bg-teal-700"
                      : "w-2 bg-ink-900/15 hover:bg-ink-900/30"
                  }`}
                  aria-label={`Idi na ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 hover:bg-ink-900 hover:text-cream transition-all"
              aria-label="Sledeći"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
