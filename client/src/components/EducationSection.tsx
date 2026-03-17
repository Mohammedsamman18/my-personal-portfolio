import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      title: "Bachelor of Informatics Engineering (AI)",
      institution: "Private University of Sham (ASPU)",
      year: "2022 – 2026",
      description:
        "Major in Informatics Engineering with a focus on Artificial Intelligence.",
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="container px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-foreground mb-10 text-center">
          Education
        </h2>

        <div>
          <h3 className="text-xl sm:text-2xl font-poppins font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Academic Background
          </h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="card-hover">
                <h4 className="text-base sm:text-lg font-poppins font-semibold text-foreground mb-2">
                  {edu.title}
                </h4>
                <p className="text-primary font-inter font-medium mb-2 text-sm sm:text-base">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground text-sm font-inter mb-3">
                  {edu.year}
                </p>
                <p className="text-muted-foreground font-inter text-sm sm:text-base">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
