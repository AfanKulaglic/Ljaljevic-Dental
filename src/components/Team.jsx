import { motion } from "framer-motion";
import { Container, Reveal } from "./ui";
import { TEAM } from "../data/content";

// Asimetričan layout — prva dva doktora su veća (glavni), druga dva manja
const LAYOUT = [
  "lg:col-span-7",  // 0 — velika kartica
  "lg:col-span-5",  // 1 — manja
  "lg:col-span-5",  // 2 — manja
  "lg:col-span-7",  // 3 — velika
];

export default function Team() {
  return (
    <section id="tim" className="relative py-24 lg:py-36 bg-cream overflow-hidden" aria-labelledby="team-title">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm font-medium text-teal-700">03</span>
              <span className="text-xs uppercase tracking-[0.18em] text-ink-700/50">Tim</span>
            </div>
            <h2 id="team-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.02] tracking-[-0.02em] text-ink-900">
              Lica iza ordinacije.
              <span className="block italic font-light text-ink-700/40 mt-1">
                Ne imena na posteru.
              </span>
            </h2>
            <p className="text-base md:text-lg text-ink-700/70 leading-relaxed">
              Svaki slučaj razmatra cijeli tim — ne pojedinac. Konsilijum
              sedmično, ne po potrebi. Zato kojeg doktora vidite prvi nije bitno:
              odluka je zajednička.
            </p>
          </div>
        </Reveal>

        {/* Asimetričan grid — prvi red 7+5, drugi red 5+7 */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 lg:gap-8">
          {TEAM.map((m, i) => {
            const isLarge = LAYOUT[i].includes("7");
            return (
              <Reveal key={m.name} delay={(i % 2) * 0.08} className={LAYOUT[i]}>
                <motion.article
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full overflow-hidden bg-ink-950 rounded-sm"
                >
                  <div className={`relative ${isLarge ? "aspect-[16/11]" : "aspect-[4/5]"} overflow-hidden`}>
                    <img
                      src={`/images/team/doctor${i + 1}.jpg`}
                      alt={`${m.name} — ${m.role}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

                    {/* Top badge — specijalnost */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-cream/70">
                        {m.spec}
                      </span>
                    </div>

                    {/* Bottom info — uvijek vidljivo, ne hover-only */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                      <h3 className={`font-display font-medium text-cream ${isLarge ? "text-2xl" : "text-xl"}`}>
                        {m.name}
                      </h3>
                      <p className="text-sm text-teal-300 mt-0.5">{m.role}</p>
                      <p className="text-xs text-cream/50 mt-3 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
