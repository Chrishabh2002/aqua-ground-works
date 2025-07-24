import { Target, Eye, Award, Users, Wrench, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [counters, setCounters] = useState({
    tubewells: 0,
    piling: 0,
    clients: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          const animateCounter = (key: keyof typeof counters, target: number) => {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 20);
          };

          animateCounter('tubewells', 500);
          animateCounter('piling', 20);
          animateCounter('clients', 1000);
          animateCounter('experience', 25);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Deliver reliable, efficient, and cost-effective solutions that exceed client expectations with innovative construction techniques."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most trusted name in construction services across the region, setting industry standards for quality and reliability."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality checks and follows international safety standards for optimal results."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring decades of combined experience in tubewell and piling construction projects."
    }
  ];

  const stats = [
    { key: 'tubewells', label: 'Tubewells Installed', icon: Wrench, color: 'text-primary' },
    { key: 'piling', label: 'Piling Projects', icon: Shield, color: 'text-secondary' },
    { key: 'clients', label: 'Happy Clients', icon: Users, color: 'text-accent' },
    { key: 'experience', label: 'Years Experience', icon: Award, color: 'text-warning' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-6xl font-fredoka font-bold text-gradient mb-6">
            About Shiva Tubewell Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 25 years of experience in the construction field, we have established 
            ourselves as the leading provider of tubewell and piling solutions across Uttar Pradesh.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-8 scroll-reveal">
            <div>
              <h3 className="text-3xl lg:text-4xl font-fredoka font-bold text-foreground mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, Shiva Tubewell Works began as a small family business 
                  with a passion for providing reliable water solutions to communities 
                  across Uttar Pradesh. Over the years, we've grown into a trusted name 
                  in the industry, serving thousands of satisfied customers.
                </p>
                <p>
                  Our commitment to quality, safety, and innovation has made us the 
                  preferred choice for both residential and commercial clients seeking 
                  professional tubewell and piling services.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="card-feature group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-fredoka font-semibold text-foreground">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="scroll-reveal">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.key} className="card-stat group">
                  <div className="mb-4">
                    <stat.icon className={`w-12 h-12 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-4xl lg:text-5xl font-fredoka font-bold ${stat.color} mb-2`}>
                    {counters[stat.key as keyof typeof counters]}
                    {stat.key === 'tubewells' || stat.key === 'clients' ? '+' : ''}
                    {stat.key === 'experience' ? '+' : ''}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-6 scroll-reveal">
          {features.slice(2).map((feature, index) => (
            <div key={index} className="card-feature group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-warning/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-fredoka font-semibold text-foreground">
                  {feature.title}
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;