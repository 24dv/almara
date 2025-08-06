import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout title="About">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
          About ALMARA
        </h1>
        <div className="prose prose-lg mx-auto text-almara-dark-text/80 font-helvetica-now">
          <p className="text-xl leading-relaxed mb-6">
            ALMARA represents excellence in maritime innovation, connecting opportunities across the vast blue economy.
          </p>
          <p className="leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;