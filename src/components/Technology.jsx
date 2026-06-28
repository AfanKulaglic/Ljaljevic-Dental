import { motion } from "framer-motion";
import { Cpu, Scan, Microscope, Waves, Zap, PenTool } from "lucide-react";
import { Container, SectionTitle, Reveal } from "./ui";
import { TECHNOLOGY } from "../data/content";

const ICONS = [Cpu, Scan, Microscope, Waves, Zap, PenTool];

export default function Technology() {
  return (
    <section id="tehnologija" className="relative py-24 lg:py-32 bg-gradient-to-b from-cream to-teal-50/40 overflow-hidden" aria-labelledby="tech-title">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky title */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionTitle
                  eyebrow="Tehnologija"
                  titleId="tech-title"
                  title={
                    <>
                      Oprema koja <br className="hidden md:block" />
                      <span className="text-gradient-teal">određuje rezultat.</span>
                    </>
                  }
                  description="Svaki uređaj ovdje ima svrhu — manje bola, kraće vijeme, precizniji ishod. Nismo kupili opremu za reklamu, kupili smo je zato što radi."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-white border border-ink-900/5 shadow-[var(--shadow-soft)]">
                  <div className="flex -space-x-2">
                    {ICONS.slice(0, 4).map((Icon, i) => (
                      <span
                        key={i}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-cream ring-2 ring-cream"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-ink-900">6 uređaja, jedan tok rada</div>
                    <div className="text-ink-700/60">od dijagnostike do finalnog rada</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: tech list */}
          <div className="lg:col-span-7 flex flex-col">
            {TECHNOLOGY.map((t, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={t.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 border-b border-ink-900/8 last:border-0"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-ink-900/5 shadow-[var(--shadow-soft)] text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-cream group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-xl font-medium text-ink-900">{t.title}</h3>
                      <p className="text-sm text-ink-700/70 leading-relaxed">{t.description}</p>
                    </div>
                    <span className="font-display text-2xl font-light text-ink-900/15 tabular-nums">
                      0{i + 1}
                    </span>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
