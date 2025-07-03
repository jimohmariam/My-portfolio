import { Button } from "@/components/ui/button";
import mariamPhoto from "@/assets/mariam-photo.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-glow-pulse">
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hey, This is{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Jimoh Mariam
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A passionate <span className="text-primary font-semibold">junior full-stack MERN developer</span> building 
              clean, user-friendly websites with modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToPortfolio}
                className="animate-scale-in"
              >
                View My Work
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={scrollToContact}
                className="animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              >
                Let's Talk
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">MERN</div>
                <div className="text-sm text-muted-foreground">Stack Expert</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl scale-110" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img 
                  src={mariamPhoto} 
                  alt="Jimoh Mariam Temileyi"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold animate-float">
                React Expert
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: "1.5s" }}>
                MERN Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;