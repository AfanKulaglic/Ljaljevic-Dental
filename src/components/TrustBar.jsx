import { Container } from "./ui";
import { TRUST_ITEMS } from "../data/content";

export default function TrustBar() {
  // Duplicate for seamless marquee
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <section className="relative py-10 border-y border-ink-900/5 bg-cream">
      <Container>
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-10">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-ink-700/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
