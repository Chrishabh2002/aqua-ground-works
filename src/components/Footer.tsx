import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, HardHat } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "Tubewell Installation", href: "#services" },
    { label: "Piling Construction", href: "#services" },
    { label: "Water Testing", href: "#services" },
    { label: "Pump Maintenance", href: "#services" }
  ];

  const contactInfo = [
    { label: "+91 9129896320", href: "tel:+919129896320" },
    { label: "+91 9415351450", href: "tel:+919415351450" },
    { label: "shivatubwell9415@gmail.com", href: "mailto:shivatubwell9415@gmail.com" },
    { label: "Prayagraj, Uttar Pradesh", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-earth text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center animate-pulse-glow">
                    <HardHat className="w-6 h-6 text-white animate-bounce-slow" />
                  </div>
                </div>
                <div className="text-2xl font-fredoka font-bold">
                  Shiva Tubewell Works
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                Your trusted partner for professional tubewell and piling construction 
                services with over 25 years of experience in delivering quality solutions.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-fredoka font-semibold relative pb-3">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-warning rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-fredoka font-semibold relative pb-3">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-fredoka font-semibold relative pb-3">
                Contact Info
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent to-warning rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {contact.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-center md:text-left">
              <p>
                &copy; {currentYear} Shiva Tubewell Works. All rights reserved. | Licensed & Insured
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;