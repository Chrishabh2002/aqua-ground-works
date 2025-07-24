import { ExternalLink, Calendar, MapPin, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Agricultural Water Supply Project",
      location: "Sultanpur, UP",
      type: "Tubewell Installation",
      depth: "750 feet",
      completion: "2024",
      clients: "50+ Farmers",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Large-scale agricultural project providing water access to 50+ farming families through deep tubewell installations.",
      features: ["Deep bore drilling", "Water quality testing", "Pump installation", "Distribution network"]
    },
    {
      id: 2,
      title: "Commercial Complex Foundation",
      location: "Prayagraj, UP",
      type: "Piling Construction",
      depth: "120 feet",
      completion: "2023",
      clients: "Metro Builders",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Strong foundation piling for a 15-story commercial complex ensuring structural integrity and safety.",
      features: ["Driven pile installation", "Load testing", "Foundation design", "Quality certification"]
    },
    {
      id: 3,
      title: "Residential Colony Water System",
      location: "Allahabad, UP",
      type: "Multiple Tubewells",
      depth: "600 feet",
      completion: "2024",
      clients: "200+ Families",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive water supply system for a residential colony with multiple tubewell installations.",
      features: ["Multiple drilling sites", "Centralized pumping", "Distribution system", "24/7 monitoring"]
    },
    {
      id: 4,
      title: "Industrial Water Supply",
      location: "Kanpur, UP",
      type: "High-Capacity Tubewell",
      depth: "900 feet",
      completion: "2023",
      clients: "Manufacturing Unit",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-capacity tubewell installation for industrial water requirements with advanced filtration systems.",
      features: ["Maximum depth drilling", "High-volume pumping", "Filtration system", "Industrial compliance"]
    },
    {
      id: 5,
      title: "Bridge Foundation Piling",
      location: "Varanasi, UP",
      type: "Infrastructure Piling",
      depth: "150 feet",
      completion: "2022",
      clients: "PWD Government",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Critical infrastructure piling work for bridge construction with government compliance and certifications.",
      features: ["Government project", "Heavy-duty piling", "Structural analysis", "Compliance certification"]
    },
    {
      id: 6,
      title: "Hospital Water Emergency",
      location: "Lucknow, UP",
      type: "Emergency Tubewell",
      depth: "450 feet",
      completion: "2024",
      clients: "City Hospital",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Emergency tubewell installation for a major hospital ensuring uninterrupted water supply for critical operations.",
      features: ["24-hour installation", "Emergency response", "Medical grade quality", "Backup systems"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-warning/10 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <ExternalLink className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful tubewell and piling projects across 
            Uttar Pradesh. Each project showcases our commitment to quality and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="card-service group scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-primary to-warning px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{project.type}</span>
                  </div>
                </div>

                {/* Completion Year */}
                <div className="absolute top-4 right-4">
                  <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-foreground text-sm font-medium">{project.completion}</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent/40 rounded-full animate-pulse-glow"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-fredoka font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{project.depth}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Users className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{project.clients}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-lg text-secondary font-medium hover:from-secondary/20 hover:to-primary/20 hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm border border-card-border rounded-3xl shadow-medium">
            <div className="text-5xl">🚀</div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-fredoka font-bold text-foreground mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground text-lg">
                Join our growing list of satisfied clients. Let's discuss your requirements.
              </p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;