export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-card/30">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div
              className="rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663274859105/fPorkgXGZqGmVjukeueJKS/about-accent-exem3EMxCoVEiafXhDs5To.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "280px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground font-inter text-sm sm:text-base">
              <p>
                I&#39;m a full-stack developer with a strong foundation in
                informatics engineering and a specialization in artificial
                intelligence from the Private University of Sham (ASPU). I build
                modern, scalable web applications from front-end to back-end.
              </p>
              <p>
                I believe in writing clean, maintainable code and strive to
                exceed expectations by blending creativity with technology to
                solve real-world problems.
              </p>
              <p>
                Outside of coding, you&#39;ll find me exploring new
                technologies, contributing to open-source projects and staying
                inspired by AI research.
              </p>
            </div>
            <div className="mt-8">
              <a href="#contact" className="cta-button inline-block">
                Let&#39;s collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
