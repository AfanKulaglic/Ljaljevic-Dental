import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Container } from "./ui";
import { CLINIC } from "../data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 lg:pt-36" aria-labelledby="hero-title">
      {/* Soft background — single tone, no blobs */}
      <div className="absolute inset-0 -z-10 bg-cream" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-900) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container>
        {/* Top meta row — editorial date line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-ink-900/10 pb-4 mb-10 text-xs uppercase tracking-[0.18em] text-ink-700/60"
        >
          <span>Est. 2001 · Bardakčije 23, Sarajevo</span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Otvoreno danas do 20:00
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: editorial title + body */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.025em] text-ink-900"
            >
              Stomatologija sa
              <br />
              <span className="italic font-light text-teal-700">papirom u ruci</span>,
              <br />
              ne sa obećanjem.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-xl text-lg text-ink-700/80 leading-relaxed"
            >
              Osam specijalista na istoj adresi 25 godina. CBCT 3D dijagnostika
              na licu mjesta, mikroskopska endodoncija i implanti sa 10-godišnjom
              garancijom. Plan tretmana dobijate pisano — sa fiksnom cijenom, prije
              nego dodirnemo zub.
            </motion.p>

            {/* Inline CTAs — no pulse, no big buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              <a
                href="#zakazi"
                className="group inline-flex items-center gap-2 text-base font-medium text-ink-900 border-b border-ink-900 pb-1 hover:border-teal-600 hover:text-teal-700 transition-colors"
              >
                Zakazi pregled
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="inline-flex items-center gap-2 text-base text-ink-700/70 hover:text-ink-900 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {CLINIC.phone}
              </a>
            </motion.div>
          </div>

          {/* Right: editorial sidebar — concrete facts, no marketing */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:border-l lg:border-ink-900/10 lg:pl-8 flex flex-col gap-6 pt-2"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-700/50">Lokacija</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-900 hover:text-teal-700 transition-colors"
              >
                Bardakčije 23
                <br />
                71000 Sarajevo
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-700/50">Radno vrijeme</span>
              <div className="text-sm text-ink-900">
                <div className="flex justify-between"><span>Pon — Pet</span><span>09–19h</span></div>
                <div className="flex justify-between"><span>Subota</span><span>09–14h</span></div>
                <div className="flex justify-between text-ink-700/50"><span>Nedjelja</span><span>hitni</span></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-700/50">Hitni pregled</span>
              <span className="text-sm text-ink-900">
                Isti dan termin — zovite prije 19h.
              </span>
            </div>
            <div className="border-t border-ink-900/10 pt-4">
              <div className="font-display text-3xl font-medium text-ink-900">8 000+</div>
              <div className="text-xs text-ink-700/60 mt-1">pacijenata od 2001. iz cijelog regiona</div>
            </div>
          </motion.aside>
        </div>

        {/* Offset image — breaks the grid, overlaps next section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 lg:mt-16"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
            <img
              src="/images/hero/dental-clinic.jpg"
              alt="Stomatološka ordinacija Ljaljević — moderna oprema"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          {/* Caption — editorial */}
          <div className="mt-3 flex items-center justify-between text-xs text-ink-700/50">
            <span>Glavna sala · Ljaljević Dental, Bardakčije 23</span>
            <span className="hidden sm:block">RTG dijagnostika · cirkon keramika · sterilizacija klase B</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
