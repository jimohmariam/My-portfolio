import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      color: "primary",
      technologies: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      category: "Backend",
      color: "accent",
      technologies: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 70 },
        { name: "API Development", level: 68 }
      ]
    },
    {
      category: "Tools & Design",
      color: "primary",
      technologies: [
        { name: "Git & GitHub", level: 75 },
        { name: "UI Design", level: 80 },
        { name: "Responsive Design", level: 85 },
        { name: "Problem Solving", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <Card 
              key={skillGroup.category} 
              className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-smooth animate-fade-in"
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  skillGroup.color === "primary" ? "text-primary" : "text-accent"
                }`}>
                  {skillGroup.category}
                </h3>
                <div className={`w-12 h-1 rounded-full mx-auto ${
                  skillGroup.color === "primary" ? "bg-primary" : "bg-accent"
                }`} />
              </div>

              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-xs text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          skillGroup.color === "primary" 
                            ? "bg-gradient-to-r from-primary to-primary-glow" 
                            : "bg-gradient-to-r from-accent to-accent-glow"
                        }`}
                        style={{ 
                          width: `${tech.level}%`,
                          animationDelay: `${(groupIndex * 0.2) + (techIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Core <span className="text-accent">Competencies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Version Control",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Testing & Debugging",
              "Performance Optimization"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="p-4 rounded-lg bg-card/50 border border-border/30 text-center hover:border-primary/30 transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;