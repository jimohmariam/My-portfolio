const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              MT<span className="text-accent">.</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              A passionate junior full-stack MERN developer creating modern, 
              user-friendly web solutions.
            </p>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Open to collaborations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-3 mb-4">
              <div className="text-sm">
                <div className="text-muted-foreground">Email</div>
                <div>jimohmariam929@gmail.com</div>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground">Location</div>
                <div>Nigeria</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-smooth">
                <span className="text-sm">📧</span>
              </button>
              <button className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-smooth">
                <span className="text-sm">💼</span>
              </button>
              <button className="p-2 rounded-lg bg-card hover:bg-primary/10 transition-smooth">
                <span className="text-sm">🐙</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Jimoh Mariam Temileyi. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Built with ❤️ using React & TypeScript
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;