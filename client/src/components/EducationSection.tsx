import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      title: "Bachelor of Informatics Engineering (AI)",
      institution: "Private University of Sham (ASPU)",
      year: "2022 – 2026",
      description: "Major in Informatics Engineering with a focus on Artificial Intelligence.",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
          Education
        </h2>

        <div>
          <h3 className="text-2xl font-poppins font-semibold text-foreground mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="card-hover">
                <h4 className="text-lg font-poppins font-semibold text-foreground mb-2">
                  {edu.title}
                </h4>
                <p className="text-primary font-inter font-medium mb-2">{edu.institution}</p>
                <p className="text-muted-foreground text-sm font-inter mb-3">{edu.year}</p>
                <p className="text-muted-foreground font-inter">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
