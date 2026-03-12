export default function SkillCard({ name, icon }) {

  return (

    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col items-center justify-center hover:border-blue-500 hover:scale-105 transition">

      <div className="text-3xl text-blue-400 mb-3">
        {icon}
      </div>

      <p className="text-gray-300">
        {name}
      </p>

    </div>

  )
}