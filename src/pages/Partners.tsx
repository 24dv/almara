import { PageLayout } from "@/components/PageLayout";
import partnersHero from "@/assets/partners-hero.jpg";
const Partners = () => {
  return <PageLayout title="Partners">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12 rounded-lg overflow-hidden">
          <img src={partnersHero} alt="Business partnership handshake" className="w-full h-64 object-cover opacity-80" />
        </div>
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">OUR TRUSTED PARTNERSHIPS &amp; CLIENTS</h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-8">
            We work alongside top firms across institutions, technology, and bespoke projects, fostering relationships built on trust, expertise, and shared vision.
          </p>
          
          <div className="not-prose">
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-almara-dark-text mb-6 text-center">Institutional Partners</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Quintet</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Degroof Petercam</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">UBP</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">CIGP</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Antarctica</h4>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-almara-dark-text mb-6 text-center">Technology Partners</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Delio</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Abbove</h4>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-almara-dark-text mb-6 text-center">Project Partners</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Aquitara</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Deminor</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Firgun</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Genève Technologies</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                    <h4 className="text-lg font-semibold text-almara-dark-text">Golborne</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default Partners;