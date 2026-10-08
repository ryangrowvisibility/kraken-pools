const PHONE_DISPLAY = "(905) 802-3755";
const PHONE_TEL = "tel:+19058023755";
const PHONE_SMS = "sms:+19058023755";
const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=Kraken%20Pools&query_place_id=ChIJpeBgVm5hK4gR5zBJ7Rya3pc";
const FACEBOOK = "https://www.facebook.com/krakenpoolsinc";
const INSTAGRAM = "https://www.instagram.com/krakenpoolsinc";
const ADDRESS_LINE_1 = "5035 N Service Rd, Unit C7";
const ADDRESS_LINE_2 = "Burlington, ON L7L 5V2";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=5035%20N%20Service%20Rd%20Unit%20C7%2C%20Burlington%2C%20ON%20L7L%205V2";

type IconName =
  | "pencil" | "pool" | "liner" | "wrench" | "wave" | "tub"
  | "phone" | "star" | "clock" | "pin" | "check" | "chat" | "users" | "shield" | "message" | "directions";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "pencil":
      return (<svg {...p}><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></svg>);
    case "pool":
      return (<svg {...p}><path d="M7 15V5a2 2 0 0 1 4 0" /><path d="M13 15V5a2 2 0 0 1 4 0" /><path d="M7 9h6" /><path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" /></svg>);
    case "liner":
      return (<svg {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 12c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" /></svg>);
    case "wrench":
      return (<svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" /></svg>);
    case "wave":
      return (<svg {...p}><path d="M2 8c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" /><path d="M2 13c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" /><path d="M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" /></svg>);
    case "tub":
      return (<svg {...p}><path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z" /><path d="M8 8c0-1.5 1-1.5 1-3" /><path d="M12 8c0-1.5 1-1.5 1-3" /><path d="M16 8c0-1.5 1-1.5 1-3" /></svg>);
    case "phone":
      return (<svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>);
    case "star":
      return (<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>);
    case "clock":
      return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
    case "pin":
      return (<svg {...p}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case "check":
      return (<svg {...p}><path d="M20 6L9 17l-5-5" /></svg>);
    case "chat":
      return (<svg {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>);
    case "users":
      return (<svg {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7" /><path d="M18 14a6.5 6.5 0 0 1 3.5 6" /></svg>);
    case "shield":
      return (<svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>);
    case "message":
      return (<svg {...p}><path d="M4 4h16v12H8l-4 4z" /><path d="M8 9h8" /><path d="M8 12h5" /></svg>);
    case "directions":
      return (<svg {...p}><path d="M12 2l10 10-10 10L2 12z" /><path d="M9 13v-2h5" /><path d="M12 8.5L14.5 11 12 13.5" /></svg>);
  }
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

const services: { icon: IconName; name: string; text: string; tag?: string }[] = [
  {
    icon: "pencil",
    name: "Inground Pool Design",
    text: "Sit down with the owners and turn your backyard idea into a pool plan you can actually build, with the whole space planned around it.",
  },
  {
    icon: "pool",
    name: "Inground Pool Installation",
    text: "Full construction of new inground pools, with timeline updates at every stage and a clean, organized site from dig to fill.",
    tag: "Design + build",
  },
  {
    icon: "liner",
    name: "Liner Installation & Replacement",
    text: "New and replacement liners, including fixing liners that another company installed badly.",
  },
  {
    icon: "wrench",
    name: "Pool Repairs & Troubleshooting",
    text: "Problem with a pool someone else built? We come out, often the next day, find the cause and fix it.",
    tag: "Fast response",
  },
  {
    icon: "wave",
    name: "Weekly Cleaning & Maintenance",
    text: "Ongoing cleaning and servicing with an eye for detail, and we teach you how to run your own system.",
  },
  {
    icon: "tub",
    name: "Hot Tub Service",
    text: "Service and installation for hot tubs alongside your pool care.",
  },
];

const reviews = [
  {
    name: "Tricia A.",
    job: "Pool repair",
    text: "Our two-year-old pool had a major problem and the original installer would not fix it. Kraken was on site the very next morning and fixed it. Fast, reassuring and genuinely kind.",
  },
  {
    name: "Tina S.",
    job: "Inground pool design & build",
    text: "We met with a lot of pool companies before we found Kraken. Cody, Brad, Andrew and Adam planned our backyard oasis with us. Every crew was friendly and professional, and every stage was clean and organized. No complaints.",
  },
  {
    name: "Ryan B.",
    job: "Pool cleaning & service",
    text: "After years with the big pool companies, Kraken is the one I trust most. They explained every step so I can run and troubleshoot my complicated system myself. Fair prices and real attention to detail.",
  },
  {
    name: "Dawn S.",
    job: "Inground pool installation",
    text: "They kept us updated on the timeline through the whole build and answered every call and text. Still quick to respond after the pool was finished. Thank you Cody and Andrew.",
  },
  {
    name: "Victoria A.",
    job: "Liner repair",
    text: "They came to fix a liner another company had installed badly, checked how the whole pool was running, and suggested a fix for another issue they spotted.",
  },
  {
    name: "Dee D.",
    job: "Advice",
    text: "I called Cody about a robot cleaner they do not even service. He still tracked down the part number and a supplier and emailed me the details.",
  },
];

const whyUs: { icon: IconName; title: string; text: string }[] = [
  { icon: "wrench", title: "We fix what others would not", text: "Botched liners and two-year-old installs are a big part of our work." },
  { icon: "message", title: "Every call and text answered", text: "During the build and after it. You are never left guessing." },
  { icon: "users", title: "Owners on your project", text: "You meet the people who run the company, not a call centre." },
  { icon: "check", title: "Honest, fair pricing", text: "Customers who left bigger companies say we are more straightforward." },
];

const steps = [
  { title: "Call or text", text: `Reach us at ${PHONE_DISPLAY}. Tell us about your yard, your pool, or the problem you are dealing with.` },
  { title: "Site visit", text: "For repairs we often come the next day. For new pools we walk the yard with you and talk through what you want." },
  { title: "Design & clear plan", text: "You get a plan, a price and a timeline before any work starts." },
  { title: "Build or fix", text: "Our crews work clean and organized, with updates at each stage." },
  { title: "Swim, and keep us on call", text: "We show you how your system works and stay reachable for service, openings and questions." },
];

const areas = ["Burlington", "Oakville", "Hamilton", "Golden Horseshoe", "Greater Toronto Area"];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Kraken Pools is based in Burlington and works across Oakville, Hamilton, the Golden Horseshoe and the GTA. The team says it has been in more than 15,000 yards across the GTA.",
  },
  {
    q: "Will you fix a pool another company installed?",
    a: "Yes. A lot of our work is repairing pools and liners that other contractors installed, including problems the original installer would not come back for. We often get out the next day to take a look.",
  },
  {
    q: "Do you design and build new inground pools?",
    a: "Yes. We help you plan the pool and the backyard around it, then build it with timeline updates at each stage and a clean, organized site.",
  },
  {
    q: "Do you offer weekly pool maintenance?",
    a: "Yes. We offer ongoing cleaning and servicing, and we walk you through your equipment so you understand how to run and troubleshoot it yourself.",
  },
  {
    q: "Do you replace pool liners?",
    a: "Yes. We install new liners and replace or repair liners that were installed poorly, and we check how the rest of the pool is running while we are there.",
  },
  {
    q: "How experienced is the team?",
    a: "The Kraken team brings more than 30 years of combined experience in pool design, construction and service.",
  },
  {
    q: "How do I reach you?",
    a: `Call or text ${PHONE_DISPLAY}. Our office is at 5035 N Service Rd, Unit C7 in Burlington. Call ahead before visiting, since the crew is often out on job sites.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Kraken Pools",
  telephone: "+1-905-802-3755",
  url: "https://kraken-pools.growlocalvisibility.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5035 N Service Rd Unit C7",
    addressLocality: "Burlington",
    addressRegion: "ON",
    postalCode: "L7L 5V2",
    addressCountry: "CA",
  },
  areaServed: areas,
  sameAs: [FACEBOOK, INSTAGRAM],
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 18 },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pool services",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> {ADDRESS_LINE_1}, Burlington</span>
          <span>Serving Burlington, Oakville, Hamilton &amp; the GTA</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Kraken Pools home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><Icon name="wave" className="h-6 w-6" /></span>
            <span className="font-heading text-2xl font-extrabold tracking-tight text-brand-deep">Kraken Pools</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold lg:flex">
            <a href="#services" className="hover:text-brand hover:underline">Services</a>
            <a href="#reviews" className="hover:text-brand hover:underline">Reviews</a>
            <a href="#about" className="hover:text-brand hover:underline">About</a>
            <a href="#area" className="hover:text-brand hover:underline">Service Area</a>
            <a href="#faq" className="hover:text-brand hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden font-bold text-brand-deep md:inline">{PHONE_DISPLAY}</a>
            <a href={PHONE_TEL} className="btn hidden min-h-12 items-center gap-2 rounded-full bg-cta px-5 font-bold text-white hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:inline-flex">
              <Icon name="phone" className="h-5 w-5" /> Call Now
            </a>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="btn grid h-12 w-12 place-items-center rounded-full bg-cta text-white md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-gradient-to-b from-tint to-surface">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="rise mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-sm font-semibold text-brand ring-1 ring-line">
                <Icon name="users" className="h-4 w-4" /> 30+ years combined experience
              </p>
              <h1 className="rise rise-2 text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight text-brand-deep">
                Inground Pool Design, Installation &amp; Service in Burlington
              </h1>
              <p className="rise rise-3 mt-5 max-w-[58ch] text-lg text-muted">
                New pools, liners, repairs and weekly service across the Golden Horseshoe. We are the team people call when another pool company will not come back.
              </p>
              <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-cta px-7 text-lg font-bold text-white hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE_DISPLAY}
                </a>
                <a href="#services" className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-brand bg-surface px-7 text-lg font-bold text-brand hover:bg-brand-soft">
                  See our services
                </a>
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted hover:text-brand">
                <Stars />
                <span><strong className="text-ink">4.6</strong> · 18 Google reviews</span>
                <span aria-hidden="true">·</span>
                <span>Burlington-based</span>
                <span aria-hidden="true">·</span>
                <span>Owner-operated</span>
              </a>
            </div>

            <figure className="rise rise-3 rounded-3xl bg-surface p-7 shadow-[0_24px_50px_-30px_oklch(0.33_0.11_252/0.45)] ring-1 ring-line">
              <div className="flex items-center justify-between">
                <Stars className="h-6 w-6" />
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-deep">Pool repair</span>
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed">
                “Our two-year-old pool had a major problem and the original installer would not fix it. Kraken was on site the very next morning and fixed it.”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <strong className="block text-base">Tricia A.</strong>
                <span className="text-muted">Google review</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why Golden Horseshoe homeowners call Kraken" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, big: "4.6 stars", small: "18 Google reviews" },
              { icon: "users" as IconName, big: "30+ years", small: "combined team experience" },
              { icon: "pool" as IconName, big: "15,000+ yards", small: "visited across the GTA" },
              { icon: "clock" as IconName, big: "Next-day visits", small: "for urgent repairs" },
            ].map((t) => (
              <li key={t.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span className="leading-tight"><strong className="block font-heading text-lg">{t.big}</strong><span className="text-sm text-white/80">{t.small}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Pool services, start to swim</h2>
              <p className="mt-4 text-lg text-muted">
                One team for the whole life of your pool: planning it, building it, keeping the water clear, and fixing it when something goes wrong.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`card flex flex-col rounded-2xl bg-surface p-6 ring-1 ${s.tag ? "ring-2 ring-brand" : "ring-line"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.tag && <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">{s.tag}</span>}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-deep">{s.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.text}</p>
                  <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1 font-bold text-brand hover:underline">Call about this <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Rated 4.6 from 18 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Customers name Cody, Andrew, Adam and Brad, and they keep coming back to honesty and follow-through.</p>
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 items-center gap-2 self-start rounded-full border-2 border-brand bg-surface px-5 font-bold text-brand hover:bg-brand-soft md:self-auto">
                Read all reviews on Google <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="card flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-line">
                  <blockquote className="flex-1">“{r.text}”</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                    <strong className="block text-base">{r.name}</strong>
                    <span className="text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">A Burlington pool company that picks up the phone</h2>
              <div className="mt-5 space-y-4 text-lg text-muted">
                <p>
                  Kraken Pools is an owner-operated pool design, build and service company based in Burlington. Co-owner Andrew White and the team, including Cody, Adam and Brad, bring more than 30 years of combined experience and have been in over 15,000 yards across the GTA.
                </p>
                <p>
                  Many of our customers come to us after a bad experience somewhere else: a liner installed wrong, a new pool with a problem the builder would not fix, or a service company that never explained anything. We show up, find the real cause and fix it properly.
                </p>
                <p>
                  We also like explaining things. Whether we built your pool or are just servicing it, we will walk you through how your system works so you feel confident running it.
                </p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {whyUs.map((w) => (
                <li key={w.title} className="rounded-2xl bg-tint p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-white"><Icon name={w.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{w.title}</h3>
                  <p className="mt-1 text-muted">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-line bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">How it works</h2>
            <p className="mt-3 max-w-[60ch] text-lg text-muted">Same simple process whether you want a new pool or need one fixed.</p>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-surface p-6 ring-1 ring-line">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand font-heading font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Serving Burlington and the Golden Horseshoe</h2>
              <p className="mt-4 text-lg text-muted">
                From our Burlington shop we cover Oakville, Hamilton, the Golden Horseshoe and the GTA.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-deep">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <address className="mt-8 not-italic text-muted">
                <strong className="block text-ink">Kraken Pools</strong>
                {ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}
              </address>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-brand hover:underline">
                <Icon name="directions" className="h-5 w-5" /> Get directions
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                title="Map showing Kraken Pools in Burlington, Ontario"
                src="https://maps.google.com/maps?q=5035%20N%20Service%20Rd%20Unit%20C7%2C%20Burlington%2C%20ON%20L7L%205V2&z=12&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Pool questions, answered</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl bg-surface ring-1 ring-line">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-lg font-bold text-brand-deep">
                    {f.q}
                    <svg className="chev h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Planning a pool, or need one fixed? Call Kraken.</h2>
              <p className="mt-3 text-lg text-white/80">Design, builds, liners, repairs and weekly service across Burlington and the Golden Horseshoe.</p>
            </div>
            <a href={PHONE_TEL} className="btn inline-flex min-h-14 shrink-0 items-center gap-2 rounded-full bg-cta px-8 text-lg font-bold text-white hover:bg-cta-hover">
              <Icon name="phone" className="h-5 w-5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink pb-28 text-white/75 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-heading text-xl font-extrabold text-white">Kraken Pools</p>
            <p className="mt-3">Inground pool design, installation, liners, repairs and service in Burlington, Oakville, Hamilton and the GTA.</p>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href={PHONE_TEL} className="hover:text-white">{PHONE_DISPLAY}</a></li>
              <li>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</li>
              <li>Call or text to book a visit</li>
              <li className="flex gap-3 pt-1">
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Kraken Pools on Facebook" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" /></svg>
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Kraken Pools on Instagram" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                </a>
                <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" aria-label="Kraken Pools on Google Maps" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20">
                  <Icon name="pin" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {services.map((s) => (<li key={s.name}>{s.name}</li>))}
            </ul>
          </div>
        </div>
        <p className="mx-auto max-w-[1200px] border-t border-white/15 px-5 pt-6 text-sm md:px-6">© {new Date().getFullYear()} Kraken Pools. Burlington, Ontario.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-surface p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={PHONE_TEL} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta font-bold text-white"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={PHONE_SMS} className="btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand font-bold text-white"><Icon name="chat" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
