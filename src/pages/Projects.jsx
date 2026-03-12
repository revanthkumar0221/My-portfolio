import ProjectCard from "../components/ProjectCard"

export default function Projects() {

  const projects = [
    {
      title: "SHARPOINT",
      desc: "Student collaboration platform with real-time chat and opportunity hub.",
      tech: "HTML • CSS • JavaScript • Firebase",
      github: "#",
      demo: "#",
      image: "/projects/sharpoint.png"
    },
    {
      title: "Budget Usage Alert System",
      desc: "Cloud-based system that tracks expenses and sends alerts when limits exceed.",
      tech: "AWS • Cloud Computing",
      github: "#",
      demo: "#",
      image: "/projects/budget.png"
    },
    {
      title: "Developer Portfolio",
      desc: "Modern portfolio website built using React, TailwindCSS and animations.",
      tech: "React • TailwindCSS",
      github: "#",
      demo: "#",
      image: "/projects/portfolio.png"
    }
  ]

  return (

    <section id="projects" className="min-h-screen pt-28 pb-20 bg-slate-900">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              title={project.title}
              desc={project.desc}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />

          ))}

        </div>

      </div>

    </section>

  )
}