export default function Certifications() {

  const certifications = [
    {
      title: "AWS Cloud Certification",
      issuer: "Amazon Web Services",
      year: "2025"
    },
    {
      title: "MongoDB Certification",
      issuer: "MongoDB",
      year: "2025"
    },
    {
      title: "Python Programming Certification",
      issuer: "Online Platform",
      year: "2024"
    }
  ]

  return (

    <section className="min-h-screen pt-28 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-12">
          Certifications
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-400 transition"
            >

              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {cert.issuer}
              </p>

              <p className="text-gray-500 text-xs mt-2">
                {cert.year}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}