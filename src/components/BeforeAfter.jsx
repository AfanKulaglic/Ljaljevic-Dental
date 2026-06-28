import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, ArrowRight } from "lucide-react";
import { Container, SectionTitle, Reveal } from "./ui";
import { BEFORE_AFTER } from "../data/content";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const ref = useRef(null);

  const handleMove = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, x)));
  };

  const item = BEFORE_AFTER[active];

  return (
    <section id="rezultati" className="relative py-24 lg:py-32 bg-ink-950 text-cream overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-teal-400) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-gold-500) 0%, transparent 40%)",
        }}
      />

      <Container className="relative">
        <Reveal>
          <SectionTitle
            eyebrow="Rezultati"
            title={
              <span className="text-cream">
                Vidite razliku <span className="text-gradient-gold">prije i poslije.</span>
              </span>
            }
            description="Pomjerite klizač i uvjerite se. Stvarni pacijenti, stvarni rezultati — bez filtera i bez fotošopa."
            className="[&_p]:text-cream/70"
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-2">
            {BEFORE_AFTER.map((b, i) => (
              <button
                key={b.title}
                onClick={() => {
                  setActive(i);
                  setPos(50);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-cream text-ink-950"
                    : "bg-cream/5 text-cream/60 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                {b.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Slider */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div
                ref={ref}
                onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-cream/10 select-none cursor-ew-resize shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
              >
                {/* AFTER (right side, full) */}
                <div className="absolute inset-0">
                  <img
                    src="/images/smile/after.jpg"
                    alt="Poslije tretmana — novi osmijeh"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* BEFORE (left side, clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                >
                  <img
                    src="/images/smile/before.jpg"
                    alt="Prije tretmana — stari osmijeh"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 rounded-full bg-ink-950/60 backdrop-blur px-3 py-1 text-xs font-medium tracking-wide text-cream/80">
                  PRIJE
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium tracking-wide text-ink-950">
                  POSLIJE
                </div>

                {/* Divider line + handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-cream"
                  style={{ left: `${pos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink-950 shadow-lg">
                    <MoveHorizontal className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Side caption */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-gold-400">Prije</span>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.before}</p>
                </div>
                <div className="h-px w-full bg-cream/10" />
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-teal-300">Poslije</span>
                  <p className="text-cream/90 text-sm leading-relaxed">{item.after}</p>
                </div>
              </motion.div>

              <p className="text-cream/70 text-sm leading-relaxed border-t border-cream/10 pt-4">
                {item.desc}
              </p>

              <a
                href="#zakazi"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors"
              >
                Želim isti rezultat
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
