import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { useInView } from "@/hooks/use-in-view";
import heroWeave from "@/assets/hero-weave.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CFAB Ltd — Global Fabric & Accessories Sourcing" },
      {
        name: "description",
        content:
          "Canton Fabric & Accessories Ltd. sources premium fabrics and garment trims for global apparel brands — knits, wovens, denim, zippers, hardware and branding enrichments. Source Better. Build Better.",
      },
      {
        property: "og:title",
        content: "CFAB Ltd — Global Fabric & Accessories Sourcing",
      },
      {
        property: "og:description",
        content:
          "Premium fabrics and garment trims for global apparel brands. Source Better. Build Better.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "bayzid.jony@cfab-ltd.com";
const PHONE_PRIMARY = "+880 1917034748";
const PHONE_PRIMARY_HREF = "tel:+8801917034748";

const NAV_LINKS = [
  { label: "Fabrics", href: "#wings" },
  { label: "Accessories", href: "#wings" },
  { label: "Performance", href: "#perf" },
  { label: "Standards", href: "#cert" },
  { label: "House", href: "#founder" },
];

const PILLARS = [
  {
    no: "(a)",
    title: "Reliability",
    body: "Rigorous vetting of manufacturers and strict quality control on every yard.",
  },
  {
    no: "(b)",
    title: "Transparency",
    body: "Clear communication and end-to-end visibility throughout the sourcing process.",
  },
  {
    no: "(c)",
    title: "Efficiency",
    body: "Streamlined logistics and supplier identification to speed up production.",
  },
];

const FABRIC_CARDS = [
  {
    title: "Performance Knits",
    spec: "Scuba · Neoprene · Waffle · Ponte Roma",
    body: "Technical knit structures engineered for modern activewear and elevated basics.",
  },
  {
    title: "Fleece & Comfort",
    spec: "CVC/TC · Bonded Sherpa · Teddy · Sweater",
    body: "Brushed and bonded fleece ranges for cold-season and comfort-first programs.",
  },
  {
    title: "Synthetic Wovens",
    spec: "Taffeta · Pongee 190T–400T · Taslan · Sateen",
    body: "Soft-shell bonded, microfiber and high-density sateen & twill — delivered in Poly, Nylon, Modal or Lyocell blends.",
  },
  {
    title: "Naturals & Denim",
    spec: "Poplin · Viscose · Linen · Knit Denim",
    body: "Traditional and knit denim with dobby detail, engineered for comfort, durability and a sophisticated hand.",
  },
];

const ACCESSORY_CARDS = [
  {
    title: "Zipper Segments",
    spec: "Waterproof · Fancy Pullers · Printed Tape",
    body: "Multicolor tapes and reflective finishes engineered for high performance and visual distinction.",
  },
  {
    title: "Silicone & Rubber",
    spec: "3D Badges · PVC/PU · Silicone Pullers",
    body: "Tactile molded branding with sharp detail and weather resistance for outerwear and denims.",
  },
  {
    title: "Hardware & Trims",
    spec: "Snaps · Toggles · Buckles · Sliders",
    body: "Metal and plastic fasteners, cord adjusters and webbed connectors — colour-matched to the garment.",
  },
  {
    title: "Elastics · Reflective · Lace",
    spec: "Lycra Bindings · Bungee · Seam Tapes",
    body: "Y-elastics, jacquard tapes, heat-transfer reflectivity, waterproof seam sealing and lace collections.",
  },
];

const PERFORMANCE = [
  {
    title: "Weather Resistance",
    body: "Waterproof · Windproof · Breathable — for activewear and outerwear.",
  },
  {
    title: "Hygiene & Comfort",
    body: "Odor free · Anti-microbial — for performance sports and essentials.",
  },
  {
    title: "Moisture Management",
    body: "Quick dry · Wicking · Cooling — for gym wear and high-intensity sport.",
  },
  {
    title: "Textural Innovation",
    body: "Airflow · Peached finish · Sateen — for lifestyle fashion and athleisure.",
  },
];

const FIBERS = [
  { label: "Polyester & Blends", pct: 95 },
  { label: "Cotton & Viscose", pct: 85 },
  { label: "Sustainable (Lyocell)", pct: 70 },
  { label: "Performance Nylon", pct: 60 },
];

const CERTS = [
  {
    no: "Certification 01",
    title: "OEKO-TEX® STANDARD 100",
    body: "Every trim, snap and zipper tested free of harmful substances.",
  },
  {
    no: "Certification 02",
    title: "Global Recycled Standard",
    body: "Verified recycled content and documented chain of custody.",
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/10 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-6 place-items-center bg-clay font-display text-[11px] font-bold text-paper">
            C
          </span>
          <span className="font-display text-sm font-bold tracking-tight">
            CFAB
          </span>
        </a>
        <nav className="hidden gap-6 font-mono text-[11px] uppercase tracking-[0.15em] text-mute md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-clay"
        >
          Request quotes
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-line/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:border-r lg:border-line/10">
          <div className="p-6 sm:p-10">
            <Reveal
              animation="rise"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute"
            >
              B2B textile sourcing · Uttara, Dhaka
            </Reveal>
            <Reveal animation="reveal" delay={120}>
              <h1 className="mt-4 max-w-[16ch] text-balance font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
                Source better. Build better.
              </h1>
            </Reveal>
            <Reveal animation="rise" delay={260}>
              <p className="mt-5 max-w-[46ch] text-pretty text-sm leading-relaxed text-mute sm:text-base">
                A sourcing house for apparel brands and manufacturers. We unroll
                premium fabrics and precision accessories — from first swatch to
                final shipment, bridging the gap between design and production.
              </p>
            </Reveal>
            <Reveal animation="rise" delay={380}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="bg-clay px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ink"
                >
                  Email the house
                </a>
                <a
                  href={PHONE_PRIMARY_HREF}
                  className="border border-line/20 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors hover:border-line"
                >
                  {PHONE_PRIMARY}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 border-t border-line/10 lg:border-t-0">
            {[
              ["2", "Wings"],
              ["02", "Standards"],
              ["∞", "Weaves"],
            ].map(([v, label], i) => (
              <div key={label} className={i > 0 ? "border-l border-line/10 p-5" : "p-5"}>
                <Reveal animation="rise" delay={400 + i * 120}>
                  <div className="font-display text-2xl font-bold">{v}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-mute">
                    {label}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal animation="rise" delay={200} className="h-full">
            <div className="relative h-full min-h-[420px] w-full overflow-hidden">
              <img
                src={heroWeave}
                alt="Raw woven cotton twill on a mill loom"
                className="h-full w-full object-cover"
                width={1080}
                height={1350}
              />
              <div className="pointer-events-none absolute inset-0 weave opacity-40 mix-blend-multiply" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-line/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <Reveal animation="rise" className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
          The house — about
        </Reveal>
        <div className="mt-5 grid gap-10 lg:grid-cols-12">
          <Reveal animation="rise" delay={100} className="lg:col-span-7">
            <h2 className="max-w-[22ch] text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Reliability. Transparency. Efficiency.
            </h2>
            <p className="mt-4 max-w-[52ch] text-pretty text-sm leading-relaxed text-mute sm:text-base">
              Canton Fabric & Accessories Ltd. is a dedicated sourcing company
              connecting businesses with high-quality textiles from trusted
              manufacturers across China. Our team brings deep industry knowledge
              and a keen eye for detail — every fabric carefully vetted for
              fashion brands, manufacturers and retailers worldwide.
            </p>
          </Reveal>
          <div className="grid gap-px bg-line/10 lg:col-span-5">
            {[
              ["Mission", "Deliver reliable, high-quality sourcing solutions by connecting clients with trusted global suppliers — efficiency, transparency and consistent value at every stage."],
              ["Vision", "Become a leading global partner in fabric sourcing, recognized for innovation, sustainability and excellence — empowering businesses to create outstanding textile products with confidence."],
            ].map(([t, b], i) => (
              <Reveal key={t} animation="rise" delay={200 + i * 120} className="bg-paper">
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                    {t}
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-mute">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="border-b border-line/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Reveal animation="rise" className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
          Our strategic value proposition
        </Reveal>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              animation="rise"
              delay={i * 120}
              className={i > 0 ? "border-t border-line/10 sm:border-l sm:border-t-0" : "border-t border-line/10 sm:border-t-0"}
            >
              <div className="p-5 pl-4">
                <div className="font-mono text-[10px] text-clay">{p.no}</div>
                <div className="mt-2 font-display text-base font-bold">{p.title}</div>
                <p className="mt-1 text-[13px] leading-snug text-mute">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WingCard({ card, delay }: { card: (typeof FABRIC_CARDS)[number]; delay: number }) {
  return (
    <Reveal animation="rise" delay={delay}>
      <div className="group h-full bg-paper p-4 transition-colors hover:bg-paper-deep">
        <div className="thread h-6 w-px bg-clay/60" />
        <div className="mt-3 font-display text-sm font-bold">{card.title}</div>
        <div className="font-mono text-[10px] text-mute">{card.spec}</div>
        <p className="mt-2 text-[12px] leading-snug text-mute">{card.body}</p>
      </div>
    </Reveal>
  );
}

function Wings() {
  return (
    <section id="wings" className="border-b border-line/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="border-b border-line/10 p-6 lg:border-b-0 lg:border-r lg:p-10">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl font-bold tracking-tight">Fabric</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
              Wing 01
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-px bg-line/10">
            {FABRIC_CARDS.map((c, i) => (
              <WingCard key={c.title} card={c} delay={i * 110} />
            ))}
          </div>
        </div>
        <div className="p-6 lg:p-10">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl font-bold tracking-tight">Accessories</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
              Wing 02 · est. 2021
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-px bg-line/10">
            {ACCESSORY_CARDS.map((c, i) => (
              <WingCard key={c.title} card={c} delay={i * 110} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FiberBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="py-4">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-sm font-bold">{label}</span>
        <span className="font-mono text-[11px] text-paper/60">{pct}% availability</span>
      </div>
      <div className="mt-2 h-px w-full bg-paper/15" />
      <div
        className="mt-[-1px] h-px bg-clay transition-[width] duration-1000 ease-out"
        style={{ width: inView ? `${pct}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

function Performance() {
  return (
    <section id="perf" className="border-b border-line/10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <Reveal animation="rise" className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
          Performance fabric functions
        </Reveal>
        <div className="mt-5 grid grid-cols-1 gap-px bg-paper/10 sm:grid-cols-2 md:grid-cols-4">
          {PERFORMANCE.map((p, i) => (
            <Reveal key={p.title} animation="rise" delay={i * 110} className="bg-ink">
              <div className="p-5">
                <div className="font-mono text-[10px] text-clay">
                  0{i + 1}
                </div>
                <div className="mt-2 font-display text-base font-bold">{p.title}</div>
                <p className="mt-1 text-[12px] leading-snug text-paper/60">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal animation="rise">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
                Versatility in fiber blending
              </div>
              <div className="mt-3 divide-y divide-paper/10 border-y border-paper/10">
                {FIBERS.map((f, i) => (
                  <FiberBar key={f.label} label={f.label} pct={f.pct} delay={i * 150} />
                ))}
              </div>
              <p className="mt-4 max-w-[52ch] text-[12px] leading-relaxed text-paper/50">
                Every fabric above is available in any blend — tuned to your
                client budget and performance needs.
              </p>
            </div>
          </Reveal>
          <Reveal animation="rise" delay={150}>
            <div className="weave-light h-full min-h-[220px] w-full border border-paper/10 p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
                Why partner with us
              </div>
              <div className="mt-4 space-y-4">
                {[
                  ["Superior quality", "Rigorous quality control ensures every trim, snap and zipper meets strict international apparel standards."],
                  ["Competitive pricing", "Direct manufacturer pricing models deliver cost efficiency without compromising durability or finish."],
                  ["On-time delivery", "Streamlined production and logistics guarantee strict adherence to brand production timelines."],
                ].map(([t, b]) => (
                  <div key={t} className="border-l border-clay pl-4">
                    <div className="font-display text-sm font-bold">{t}</div>
                    <p className="mt-1 text-[12px] leading-snug text-paper/60">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="cert" className="border-b border-line/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {CERTS.map((c, i) => (
            <Reveal
              key={c.no}
              animation="rise"
              delay={i * 120}
              className={i === 0 ? "border-b border-line/10 md:border-b-0 md:border-r" : ""}
            >
              <div className="p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                  {c.no}
                </div>
                <div className="mt-2 font-display text-lg font-bold">{c.title}</div>
                <p className="mt-1 text-[13px] text-mute">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="border-b border-line/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:border-r lg:border-line/10">
          <Reveal animation="rise" className="h-full">
            <div className="weave relative flex h-full min-h-[320px] w-full items-center justify-center bg-paper-deep p-10">
              <span className="font-display text-[8rem] font-bold leading-none text-clay/25 sm:text-[10rem]">
                C
              </span>
              <span className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                Canton Fabric &amp; Accessories Ltd.
              </span>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7 p-6 sm:p-10">
          <Reveal animation="rise" className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
            The house — leadership
          </Reveal>
          <Reveal animation="reveal" delay={120}>
            <blockquote className="mt-5 max-w-[34ch] text-pretty font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              “Bridging the gap between design and production with excellence.”
            </blockquote>
          </Reveal>
          <Reveal animation="rise" delay={220}>
            <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
              Bayzid Jony · Founder &amp; CEO
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block text-[13px] text-clay hover:underline"
            >
              {EMAIL}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pt-14">
        <Reveal animation="rise">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
            Partner with us
          </div>
          <h2 className="mt-3 max-w-[20ch] text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Let’s create exceptional textile products together.
          </h2>
        </Reveal>
      </div>
      <div className="mx-auto mt-10 max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-paper/10 md:grid-cols-3">
          <Reveal animation="rise" delay={0} className="bg-ink">
            <div className="p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
                Email
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block break-all font-display text-sm font-bold transition-colors hover:text-clay"
              >
                {EMAIL}
              </a>
            </div>
          </Reveal>
          <Reveal animation="rise" delay={120} className="bg-ink">
            <div className="p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
                Call
              </div>
              <a
                href={PHONE_PRIMARY_HREF}
                className="mt-2 block font-display text-sm font-bold transition-colors hover:text-clay"
              >
                {PHONE_PRIMARY}
              </a>
              <a
                href="tel:+8801675908582"
                className="mt-1 block font-display text-sm font-bold transition-colors hover:text-clay"
              >
                +880 1675908582
              </a>
            </div>
          </Reveal>
          <Reveal animation="rise" delay={240} className="bg-ink">
            <div className="p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
                Corporate office
              </div>
              <p className="mt-2 font-display text-sm font-bold leading-snug">
                House-95, Road-18, Sector-14,
                <br />
                Uttara, Dhaka 1230
              </p>
              <p className="mt-2 text-[12px] leading-snug text-paper/50">
                Accessories desk: House 1328, Road 3, Avenue 2, Mirpur DOHS, Dhaka 1216
              </p>
            </div>
          </Reveal>
        </div>
        <div className="border-t border-paper/10 px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-bold">CFAB Ltd</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50">
              Source better. Build better.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <Nav />
      <Hero />
      <About />
      <Pillars />
      <Wings />
      <Performance />
      <Certifications />
      <Founder />
      <Contact />
    </div>
  );
}
