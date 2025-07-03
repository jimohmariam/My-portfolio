import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_c8w4yvr",
        "template_lvgdepx",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "nMAvAfm4RDP7yj3sj"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "jimohariam929@gmail.com",
      icon: "📧",
    },
    {
      label: "Location",
      value: "Nigeria",
      icon: "📍",
    },
    {
      label: "Response Time",
      value: "Within 24 hours",
      icon: "⏰",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 card-gradient border-border/50 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Details */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question about my work, want to collaborate, or just want to say hello —
              I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/30"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <div className="font-medium">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Find me online</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://linkedin.com/in/your-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/jimohmariam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://twitter.com/your-handle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Button>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
                <span className="font-medium text-primary">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new client work and collaborations for 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
