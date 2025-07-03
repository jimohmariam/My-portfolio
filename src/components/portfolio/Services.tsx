import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom website designs tailored for functionality and aesthetics. I create responsive, modern websites that work seamlessly across all devices.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Cross-browser Compatibility",
        "Performance Optimization"
      ],
      icon: "🎨"
    },
    {
      title: "Frontend Development", 
      description: "Building interactive user interfaces with React and modern JavaScript. Focus on clean code, reusable components, and excellent user experience.",
      features: [
        "React Applications",
        "Component Architecture",
        "State Management",
        "API Integration"
      ],
      icon: "⚛️"
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js and Express. Database design, API development, and server management.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Server Deployment"
      ],
      icon: "🔧"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 card-gradient border-border/50 hover:border-primary/30 transition-smooth hover:shadow-elegant group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-smooth">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:border-primary/50"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-border/30">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's discuss how I can help bring your web development ideas to life with modern technologies and best practices.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;