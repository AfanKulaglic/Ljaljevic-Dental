import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Container, Button, useScrollProgress } from "./ui";
import { CLINIC, NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-lux)] ${
          scrolled ? "glass shadow-[0_1px_0_rgba(15,42,38,0.06)]" : "bg-transparent"
        }`}
        role="banner"
      >
        <Container className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Ljaljević Dental — početna stranica">
            <span className="relative flex h-10 w-10 items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo.svg" alt="Ljaljević Dental logo" className="h-full w-full" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold text-ink-900">Ljaljević Dental</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-teal-700/70">
                Sarajevo
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm font-medium text-ink-800/80 hover:text-ink-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-ink-800 hover:text-teal-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {CLINIC.phone}
            </a>
            <Button as="a" href="#zakazi" size="sm">
              <Calendar className="h-4 w-4" />
              Zakazi pregled
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        {/* Scroll progress bar */}
        <div className="h-px w-full bg-transparent">
          <div
            className="h-px bg-gradient-to-r from-teal-500 to-gold-400 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl flex flex-col"
            >
              <div className="flex h-20 items-center justify-between px-6 border-b border-ink-900/10">
                <span className="font-display text-lg font-semibold text-ink-900">Meni</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10"
                  aria-label="Zatvori"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-6">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="flex items-center justify-between border-b border-ink-900/5 py-4 text-lg font-medium text-ink-900 hover:text-teal-700"
                  >
                    {l.label}
                    <span className="text-teal-500">→</span>
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto p-6 space-y-3 border-t border-ink-900/10">
                <Button as="a" href={`tel:${CLINIC.phoneRaw}`} variant="outline" className="w-full">
                  <Phone className="h-4 w-4" />
                  {CLINIC.phone}
                </Button>
                <Button as="a" href="#zakazi" className="w-full" onClick={() => setOpen(false)}>
                  <Calendar className="h-4 w-4" />
                  Zakazi pregled
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
