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
  return <PageLayout title="Mission">
      {/* Hero — Mission */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h1 className="font-long-cang sm:text-[36px] md:text-[40px] lg:text-[44px] text-almara-subtitle-text tracking-[0.05em] opacity-90 leading-tight font-thin text-5xl">
            MISSION
          </h1>
          <div className="font-helvetica-now space-y-6 text-almara-light-text">
            <p className="leading-relaxed max-w-2xl mx-auto">
              We bring intention, vision and clarity to foster balanced growth—with kindness and compassion.
            </p>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Almara pairs wisdom with execution: grounded judgment, simple structures, and a quiet, steady core that guides how we steward capital, culture, and relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-almara-dark-text/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-almara-dark-text">Values / Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-helvetica-now">
            <article className="rounded-lg border border-almara-light-text/20 bg-almara-light-text/10 backdrop-blur-sm p-6">
              <h3 className="text-lg text-almara-dark-text mb-2">Wisdom</h3>
              <p className="text-almara-light-text/90 leading-relaxed">
                Experience distilled into judgment. We prioritise signal over noise and the long term over the immediate.
              </p>
            </article>

            <article className="rounded-lg border border-almara-light-text/20 bg-almara-light-text/10 backdrop-blur-sm p-6">
              <h3 className="text-lg text-almara-dark-text mb-2">Grounded</h3>
              <p className="text-almara-light-text/90 leading-relaxed">
                Calm, practical, reality-first. We work with what is, then shape what can be.
              </p>
            </article>

            <article className="rounded-lg border border-almara-light-text/20 bg-almara-light-text/10 backdrop-blur-sm p-6">
              <h3 className="text-lg text-almara-dark-text mb-2">Simple</h3>
              <p className="text-almara-light-text/90 leading-relaxed">
                Clarity is a discipline. We focus on the essence and remove what doesn’t serve.
              </p>
            </article>

            <article className="rounded-lg border border-almara-light-text/20 bg-almara-light-text/10 backdrop-blur-sm p-6">
              <h3 className="text-lg text-almara-dark-text mb-2">Spirituality</h3>
              <p className="text-almara-light-text/90 leading-relaxed">
                Meaning and care in action. Compassion and responsibility inform decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* In Practice */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-museo-moderno text-[28px] lg:text-[32px] text-almara-dark-text">In Practice</h2>
          </div>

          <ul className="grid gap-4 md:grid-cols-2 font-helvetica-now text-almara-light-text">
            <li className="leading-relaxed">Clarity first — define purpose, constraints, and desired outcomes before we act.</li>
            <li className="leading-relaxed">Balance — hold risk/return and time/impact in healthy tension.</li>
            <li className="leading-relaxed">Simplicity as rigour — fewer moving parts, tighter governance, better decisions.</li>
            <li className="leading-relaxed">Exploration & Creativity — research, first principles, new lenses.</li>
            <li className="leading-relaxed">Community & Belonging — trusted circles, shared knowledge, aligned action.</li>
            <li className="leading-relaxed">Materiality · Sensitivity · Play — respect for the tangible and the felt; keep minds open.</li>
          </ul>
        </div>
      </section>
    </PageLayout>;
};
export default Mission;