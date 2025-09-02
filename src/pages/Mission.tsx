import { PageLayout } from "@/components/PageLayout";
import { useEffect } from "react";

const Mission = () => {
  // SEO
  useEffect(() => {
    document.title = "Mission | ALMARA";
    const desc = "We bring intention, vision and clarity to foster balanced growth—with kindness and compassion.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  return (
    <PageLayout title="Mission">
      {/* Section 1 — Our Mission */}
      <section className="h-screen flex items-center justify-center px-12">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">Our Mission</h1>
          <p className="leading-relaxed text-base text-[#f4eada] font-helvetica-now max-w-2xl mx-auto">
            We bring intention, vision and clarity to foster balanced growth—with kindness and compassion.
          </p>
          <p className="leading-relaxed text-base text-[#f4eada] font-helvetica-now max-w-2xl mx-auto">
            Almara pairs wisdom with execution: grounded judgment, simple structures, and a quiet, steady core that guides how we steward capital, culture, and relationships.
          </p>
        </div>
      </section>

      {/* Section 2 — Our Pillars */}
      <section className="h-screen flex items-center justify-center px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">Our Pillars</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-helvetica-now text-[#f4eada]">
            <article className="space-y-2">
              <h3 className="text-lg text-[#f4eada] font-semibold">Wisdom</h3>
              <p>Experience distilled into judgment. We prioritise signal over noise and the long term over the immediate.</p>
            </article>
            <article className="space-y-2">
              <h3 className="text-lg text-[#f4eada] font-semibold">Grounded</h3>
              <p>Calm, practical, reality-first. We work with what is, then shape what can be.</p>
            </article>
            <article className="space-y-2">
              <h3 className="text-lg text-[#f4eada] font-semibold">Simple</h3>
              <p>Clarity is a discipline. We focus on the essence and remove what doesn't serve.</p>
            </article>
            <article className="space-y-2">
              <h3 className="text-lg text-[#f4eada] font-semibold">Spirituality</h3>
              <p>Meaning and care in action. Compassion and responsibility inform decisions.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3 — In Practice */}
      <section className="h-screen flex items-center justify-center px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">In Practice</h2>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 font-helvetica-now text-[#f4eada]">
            <li className="leading-relaxed">Clarity first — define purpose, constraints, and desired outcomes before we act.</li>
            <li className="leading-relaxed">Balance — hold risk/return and time/impact in healthy tension.</li>
            <li className="leading-relaxed">Simplicity as rigour — fewer moving parts, tighter governance, better decisions.</li>
            <li className="leading-relaxed">Exploration & Creativity — research, first principles, new lenses.</li>
            <li className="leading-relaxed">Community & Belonging — trusted circles, shared knowledge, aligned action.</li>
            <li className="leading-relaxed">Materiality · Sensitivity · Play — respect for the tangible and the felt; keep minds open.</li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default Mission;