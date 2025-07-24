import { Droplets, Building, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Tubewell Installation",
      description: "Professional tubewell drilling and installation services for residential, agricultural, and commercial water supply needs.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Deep bore drilling up to 900 feet",
        "Water quality testing & analysis",
        "Pump installation & maintenance",
        "Pipe fitting & connections",
        "24/7 emergency support"
      ],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      id: 2,
      title: "Piling Construction", 
      description: "Strong foundation solutions with various piling techniques for buildings, bridges, and infrastructure projects.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Driven pile installation",
        "Bored pile construction", 
        "Foundation design consultation",
        "Load testing services",
        "Structural integrity assurance"
      ],
      gradient: "from-primary to-warning"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 gradient-sky relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive construction services specializing in tubewell 
            development and piling solutions for residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={service.id} className="card-service group scroll-reveal">
              {/* Service Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/30 rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-4 right-8 w-6 h-6 bg-secondary/30 rounded-full animate-bounce-slow"></div>
              </div>

              {/* Service Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-fredoka font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group/feature">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200" />
                      <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="btn-service group/btn">
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="inline-flex items-center gap-4 p-6 bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl shadow-medium">
            <div className="text-2xl">🚀</div>
            <div>
              <h3 className="text-xl font-fredoka font-semibold text-foreground mb-1">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground">
                Contact our expert team for a free consultation and detailed quote.
              </p>
            </div>
            <button className="btn-hero">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;