import { PageLayout } from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <section className="min-h-screen flex items-center justify-center px-12 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="font-museo-moderno text-[32px] lg:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight text-center mb-12">
            Privacy Policy
          </h1>
          
          {/* Content */}
          <div className="space-y-6 text-[#363636] font-helvetica-now leading-relaxed text-base">
            <div className="space-y-4">
              <h2 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56]">Information We Collect</h2>
              <p>
                When you contact Almara Capital through our website or request a consultation, we may collect personal information including your name, contact details, financial circumstances, and investment objectives. This information is collected solely to provide you with our advisory services and to comply with regulatory requirements.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56]">How We Use Your Information</h2>
              <p>
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide family office services, alternative investment advisory, and wealth structuring guidance</li>
                <li>Conduct due diligence and risk assessments for investment opportunities</li>
                <li>Communicate with you regarding our services and market insights</li>
                <li>Comply with legal and regulatory obligations in the financial services industry</li>
                <li>Maintain accurate records as required by financial regulations</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56]">Information Sharing and Disclosure</h2>
              <p>
                Almara Capital maintains strict confidentiality regarding client information. We may share your information only with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional service providers (legal, tax, audit) working on your behalf</li>
                <li>Financial institutions and investment managers as necessary for service delivery</li>
                <li>Regulatory authorities when required by law</li>
                <li>Third-party specialists with your explicit consent</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56]">Your Rights</h2>
              <p>
                You have the right to access, correct, or request deletion of your personal information, subject to our regulatory obligations. You may also object to certain processing activities or request data portability where applicable under data protection laws.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-helvetica-now text-xl tracking-wider font-bold text-[#364b56]">Contact Information</h2>
              <p>
                For questions regarding this privacy policy or to exercise your rights concerning your personal data, please contact Almara Capital directly through the consultation request process outlined on our website.
              </p>
            </div>
            
            <p className="text-sm opacity-75">
              This privacy policy may be updated periodically to reflect changes in our practices or applicable regulations. The effective date of any changes will be clearly indicated.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;