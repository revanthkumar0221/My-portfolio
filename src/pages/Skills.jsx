import SkillCard from "../components/SkillCard"

import { FaJava, FaReact, FaAws, FaGitAlt, FaPython } from "react-icons/fa"
import { SiJavascript, SiHtml5 } from "react-icons/si"

export default function Skills() {

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "AWS", icon: <FaAws /> }
  ]

  return (
    <section className="min-h-screen pt-28 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
            />
          ))}

        </div>

      </div>

    </section>
  )
}