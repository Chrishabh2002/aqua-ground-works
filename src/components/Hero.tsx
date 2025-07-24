import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/0baf58e2-c5be-49c1-a77e-b18907d38b64.png')`
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-warning/20 rounded-full blur-xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-8 scroll-reveal">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-fredoka font-bold leading-tight">
                Professional{" "}
                <span className="text-accent animate-pulse-glow">Tubewell</span>{" "}
                & <span className="text-warning animate-pulse-glow">Piling</span>{" "}
                Solutions
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Shiva Tubewell Works specializes in comprehensive tubewell 
                development and piling construction services. With state-of-the-art 
                equipment and expert craftsmanship, we deliver reliable water 
                solutions and strong foundations for your projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero group">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="btn-secondary-hero group">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-fredoka font-bold text-accent">
                  500+
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  Tubewells Installed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-fredoka font-bold text-warning">
                  25+
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-fredoka font-bold text-secondary-glow">
                  1000+
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Drilling Truck Animation */}
              <div className="absolute inset-0 animate-float">
                <img
                  src="/lovable-uploads/0baf58e2-c5be-49c1-a77e-b18907d38b64.png"
                  alt="Drilling Truck"
                  className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110"
                />
              </div>
              
              {/* Animated Elements Around Truck */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/30 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-secondary/30 rounded-full animate-bounce-slow"></div>
              <div className="absolute top-1/2 -right-20 w-12 h-12 bg-warning/30 rounded-full animate-float"></div>
              
              {/* Drilling Animation */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-earth to-transparent animate-drill-work"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;