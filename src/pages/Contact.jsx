export default function Contact() {

  return (

    <section id="contact" className="py-28 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-12">
          Feel free to reach out for collaboration, projects,
          or internship opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}

          <a
            href="mailto:revanthofficial21@gmail.com"
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-400 transition"
          >
            <h3 className="text-blue-400 font-semibold mb-2">
              Email
            </h3>

            <p className="text-gray-400 text-sm">
              revanthofficial21@gmail.com
            </p>
          </a>


          {/* GitHub */}

          <a
            href="https://github.com/"
            target="_blank"
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-400 transition"
          >
            <h3 className="text-blue-400 font-semibold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400 text-sm">
              View Profile
            </p>
          </a>


          {/* LinkedIn */}

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-400 transition"
          >
            <h3 className="text-blue-400 font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm">
              Connect With Me
            </p>
          </a>

        </div>

      </div>

    </section>

  )
}