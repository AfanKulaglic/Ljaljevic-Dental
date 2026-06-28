import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./ui";
import { CLINIC, NAV_LINKS, FAQ } from "../data/content";
import { useState } from "react";

// Custom social SVG icons (lucide removed brand icons for trademark reasons)
const IgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const FbIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
);
const YtIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23 12s0-3.5-.4-5.2c-.3-1-.9-1.7-1.9-2C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.7.4c-1 .3-1.7 1-1.9 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 .9 1.7 1.9 2 1.9.4 8.7.4 8.7.4s6.8 0 8.7-.4c1-.3 1.7-1 1.9-2C23 15.5 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
  </svg>
);
const SOCIAL_ICONS = [IgIcon, FbIcon, YtIcon];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <footer id="kontakt" className="relative bg-ink-950 text-cream overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-teal-500/10 blur-3xl" />

      {/* Contact section */}
      <section className="relative py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: heading + contact details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Reveal>
                <div className="flex flex-col gap-4">
                  <Eyebrow className="text-teal-300">Kontakt</Eyebrow>
                  <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-cream">
                    Nađite nas u <span className="text-gradient-gold">centru Sarajeva.</span>
                  </h2>
                  <p className="text-cream/60 leading-relaxed">
                    Pet minuta hoda od Baščaršije, sa parkingom iza zgrade i pristupom
                    za osobe sa invaliditetom.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <ContactCard
                    icon={MapPin}
                    label="Adresa"
                    value={CLINIC.address}
                    href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.mapsQuery)}`}
                  />
                  <ContactCard
                    icon={Phone}
                    label="Telefon"
                    value={CLINIC.phone}
                    href={`tel:${CLINIC.phoneRaw}`}
                  />
                  <ContactCard
                    icon={Mail}
                    label="Email"
                    value={CLINIC.email}
                    href={`mailto:${CLINIC.email}`}
                  />
                  <div className="rounded-2xl border border-cream/10 bg-cream/[0.02] p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-teal-300">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wide">Radno vrijeme</span>
                    </div>
                    <ul className="space-y-1">
                      {CLINIC.hours.map((h) => (
                        <li key={h.day} className="flex justify-between text-sm">
                          <span className="text-cream/60">{h.day}</span>
                          <span className="text-cream/90">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex items-center gap-3">
                  {SOCIAL_ICONS.map((Icon, i) => (
                    <a
                      key={i}
                      href={[CLINIC.social.instagram, CLINIC.social.facebook, CLINIC.social.youtube][i]}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/10 text-cream/70 hover:bg-cream hover:text-ink-950 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: map + FAQ */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <Reveal delay={0.1}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-cream/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                  <iframe
                    title="Mapa — Aurora Dental Sarajevo"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&output=embed`}
                    className="absolute inset-0 h-full w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Overlay pin */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-lg"
                    >
                      <MapPin className="h-6 w-6" />
                    </motion.div>
                  </div>
                </div>
              </Reveal>

              {/* FAQ */}
              <Reveal delay={0.15}>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-medium text-cream mb-2">
                    Česta pitanja
                  </h3>
                  {FAQ.map((f, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-cream/10 bg-cream/[0.02] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-cream/[0.04] transition-colors"
                      >
                        <span className="text-sm font-medium text-cream/90">{f.q}</span>
                        <span
                          className={`flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cream/5 text-cream/60 transition-transform duration-300 ${
                            openFaq === i ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFaq === i ? "auto" : 0,
                          opacity: openFaq === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-cream/60 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer bottom */}
      <div className="border-t border-cream/10">
        <Container className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="Ljaljević Dental logo" className="h-9 w-9" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-cream">Ljaljević Dental</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
                  Sarajevo
                </span>
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/60 hover:bg-cream hover:text-ink-950 transition-all"
              aria-label="Na vrh"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/40">
            <p>© {new Date().getFullYear()} {CLINIC.fullName}. Sva prava zadržana.</p>
            <p>Dizajn i izrada · React + Vite + Tailwind</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group rounded-2xl border border-cream/10 bg-cream/[0.02] p-5 hover:bg-cream/[0.05] transition-all"
    >
      <div className="flex items-center gap-2 text-teal-300 mb-2">
        <Icon className="h-4 w-4" />
        <span className="text-xs uppercase tracking-wide">{label}</span>
      </div>
      <div className="text-sm text-cream/90 group-hover:text-cream">{value}</div>
    </a>
  );
}
