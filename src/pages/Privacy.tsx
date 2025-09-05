import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <ScrollReveal direction="up" delay="0.1s">
          <h1 className="text-4xl md:text-5xl font-long-cang text-almara-subtitle-text mb-8 text-center">
            Privacy Policy
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay="0.3s">
          <div className="prose prose-lg mx-auto text-[#363636] font-helvetica-now">
          <p className="text-lg leading-relaxed mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#363636] mb-4">Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information and maritime credentials</li>
                <li>Usage data and service preferences</li>
                <li>Communication records and feedback</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#363636] mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, maintain, and improve our maritime services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Communicate about services, features, and promotional offers</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#363636] mb-4">Information Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with business transfers or acquisitions</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#363636] mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#363636] mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of certain communications</li>
                <li>Request data portability</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#363636] mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@almara.com or through our official communication channels.
              </p>
            </section>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </PageLayout>
  );
};

export default Privacy;