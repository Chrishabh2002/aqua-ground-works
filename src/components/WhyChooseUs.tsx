import { Shield, Clock, Award, Users, Wrench, ThumbsUp, Zap, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance coverage for your peace of mind.",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/5"
    },
    {
      icon: Clock,
      title: "25+ Years Experience",
      description: "Quarter-century of expertise in tubewell and piling construction across diverse projects.",
      color: "text-secondary",
      bgColor: "from-secondary/10 to-secondary/5"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium materials, advanced equipment, and rigorous quality control on every project.",
      color: "text-accent",
      bgColor: "from-accent/10 to-accent/5"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled technicians and engineers dedicated to delivering exceptional results.",
      color: "text-warning",
      bgColor: "from-warning/10 to-warning/5"
    },
    {
      icon: Wrench,
      title: "Modern Equipment",
      description: "State-of-the-art drilling and construction equipment for efficient, precise work.",
      color: "text-success",
      bgColor: "from-success/10 to-success/5"
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with thousands of successful project completions.",
      color: "text-earth",
      bgColor: "from-earth/10 to-earth/5"
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and maintenance services for existing installations.",
      color: "text-primary",
      bgColor: "from-primary/10 to-primary/5"
    },
    {
      icon: HeartHandshake,
      title: "Transparent Pricing",
      description: "Honest, upfront pricing with detailed quotes and no hidden costs or surprise charges.",
      color: "text-secondary",
      bgColor: "from-secondary/10 to-secondary/5"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full gradient-sky opacity-50"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <ThumbsUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            Your Trusted Construction Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of clients across Uttar Pradesh choose Shiva Tubewell Works 
            for their construction needs. Excellence is not just our goal—it's our standard.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="card-feature group scroll-reveal" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${reason.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-soft`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-fredoka font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="scroll-reveal">
          <div className="bg-card/50 backdrop-blur-sm border border-card-border rounded-3xl p-8 lg:p-12 shadow-medium">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-fredoka font-bold text-foreground mb-4">
                Numbers That Speak for Themselves
              </h3>
              <p className="text-muted-foreground">
                Our track record demonstrates our commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Projects Completed", icon: Award, color: "text-primary" },
                { number: "25+", label: "Years of Excellence", icon: Clock, color: "text-secondary" },
                { number: "98%", label: "Customer Satisfaction", icon: ThumbsUp, color: "text-accent" },
                { number: "24/7", label: "Support Available", icon: Zap, color: "text-success" }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-muted/30 to-card rounded-xl flex items-center justify-center group-hover:shadow-medium transition-all duration-300">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl lg:text-4xl font-fredoka font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="inline-flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm border border-card-border rounded-3xl shadow-medium">
            <div className="text-6xl animate-bounce-slow">🏆</div>
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-2xl lg:text-3xl font-fredoka font-bold text-foreground mb-2">
                Ready to Experience the Difference?
              </h3>
              <p className="text-muted-foreground text-lg">
                Join thousands of satisfied customers who trust us with their construction needs.
                Get your free consultation today!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary-hero !text-foreground !border-card-border hover:!bg-muted"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;