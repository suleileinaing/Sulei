const items = [
   {
    school: "Kyung Hee University",
    degree: "B.S. in Computer Science",
    period: "2023 – Present",
    details:
      ["Data Structures & Algorithms", "Database (SQL)", "OOP", "Computer Architecture", "Computer Networks", "Python", "C/C++", "AI Programming", "Machine Learning"]
  },
  {
    school: "University of Medicine 1, Yangon, Myanmar",
    degree: "Finished 2nd MBBS",
    period: "2017 - 2020",
    details: ["Drop out because of coup d'état"],
  },
  {
  school: "No. 2 Basic Education High School, Sanchaung, Yangon, Myanmar",
  degree: "Primary to High School Education",
  period: "2006 – 2017",
  details: [
    "Distinctions in all subjects",
    "Excellence awards in local Mathematics competitions and internalional Mathematics Olympiad",
  ],
}
];

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <section className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm">
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs">
            🎓 Education
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Education Background
          </h1>

          <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
            A short overview of my academic background and the subjects I’ve studied.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>


      <section className="space-y-4">
        {items.map((e) => (
          <div
            key={e.school}
            className="bg-white border border-blue-100 rounded-[28px] p-6 md:p-7 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{e.school}</h2>
                <p className="mt-1 text-gray-600">{e.degree}</p>
              </div>

              <span className="text-sm text-gray-500 md:text-right">
                {e.period}
              </span>
            </div>
            

            {/* Soft divider */}
            <div className="mt-5 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

            {/* Details */}
            <div className="mt-5 flex flex-wrap gap-2">
              {e.details.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1.5 rounded-2xl text-sm bg-blue-50/60 text-blue-800/80
                             border border-blue-100"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
