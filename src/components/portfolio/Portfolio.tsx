import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Organic Product eCommerce Website",
      description:
        "A responsive platform where users can purchase organic products. Features include product catalog, shopping cart, user authentication, and payment integration.",
         image: "https://i.postimg.cc/5y9X2Fvc/Screenshot-2025-07-03-at-10-43-32.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      status: "Completed",
      highlights: [
        "Responsive design across all devices",
        "Secure payment integration",
        "User authentication system",
        "Product search and filtering",
      ],
      githubUrl: "#",
      detailsUrl: "#",
    },
    {
      title: "Konga-like eCommerce Platform",
      description:
        "A comprehensive multi-category shopping site inspired by Konga. Includes advanced cart functionality, search capabilities, and detailed product listings.",
      image: "".
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      status: "In Progress",
      highlights: [
        "Multi-category product management",
        "Advanced search and filters",
        "Shopping cart with checkout",
        "Admin dashboard",
      ],
      githubUrl: "#",
      detailsUrl: "#",
    },
    {
      title: "Resume Builder Website",
      description:
        "A modern, dark-themed portfolio website showcasing web development skills and projects. Built with React and featuring smooth animations.",
      image: "https://i.postimg.cc/TwnLQkjj/Screenshot-2025-05-02-at-12-56-46.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      highlights: [
        "Dark theme design",
        "Smooth animations",
        "Responsive layout",
        "Contact form integration",
      ],
      githubUrl: "#",
      detailsUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-gradient border-border/50 hover:border-primary/30 transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                {/* Status */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-medium text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights?.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.detailsUrl} target="_blank" rel="noopener noreferrer">
                      View Details
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30">
            <h3 className="text-xl font-semibold mb-4">Interested in seeing more?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm constantly working on new projects and learning new technologies.
              Check out my GitHub for the latest updates.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/jimohmariam" target="_blank" rel="noopener noreferrer">
                  Visit GitHub
                </a>
              </Button>
              <Button variant="ghost" asChild>
                   <a
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  download="Jimoh-Mariam-Resume.pdf"
>
  Download Resume
</a>

                </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
