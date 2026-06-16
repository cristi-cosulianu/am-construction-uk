import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AM Prime Construction" },
      { name: "description", content: "Get in touch with AM Prime Construction to discuss your construction or renovation project." },
      { property: "og:title", content: "Contact — AM Prime Construction" },
      { property: "og:description", content: "Discuss your project with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: {
      name: string;
      email: string;
      projectType: string;
      message: string;
    }) => sendContactEmail({ data }),
    onSuccess: () => setSent(true),
    onError: () =>
      toast.error(
        "Failed to send your message. Please try again or email us directly at contact@am-prime-construction.co.uk"
      ),
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    mutation.mutate({
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      projectType: fd.get("project") as string,
      message: fd.get("message") as string,
    });
  }

  return (
    <>
      <section className="hero-gradient pt-20 pb-16">
        <div className="container-page">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream-deep border border-border text-xs uppercase tracking-[0.25em]">
            Contact
          </span>
          <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-3xl">
            Let's discuss your project
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us a little about what you're planning and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            {[
              { icon: MapPin, label: "Office", value: "London, United Kingdom" },
              { icon: Phone, label: "Phone", value: "+44 7584 253431" },
              { icon: Mail, label: "Email", value: "contact@am-prime-construction.co.uk" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center size-12 rounded-xl bg-gold/15 text-gold shrink-0">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display text-xl">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Project type" name="project" placeholder="e.g. Renovation, fit-out" />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                minLength={10}
                className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-gold transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              disabled={mutation.isPending || sent}
            >
              {mutation.isPending ? "Sending…" : "Send message"}
              <Send className="size-4" />
            </button>
            {sent && (
              <p className="text-sm text-gold">Thanks — we'll be in touch shortly.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 outline-none focus:border-gold transition"
      />
    </div>
  );
}
