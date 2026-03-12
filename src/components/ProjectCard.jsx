export default function ProjectCard({ title, desc, tech, github, demo, image }) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-400 transition duration-300">

      {/* Project Image */}

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">

        <h3 className="text-xl font-semibold text-blue-400 mb-3">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {desc}
        </p>

        <p className="text-xs text-gray-500 mb-4">
          {tech}
        </p>

        {/* Links */}

        <div className="flex gap-4 text-sm">

          {github && (
            <a
              href={github}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>

  )
}