import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, BadgePoundSterling, Clock, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import drylining from "@/assets/service-drylining.jpg";
import steel from "@/assets/service-steel.jpg";
import renovation from "@/assets/service-renovation.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABV Contractor — Building with passion, delivering with precision" },
      { name: "description", content: "UK construction company delivering residential, commercial and renovation projects with reliable timetables and transparent communication." },
      { property: "og:title", content: "ABV Contractor — Building with passion" },
      { property: "og:description", content: "From new construction to complete renovations." },
    ],
  }),
  component: HomePage,
});

const services = [
  { img: drylining, title: "Drylining & Ceiling Systems", desc: "Precise partitions and ceilings for clean, refined interiors." },
  { img: steel, title: "Steel Framing Services", desc: "Light-gauge steel framing engineered for speed and strength." },
  { img: renovation, title: "Renovation & Fit-Out", desc: "Full residential and commercial renovations, end to end." },
];

const projects = [
  { img: project1, title: "Royal Exchange Restoration", tag: "Commercial" },
  { img: project2, title: "Riverside Residences", tag: "Residential" },
  { img: project3, title: "Atrium Office Fit-Out", tag: "Commercial" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Neoclassical building flanked by modern skyscrapers"
          className="absolute inset-0 size-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/40 to-navy/80" />
        <div className="relative z-10 container-page h-full flex flex-col justify-end pb-20 text-cream">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">ABV Contractor</span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl text-cream">
            Building with passion, <br className="hidden md:block" />delivering with precision
          </h1>
          <p className="mt-6 max-w-xl text-cream/85 text-lg">
            From brand-new construction to complete renovations, we deliver quality you can demonstrate,
            timetables you can rely on, and communication that's transparent and truthful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Let's talk <ArrowRight className="size-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition">
              View projects
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 hero-gradient">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Why choose us</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Resilient projects built on teamwork and trust
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Accreditation", desc: "Dedicated to maintaining the highest standards of Health & Safety across every project." },
              { icon: BadgePoundSterling, title: "Competitive Pricing", desc: "Honest, transparent estimates with flexibility to find the right solution for your budget." },
              { icon: Clock, title: "Timely Delivery", desc: "We value your time and work diligently to deliver high-quality results on schedule." },
            ].map((f) => (
              <div key={f.title} className="bg-card rounded-2xl p-8 border border-border/50 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-lg transition">
                <span className="inline-flex items-center justify-center size-12 rounded-xl bg-gold/10 text-gold">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-display">{f.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Services</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Complete solutions for construction and renovation
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-navy underline-offset-4 hover:underline">
              All services <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link to="/services" key={s.title} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={s.img} alt={s.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <h3 className="mt-5 text-xl font-display">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-cream-deep">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Recent projects</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-2xl">
            Selected work from across the UK
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-lg font-display">{p.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="rounded-3xl bg-navy text-cream px-8 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-5xl max-w-xl text-cream">
                Have a project in mind? Let's build it together.
              </h2>
              <p className="mt-4 max-w-lg text-cream/70">
                Tell us about your project and we'll come back with a clear plan, honest timeline, and a fair price.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Discuss your project <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
