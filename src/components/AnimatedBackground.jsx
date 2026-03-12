export default function AnimatedBackground() {

  return (

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-10 rounded-full blur-3xl top-[-100px] left-[-100px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

    </div>

  )

}