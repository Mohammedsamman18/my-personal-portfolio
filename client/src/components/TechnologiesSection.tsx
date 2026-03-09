export default function TechnologiesSection() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "Jira", category: "Tools" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "REST API", category: "API" },
    { name: "FastAPI", category: "API" },
    { name: "Python", category: "Language" },
    { name: "Django", category: "Framework" },
  ];

  const categoryColors: Record<string, string> = {
    Frontend: "from-blue-500 to-blue-600",
    Backend: "from-purple-500 to-purple-600",
    Language: "from-yellow-500 to-yellow-600",
    Styling: "from-pink-500 to-pink-600",
    Framework: "from-green-500 to-green-600",
    Database: "from-red-500 to-red-600",
    Tools: "from-indigo-500 to-indigo-600",
    DevOps: "from-orange-500 to-orange-600",
    Cloud: "from-cyan-500 to-cyan-600",
    API: "from-teal-500 to-teal-600",
  };

  return (
    <section id="technologies" className="py-20 bg-card/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12 text-center">
          Technologies & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, idx) => {
            const gradient = categoryColors[tech.category] || "from-gray-500 to-gray-600";
            return (
              <div
                key={idx}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`}
                ></div>
                <div className="tech-badge text-center relative">
                  <div className="font-poppins font-semibold text-foreground">{tech.name}</div>
                  <div className="text-xs text-muted-foreground font-inter mt-1">{tech.category}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Overview */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Years of experience */}
          <div className="card-hover text-center">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">2+</div>
            <p className="text-foreground font-poppins font-semibold">Years of Experience</p>
            <p className="text-muted-foreground text-sm font-inter mt-2">
              2+ years in React and 1+ year in Django
            </p>
          </div>

          {/* Projects completed */}
          <div className="card-hover text-center">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">9+</div>
            <p className="text-foreground font-poppins font-semibold">Projects Completed</p>
            <p className="text-muted-foreground text-sm font-inter mt-2">
              7+ React projects and 2+ Django projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
