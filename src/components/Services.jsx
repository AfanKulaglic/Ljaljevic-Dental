import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "./ui";
import { SERVICES } from "../data/content";

const ACCENT = {
  teal: "bg-teal-700",
  gold: "bg-sand-600",
};

export default function Services() {
  return (
    <section id="usluge" className="relative py-24 lg:py-32 bg-cream" aria-labelledby="services-title">
      <Container>
        {/* Editorial header */}
        <Reveal>
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm font-medium text-teal-700">01</span>
              <span className="text-xs uppercase tracking-[0.18em] text-ink-700/50">Usluge</span>
            </div>
            <h2 id="services-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] tracking-[-0.02em] text-ink-900">
              Osam disciplina. Jedna adresa.
              <span className="block text-ink-700/40 italic font-light mt-1">
                Bez slanja na drugu stranu.
              </span>
            </h2>
            <p className="text-base md:text-lg text-ink-700/70 leading-relaxed">
              Konsilijarni pristup znači da implantolog, endodont i parodontolog
              sjednu zajedno prije odluke. Ne plaćate drugu konsultaciju —
              razmatranje je uključeno u prvi pregled.
            </p>
          </div>
        </Reveal>

        {/* Čist, ravan 4-kolonski grid — sve iste veličine */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 border border-ink-900/10">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full bg-cream p-7 lg:p-8 flex flex-col gap-5"
                >
                  {/* Top row — broj + ikona */}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-xs font-medium text-ink-700/40 tabular-nums">
                      0{i + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 group-hover:bg-ink-900 group-hover:text-cream group-hover:border-ink-900 transition-all duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Naslov + opis */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-xl font-medium text-ink-900">
                      {s.title}
                    </h3>
                    <p className="text-sm text-ink-700/70 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  {/* Editorial list — tačkice, ne check ikone */}
                  <ul className="mt-auto flex flex-col gap-1.5 pt-4 border-t border-ink-900/8">
                    {s.points.map((p) => (
                      <li key={p} className="text-sm text-ink-800/80 flex items-baseline gap-2">
                        <span className={`inline-block h-1 w-1 rounded-full ${ACCENT[s.accent]} translate-y-[-2px]`} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* Hover link */}
                  <a
                    href="#zakazi"
                    className="inline-flex items-center gap-1 text-sm font-medium text-ink-900/0 group-hover:text-teal-700 transition-colors"
                  >
                    Zakazi
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
