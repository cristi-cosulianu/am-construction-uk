import { createFileRoute } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AM Construction" },
      { name: "description", content: "Selected residential, commercial and restoration projects delivered by AM Construction across the UK." },
      { property: "og:title", content: "Projects — AM Construction" },
      { property: "og:description", content: "Selected work from across the UK." },
    ],
  }),
  component: ProjectsPage,
});

const items = [
  { img: project1, title: "Royal Exchange Restoration", tag: "Commercial", year: "2024", location: "City of London" },
  { img: project2, title: "Riverside Residences", tag: "Residential", year: "2024", location: "Greenwich" },
  { img: project3, title: "Atrium Office Fit-Out", tag: "Commercial", year: "2023", location: "Canary Wharf" },
  { img: project1, title: "Heritage Townhouse", tag: "Heritage", year: "2023", location: "Kensington" },
  { img: project2, title: "Skyline Apartments", tag: "Residential", year: "2022", location: "Stratford" },
  { img: project3, title: "Corporate HQ Refit", tag: "Commercial", year: "2022", location: "Shoreditch" },
];

function ProjectsPage() {
  return (
    <>
      <section className="hero-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream-deep border border-border text-xs uppercase tracking-[0.25em]">
            Projects
          </span>
          <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-4xl">
            Selected work from across the UK
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A snapshot of recent residential, commercial and restoration projects delivered by our team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-10 md:grid-cols-2">
          {items.map((p, i) => (
            <article key={i} className="group">
              <div className="aspect-[5/4] overflow-hidden rounded-3xl">
                <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl">{p.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{p.location} · {p.year}</p>
                </div>
                <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
