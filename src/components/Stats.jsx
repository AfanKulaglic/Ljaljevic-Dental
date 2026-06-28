import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Container, Reveal } from "./ui";
import { STATS } from "../data/content";

function useCountUp(target, inView, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return value;
}

function formatNumber(n) {
  if (n >= 1000) return n.toLocaleString("bs-BA").replace(/\./g, " ");
  return String(n);
}

function StatItem({ stat, inView, index }) {
  const value = useCountUp(stat.value, inView);
  return (
    <Reveal delay={index * 0.08}>
      <div className="flex flex-col gap-2 border-t border-ink-900/15 pt-4">
        <div className="font-display text-5xl lg:text-6xl font-medium leading-none text-ink-900 tabular-nums">
          {formatNumber(value)}
          <span className="text-teal-600">{stat.suffix}</span>
        </div>
        <div className="text-sm text-ink-700/60">{stat.label}</div>
      </div>
    </Reveal>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-24 border-y border-ink-900/10 bg-cream">
      <Container>
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
            <div className="flex flex-col gap-2 max-w-md">
              <span className="text-xs uppercase tracking-[0.18em] text-ink-700/50">
                Brojevi, ne reklama
              </span>
              <p className="text-base text-ink-700/70 leading-relaxed">
                Šta znači 25 godina na istoj adresi. Konkretno, bez zaokruživanja.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 flex-1">
              {STATS.map((s, i) => (
                <StatItem key={s.label} stat={s} inView={inView} index={i} />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
