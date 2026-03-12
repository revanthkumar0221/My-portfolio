import { Link } from "react-router-dom"

export default function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">

      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* LOGO */}

        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
        <span className="text-blue-400">Revanth.dev</span>
        </Link>

        {/* NAV LINKS */}

        <div className="flex items-center gap-6 text-gray-300 text-sm font-medium">

          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/skills" className="hover:text-blue-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/certifications" className="hover:text-blue-400 transition">Certifications</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>

        </div>

      </div>

    </nav>

  )

}