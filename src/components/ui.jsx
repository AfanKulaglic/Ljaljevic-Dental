import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ---------------- Container ---------------- */
export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/* ---------------- Eyebrow label ---------------- */
export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 ${className}`}
    >
      <span className="h-px w-6 bg-teal-500" />
      {children}
    </span>
  );
}

/* ---------------- SectionTitle ---------------- */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
  className = "",
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={titleId} className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-ink-900">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base md:text-lg text-ink-700/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------- Button ---------------- */
export function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const Tag = as;
  const variants = {
    primary:
      "bg-teal-700 text-cream hover:bg-teal-800 shadow-[0_8px_24px_-8px_rgba(13,93,76,0.5)]",
    gold:
      "bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-[0_8px_24px_-8px_rgba(212,168,67,0.5)]",
    outline:
      "border border-ink-900/15 text-ink-900 hover:border-teal-500 hover:text-teal-700 bg-white/40",
    ghost: "text-ink-900 hover:bg-ink-900/5",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  return (
    <Tag
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-[var(--ease-lux)] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Reveal wrapper (scroll animation) ---------------- */
export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Star rating ---------------- */
export function Stars({ count = 5, className = "" }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-gold-500"
          aria-hidden="true"
        >
          <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8 4.8 17l1-5.8L1.5 7.2l5.9-.9L10 1z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------------- Hook: scroll progress ---------------- */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}
