import { motion } from "framer-motion";
import { Container, Reveal } from "./ui";
import { CLINIC } from "../data/content";

const TIMELINE = [
  { year: "2001", event: "Otvorena specijalistička ordinacija na Bardakčijama 23" },
  { year: "2006", event: "Uvođenje cirkon keramike u protetske radove" },
  { year: "2012", event: "Proširenje tima sa oralnim hirurgom i dječijim stomatologom" },
  { year: "2018", event: "Digitalna dijagnostika i RTG na licu mjesta" },
  { year: "2026", event: "Preko 8 000 pacijenata · 6 disciplina na jednoj adresi" },
];

export default function About() {
  return (
    <section id="o-nama" className="relative py-24 lg:py-36 bg-ink-950 text-cream overflow-hidden" aria-labelledby="about-title">
      <Container className="relative">
        {/* Editorial grid — 12 kolona, asimetrično */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: big title + intro */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-medium text-teal-300">02</span>
                <span className="text-xs uppercase tracking-[0.18em] text-cream/40">O klinici</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="about-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] tracking-[-0.02em]">
                Nismo lanac.
                <span className="block italic font-light text-cream/60 mt-2">
                  Nismo franšiza. Samo tim koji radi zajedno 25 godina.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-base md:text-lg text-cream/70 leading-relaxed max-w-xl">
                <p>
                  Aurora Dental je specijalistički centar u centru Sarajeva.
                  Ne tražimo drugu adresu za složeniji slučaj — imamo osam
                  specijalista koji sjednu zajedno i razmatraju.
                </p>
                <p>
                  Svaki tretman kreće od CBCT 3D snimka i intraoralnog skena.
                  Plan dobijate pisano, sa fiksnom cijenom — bez iznenađenja
                  poslije pola posla.
                </p>
                <p className="text-cream/50 text-sm border-l-2 border-teal-500 pl-4">
                  „Zub koji izgleda izgubljen najčešće nije. Liječenjem kanala
                  korena sačuvamo zub koji bi drugi odustali." — dr. Amela Ljaljević
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: image + concrete numbers */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/images/clinic/interior.jpg"
                  alt="Interijer stomatološke ordinacije Ljaljević"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                <div className="absolute bottom-5 left-5 text-cream">
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">Sala 2</div>
                  <div className="font-display text-lg">Glavni tretman</div>
                </div>
              </div>
            </Reveal>

            {/* Concrete numbers — editorial, ne kartičasto */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
                <div>
                  <div className="font-display text-3xl font-medium text-teal-300">20</div>
                  <div className="text-xs text-cream/50 mt-1">godina<br />na istoj adresi</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-medium text-teal-300">6</div>
                  <div className="text-xs text-cream/50 mt-1">disciplina<br />u ordinaciji</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-medium text-teal-300">95%</div>
                  <div className="text-xs text-cream/50 mt-1">uspešnost<br />tretmana</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Timeline — editorial horizontal */}
        <Reveal delay={0.25}>
          <div className="mt-20 lg:mt-28 border-t border-cream/10 pt-10">
            <div className="text-xs uppercase tracking-[0.18em] text-cream/40 mb-8">
              Kratka hronologija
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex flex-col gap-2 border-t border-cream/10 pt-4"
                >
                  <span className="font-display text-xl font-medium text-gold-400">{t.year}</span>
                  <span className="text-xs text-cream/60 leading-relaxed">{t.event}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
