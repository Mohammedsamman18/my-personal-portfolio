import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert("Failed to send. Please try again.");
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=mohammedsalehsamman@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/mohammedsamman_/",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/Mohammedsamman18/",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-foreground font-inter font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground font-inter focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-inter font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground font-inter focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-foreground font-inter font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground font-inter focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="w-full cta-button">
                {submitted ? "Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 mb-8">
              <div className="card-hover">
                <p className="text-foreground font-inter font-medium mb-2">
                  Email
                </p>
                <a
                  href="mailto:mohammedsalehsamman@gmail.com"
                  className="text-primary hover:underline font-inter"
                >
                  mohammedsalehsamman@gmail.com
                </a>
              </div>

              <div className="card-hover">
                <p className="text-foreground font-inter font-medium mb-2">
                  Availability
                </p>
                <p className="text-muted-foreground font-inter">
                  Available for freelance or full‑time opportunities
                </p>
              </div>

              <div className="card-hover">
                <p className="text-foreground font-inter font-medium mb-2">
                  Location
                </p>
                <p className="text-muted-foreground font-inter">
                  Damascus, Syria
                </p>
              </div>

              <div className="card-hover">
                <p className="text-foreground font-inter font-medium mb-2">
                  Response time
                </p>
                <p className="text-muted-foreground font-inter">
                  I will respond within 24 hours
                </p>
              </div>
            </div>

            <div>
              <p className="text-foreground font-poppins font-semibold mb-4">
                Follow me on social media
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
