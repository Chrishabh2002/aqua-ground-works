import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How deep can you drill for tubewells?",
      answer: "We can drill tubewells up to 900 feet deep using our advanced drilling equipment. The depth depends on the water table in your area and your specific water requirements. Our team conducts a thorough site survey to determine the optimal depth for maximum water yield."
    },
    {
      question: "What types of piling services do you offer?",
      answer: "We specialize in both driven pile and bored pile construction. Our services include concrete piles, steel piles, and composite piles for various foundation requirements. We also provide load testing, pile integrity testing, and foundation design consultation services."
    },
    {
      question: "How long does a typical tubewell installation take?",
      answer: "A standard residential tubewell installation typically takes 2-4 days, depending on the depth and soil conditions. Commercial projects may take 5-7 days. We provide a detailed timeline during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide water quality testing?",
      answer: "Yes, we include comprehensive water quality testing with every tubewell installation. Our tests cover pH levels, mineral content, bacterial contamination, and other important parameters. We also provide recommendations for water treatment if needed."
    },
    {
      question: "What is the warranty on your work?",
      answer: "We provide a 5-year warranty on tubewell installations and a 10-year warranty on piling construction work. This covers workmanship, equipment installation, and structural integrity. We also offer annual maintenance packages to ensure optimal performance."
    },
    {
      question: "Do you offer emergency repair services?",
      answer: "Yes, we provide 24/7 emergency repair services for existing tubewells and pumping systems. Our emergency response team can typically reach your location within 2-4 hours for critical issues. We maintain a stock of common spare parts for immediate repairs."
    },
    {
      question: "What permits are required for drilling?",
      answer: "We handle all necessary permits and regulatory compliance for tubewell drilling and piling construction. This includes groundwater extraction permits, environmental clearances, and structural approvals. Our team is familiar with local regulations and ensures full compliance."
    },
    {
      question: "Can you work on existing tubewells?",
      answer: "Absolutely! We offer rehabilitation services for existing tubewells including cleaning, deepening, pump replacement, and system upgrades. We can also troubleshoot performance issues and restore water flow to optimal levels."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 gradient-sky relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-bounce-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Here are the most common questions 
            our clients ask about our tubewell and piling services.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-feature overflow-hidden scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left group focus:outline-none"
                >
                  <h3 className="text-lg lg:text-xl font-fredoka font-semibold text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-card-border to-transparent mb-4"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center scroll-reveal">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl shadow-medium">
              <div className="text-4xl">🤔</div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-fredoka font-semibold text-foreground mb-1">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground">
                  Our experts are here to help with personalized answers.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-service"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;