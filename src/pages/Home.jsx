import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import profile from "../assets/profile.png"

export default function Home() {

  return (

    <section className="min-h-screen flex items-center pt-28 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-blue-400 text-lg font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Revanth Kumar
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
            Computer Science student passionate about building scalable
            systems using <span className="text-blue-400">Java</span>,
            <span className="text-blue-400"> Data Structures</span>,
            and <span className="text-blue-400">Cloud technologies</span>.
          </p>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:border-blue-400 transition"
            >
              View Resume
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Revanth Kumar"
            className="w-[320px] md:w-[360px] rounded-xl shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  )
}