import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Container, Reveal } from "./ui";
import { CLINIC, SERVICES, PROCESS } from "../data/content";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: POST to backend / Supabase / email service
    setSubmitted(true);
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="zakazi" className="relative py-24 lg:py-32 bg-gradient-to-b from-cream to-teal-50/40 overflow-hidden" aria-labelledby="booking-title">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: process + info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Reveal>
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                  <span className="h-px w-6 bg-teal-500" />
                  Zakazivanje
                </span>
                <h2 id="booking-title" className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-ink-900">
                  Pet koraka do <span className="text-gradient-teal">prvog pregleda.</span>
                </h2>
                <p className="text-ink-700/70 leading-relaxed">
                  Zovete ili popunjavate formu — mi vraćamo u roku sat vremena u radno
                  vrijeme. Hitni bol? Isti dan termin.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-3">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.05}>
                  <div className="group flex items-start gap-4 rounded-2xl p-4 hover:bg-white hover:shadow-[var(--shadow-soft)] transition-all duration-300">
                    <span className="font-display text-2xl font-medium text-teal-700/30 group-hover:text-teal-700 transition-colors">
                      {p.step}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-medium text-ink-900">{p.title}</h3>
                      <p className="text-sm text-ink-700/60">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center justify-between gap-4 rounded-2xl bg-ink-950 text-cream p-5 hover:bg-ink-900 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gold-400" />
                  <div>
                    <div className="text-xs text-cream/60 uppercase tracking-wide">Radije zovete?</div>
                    <div className="font-medium">{CLINIC.phone}</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-cream/60" />
              </a>
            </Reveal>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative rounded-[2rem] bg-white border border-ink-900/5 shadow-[var(--shadow-lift)] p-8 md:p-10 overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-teal-100/60 blur-2xl" />

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="relative flex flex-col gap-5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-2xl font-semibold text-ink-900">
                          Zakazi pregled
                        </h3>
                        <span className="text-xs text-ink-700/50">Odgovor &lt; 1h</span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field
                          icon={User}
                          label="Ime i prezime"
                          placeholder="Vaše ime"
                          value={form.name}
                          onChange={update("name")}
                          required
                        />
                        <Field
                          icon={Phone}
                          label="Telefon"
                          type="tel"
                          placeholder="+387 ..."
                          value={form.phone}
                          onChange={update("phone")}
                          required
                        />
                      </div>

                      <Field
                        icon={Mail}
                        label="Email (opciono)"
                        type="email"
                        placeholder="ime@primjer.ba"
                        value={form.email}
                        onChange={update("email")}
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-medium text-ink-700/70 uppercase tracking-wide">
                            Usluga
                          </label>
                          <div className="relative">
                            <select
                              value={form.service}
                              onChange={update("service")}
                              required
                              className="w-full appearance-none rounded-xl border border-ink-900/10 bg-cream/40 px-4 py-3 pr-10 text-sm text-ink-900 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                            >
                              <option value="">Izaberite uslugu</option>
                              {SERVICES.map((s) => (
                                <option key={s.slug} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                              <option value="Konsultacije">Konsultacije</option>
                              <option value="Hitni pregled">Hitni pregled</option>
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-700/40 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 8l5 5 5-5z" />
                            </svg>
                          </div>
                        </div>

                        <Field
                          icon={Calendar}
                          label="Željeni datum"
                          type="date"
                          value={form.date}
                          onChange={update("date")}
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-ink-700/70 uppercase tracking-wide">
                          Poruka (opciono)
                        </label>
                        <textarea
                          value={form.message}
                          onChange={update("message")}
                          rows={3}
                          placeholder="Opišite vaš problem ili pitanje..."
                          className="w-full rounded-xl border border-ink-900/10 bg-cream/40 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-sm font-medium text-cream shadow-[0_8px_24px_-8px_rgba(13,93,76,0.5)] hover:bg-teal-800 transition-colors"
                        >
                          <Clock className="h-4 w-4" />
                          Pošalji zahtjev
                        </motion.button>
                      </div>

                      <p className="text-xs text-ink-700/50 text-center">
                        Pošiljkom pristajete na obradu podataka u svrhu zakazivanja.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex flex-col items-center text-center gap-4 py-10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 12 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-teal-700"
                      >
                        <CheckCircle2 className="h-10 w-10" />
                      </motion.div>
                      <h3 className="font-display text-3xl font-medium text-ink-900">
                        Hvala, {form.name.split(" ")[0] || "prijatelju"}!
                      </h3>
                      <p className="text-ink-700/70 max-w-md">
                        Vaš zahtjev za <strong className="text-ink-900">{form.service || "pregledom"}</strong>
                        {form.date && <> na datum <strong className="text-ink-900">{form.date}</strong></>} je primljen.
                        Koordinator zove u roku sat vremena u radno vrijeme.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" });
                        }}
                        className="mt-4 text-sm font-medium text-teal-700 hover:text-teal-800 link-underline"
                      >
                        Pošalji još jedan zahtjev
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ icon: Icon, label, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-ink-700/70 uppercase tracking-wide">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-700/40 pointer-events-none" />
        <input
          type={type}
          {...props}
          className="w-full rounded-xl border border-ink-900/10 bg-cream/40 pl-10 pr-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
        />
      </div>
    </div>
  );
}
