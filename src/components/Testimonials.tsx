import { Star, Quote, Users, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Farm Owner",
      location: "Allahabad",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Shiva Tubewell Works installed a 600-foot deep tubewell on my farm. The water quality is excellent and the installation was completed in just 3 days. Highly professional team!",
      project: "Agricultural Tubewell"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Homeowner",
      location: "Prayagraj",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "We needed a reliable water source for our new home. The team provided excellent service from consultation to completion. The water flow is perfect and consistent.",
      project: "Residential Tubewell"
    },
    {
      id: 3,
      name: "Suresh Gupta",
      position: "Construction Manager",
      location: "Varanasi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "For our commercial building foundation, we needed strong piling work. Shiva Tubewell Works delivered exceptional results with proper load testing and certification.",
      project: "Commercial Piling"
    },
    {
      id: 4,
      name: "Meera Patel",
      position: "Hotel Owner",
      location: "Lucknow",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Running a hotel requires consistent water supply. Their tubewell installation has been working flawlessly for 2 years. Best investment for our business!",
      project: "Commercial Tubewell"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Client Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our tubewell and piling construction services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="card-feature group scroll-reveal" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Project Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-primary/10 px-3 py-1 rounded-full">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">{testimonial.project}</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-card-border">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-card flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-fredoka font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 scroll-reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "4.9", label: "Average Rating", icon: Award },
              { number: "24h", label: "Response Time", icon: Users },
              { number: "100%", label: "Project Completion", icon: Quote }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm rounded-xl border border-card-border hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-fredoka font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;