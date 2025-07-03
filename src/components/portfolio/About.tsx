import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      title: "Frontend Development",
      institution: "New Horizon",
      year: "2024",
      status: "Graduated",
      description: "Mastered HTML, CSS, JavaScript, and React fundamentals"
    },
    {
      title: "Backend Development", 
      institution: "New Horizon",
      year: "2025",
      status: "Currently Enrolled",
      description: "Learning Node.js, Express, MongoDB, and API development"
    },
    {
      title: "B.Sc. Mass Communication",
      institution: "Westland University",
      year: "2024–Present",
      status: "In Progress",
      description: "Combining tech skills with communication expertise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about creating digital experiences that matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I am a <span className="text-primary font-semibold">junior full-stack MERN stack developer</span> passionate 
                about creating responsive, efficient, and visually engaging websites.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With a foundation in both frontend and backend development and a current academic path in 
                <span className="text-accent font-medium"> Mass Communication</span>, I bring a unique blend of 
                technical skill and communication expertise to every project.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that are both 
                beautiful and functional. My goal is to bridge the gap between design and technology, 
                creating solutions that truly serve users' needs.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">Problem Solver</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">Team Player</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">Fast Learner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
              Education Journey
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index} className="p-6 card-gradient border-border/50 hover:border-primary/30 transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === "Graduated" 
                        ? "bg-accent/20 text-accent" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-2">{item.year}</p>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;