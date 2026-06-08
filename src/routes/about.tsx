import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import paloteImg from "@/assets/palote-petrica.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AM Prime Construction" },
      { name: "description", content: "Industry-leading UK construction company with over 10 years of collective experience, dedicated to teamwork, trust and quality." },
      { property: "og:title", content: "About AM Prime Construction" },
      { property: "og:description", content: "Built on teamwork and trust." },
    ],
  }),
  component: AboutPage,
});

const team: { name: string; role: string; image?: string }[] = [
  { name: "Petrica Palote", role: "Managing Director", image: paloteImg.url },
  { name: "Alin Micle", role: "Operations Director" },
  { name: "Cătălin Pagu", role: "Site Manager" },
];

function AboutPage() {
  return (
    <>
      <section className="hero-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream-deep border border-border text-xs uppercase tracking-[0.25em]">
            About us
          </span>
          <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-4xl">
            We build resilient projects through teamwork and trust
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A results-driven construction company with deep experience in residential, commercial and renovation work across the United Kingdom.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Discuss your project <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-gold">About us</h2>
          <p className="mt-8 text-foreground/85 leading-relaxed text-lg">
            AM Prime Construction is an industry-leading company in the UK, led by a long-serving team with
            over 10 years of collective experience in the construction industry across a diverse range
            of projects. Our leadership team is dedicated to delivering excellence in every project we
            undertake. At AM Prime Construction, we recognise the pivotal role of a dedicated workforce in driving the
            success of a company — that's why we prioritise the development of our team. Our dedication
            to client satisfaction is uncompromising. We don't just build structures; we build lasting
            relationships based on reliability, quality, and professionalism.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="rounded-3xl overflow-hidden">
            <img src={teamImg} alt="The AM Prime Construction team" loading="lazy" className="w-full h-[60vh] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Leadership</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">The people behind the projects</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="bg-card border border-border/60 rounded-2xl p-6 text-center">
                {m.image ? (
                  <img src={m.image} alt={m.name} loading="lazy" className="mx-auto size-24 rounded-full object-cover" />
                ) : (
                  <div className="mx-auto size-24 rounded-full bg-gradient-to-br from-gold-soft to-gold/40" />
                )}
                <h3 className="mt-5 font-display text-lg">{m.name}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-deep">
        <div className="container-page grid gap-12 md:grid-cols-3">
          {[
            { k: "10+", v: "Years of collective experience" },
            { k: "120+", v: "Projects delivered across the UK" },
            { k: "100%", v: "Commitment to quality & safety" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-6xl text-gold">{s.k}</div>
              <p className="mt-3 text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
