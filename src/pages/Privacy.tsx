import { PageLayout } from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Privacy = () => {
  // Scroll reveal animations
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1, 100);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1, 200);

  return (
    <PageLayout title="Privacy Policy">
      <section className="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Title */}
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-museo-moderno text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] text-[#f4eada] tracking-[0.05em] opacity-90 leading-tight text-center mb-6 sm:mb-8 lg:mb-12">
              Privacy Policy
            </h1>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className={`space-y-3 sm:space-y-4 lg:space-y-6 text-[#363636] font-helvetica-now leading-relaxed text-[13px] xs:text-[14px] sm:text-[15px] lg:text-base transition-all duration-1000 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h2 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#364b56]">information we collect</h2>
              <p>
                When you contact Almara Capital through our website or request a consultation, we may collect personal information including your name, contact details, financial circumstances, and investment objectives. This information is collected solely to provide you with our advisory services and to comply with regulatory requirements.
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h2 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#364b56]">how we use your information</h2>
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
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h2 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#364b56]">information sharing and disclosure</h2>
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
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h2 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#364b56]">your rights</h2>
              <p>
                You have the right to access, correct, or request deletion of your personal information, subject to our regulatory obligations. You may also object to certain processing activities or request data portability where applicable under data protection laws.
              </p>
            </div>
            
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h2 className="font-helvetica-now text-[16px] xs:text-[17px] sm:text-[18px] lg:text-xl tracking-wider font-bold text-[#364b56]">contact information</h2>
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