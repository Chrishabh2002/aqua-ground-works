import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We'll contact you soon.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9129896320", "+91 9415351450"],
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["shivatubwell9415@gmail.com"],
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Prayagraj, Uttar Pradesh, India"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      color: "text-warning"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our expert team for a free 
            consultation and detailed quote tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <h3 className="text-2xl lg:text-3xl font-fredoka font-bold text-foreground mb-8">
                Get In Touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're here to help with all your tubewell and piling construction needs. 
                Our experienced team is ready to discuss your project requirements and 
                provide expert guidance.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-contact group scroll-reveal">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-card to-muted rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-fredoka font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground mb-1 hover:text-foreground transition-colors duration-200">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Highlights */}
            <div className="scroll-reveal">
              <div className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border border-card-border">
                <h4 className="text-xl font-fredoka font-semibold text-foreground mb-4">
                  🌟 Why Choose Us?
                </h4>
                <div className="space-y-2">
                  {[
                    "25+ years of industry experience",
                    "State-of-the-art drilling equipment",
                    "Licensed & insured professionals",
                    "24/7 emergency support available"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <div className="bg-card/50 backdrop-blur-sm border border-card-border rounded-3xl p-8 shadow-medium">
              <h3 className="text-2xl lg:text-3xl font-fredoka font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>
                    We typically respond within 2-4 hours during business hours.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


console.log("Contact form submitted:")