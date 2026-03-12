export default function About() {

  return (

    <section id="about" className="py-28 bg-slate-900">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm <span className="text-blue-400 font-medium">Revanth Kumar</span>,
            a Computer Science student at KL University passionate about
            building scalable software systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            My primary focus is backend development using
            <span className="text-blue-400"> Java</span> along with
            strong foundations in
            <span className="text-blue-400"> Data Structures and Algorithms</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy designing systems, solving complex problems,
            and building projects that have real-world impact.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">

          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Info
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>
              🎓 B.Tech – Computer Science (KL University)
            </li>

            <li>
              💻 Focus: Java Backend Development
            </li>

            <li>
              📚 Learning: Data Structures & Algorithms
            </li>

            <li>
              ☁️ Interested in Cloud & System Design
            </li>

          </ul>

        </div>

      </div>

    </section>

  )
}