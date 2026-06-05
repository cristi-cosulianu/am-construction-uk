import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import drylining from "@/assets/service-drylining.jpg";
import steel from "@/assets/service-steel.jpg";
import renovation from "@/assets/service-renovation.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AM Construction" },
      { name: "description", content: "Complete construction and renovation services: drylining, steel framing, fit-outs, residential and commercial builds." },
      { property: "og:title", content: "Services — AM Construction" },
      { property: "og:description", content: "Complete construction solutions." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: drylining,
    title: "Drylining & Ceiling Systems",
    desc: "Metal stud partitions, suspended ceilings, acoustic and fire-rated systems for clean, refined interiors.",
    bullets: ["Metsec / Knauf systems", "Acoustic & fire-rated", "Suspended ceilings"],
  },
  {
    img: steel,
    title: "Steel Framing Services",
    desc: "Light-gauge steel framing for residential, commercial and high-rise builds — engineered for speed and strength.",
    bullets: ["SFS infill panels", "Load-bearing systems", "Pre-fabricated solutions"],
  },
  {
    img: renovation,
    title: "Renovation & Fit-Out",
    desc: "End-to-end residential and commercial renovations — from structural changes to the final coat of paint.",
    bullets: ["Full-property renovations", "Office fit-outs", "Heritage restoration"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="hero-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream-deep border border-border text-xs uppercase tracking-[0.25em]">
            Services
          </span>
          <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-4xl">
            Complete solutions for construction and renovation
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We cover the full project lifecycle — from planning and design coordination through to handover.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page space-y-24">
          {services.map((s, i) => (
            <div key={s.title} className={`grid gap-12 md:grid-cols-2 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img src={s.img} alt={s.title} loading="lazy" className="size-full object-cover" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold">0{i + 1}</span>
                <h2 className="mt-3 font-display text-4xl">{s.title}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <span className="inline-flex items-center justify-center size-6 rounded-full bg-gold/15 text-gold">
                        <Check className="size-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-8">
                  Enquire about this service <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
