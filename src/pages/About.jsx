export default function About() {
  const tech_skills = [
    "Python",
    "Pandas",
    "NumPy", 
    "scikit-learn", 
    "Matplotlib",
    "C/C++",
    "SQL",
    "React",
    "JavaScript",
    "HTML/CSS",
    "Git/GitHub"
  ];

  const lang_skills = [
    {
      language: "English",
      level: "C1",
      details: [
        "IELTS overall band 8.0 (September 2026)",
        "TOEIC Listening and Reading 935/990 (February 2025)",
      ],
    },
    {
      language: "Korean",
      level: "TOPIK II Level 6",
      details: [
        "246/300 points (April 2025)",
      ],
    },
    {
      language: "Burmese",
      level: "Native",
      details: [
        "Mother tongue",
      ],
    },
  ];

  const interests = [
    {
      title: "Data Analysis",
      note: "I enjoy working with data and understanding patterns through careful analysis.",
    },
    {
      title: "UI / UX",
      note: "I’m interested in designing interfaces that feel simple, clear, and comfortable to use.",
    },
    {
      title: "AI",
      note: "I’m curious about how models learn and how AI can be applied thoughtfully.",
    },
    {
      title: "Web & App Development",
      note: "I like building web and app projects and learning how ideas turn into real products.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
      <section className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm">
        <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs">
            🩵 About Me
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Hey!
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            I’m <span className="font-medium text-gray-900">SU LEI LEI NAING</span>, a senior-year Computer Science
            student at Kyung Hee University. I enjoy learning by building—turning small ideas into
            clean, thoughtful projects. I’m detail-oriented and enjoy making things feel calm,
            consistent, and thoughtfully designed.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>

      <section className="grid md:grid-cols-12 gap-4 sm:gap-6">
        <div className="md:col-span-5 space-y-4 sm:space-y-6">
          <div className="bg-white border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
            <div className="w-36 sm:w-44 md:w-56 lg:w-full mx-auto
                rounded-[24px] bg-blue-50 border border-blue-100 p-3">
              <img
                src={process.env.PUBLIC_URL + "/profile.png"}
                alt="SU LEI LEI NAING"
                className="w-full aspect-square rounded-[18px] object-cover"
              />
            </div>
            <div className="mt-5 text-center md:text-left">
              <p className="text-sm text-gray-500">SU LEI LEI NAING</p>
              <p className="text-lg font-semibold text-gray-900">
                CSE @ Kyung Hee University
              </p>
            </div>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              {["Computer Science", "Data Analysis", "Detail lover", "INFP"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
            <p className="text-sm text-gray-500">A small note</p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              I’m happiest when a project feels <span className="font-medium">simple</span>,{" "}
              <span className="font-medium">organized</span>, and{" "}
              <span className="font-medium">gently polished</span> — like everything is in its right place 🩵
            </p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-4 sm:space-y-6">
          <div className="bg-white border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Technical Skills</h2>
              <span className="text-xs text-gray-400 text-right">
                What I use / learned
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tech_skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-2xl text-sm bg-gray-50 border text-gray-700
                             hover:bg-blue-50 hover:border-blue-200 transition"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

            <p className="mt-5 text-sm text-gray-600 leading-relaxed">
              I enjoy learning through practice and gradually understanding how things work.
              I try to improve a little with every project 🩵
            </p>

          </div>
           <div className="bg-white border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Language Skills</h2>

            <div className="mt-5 space-y-3 sm:space-y-4">
              {lang_skills.map((language) => (
                <div
                  key={language.language}
                  className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="font-medium text-gray-900">{language.language}</p>
                    <span className="self-start sm:self-auto text-xs px-2 py-1 rounded-full bg-white border border-blue-100 text-gray-500">
                      {language.level}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1 text-sm text-gray-600">
                    {language.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Interests</h2>
            <p className="text-sm text-gray-500 mt-1">What I’m curious about</p>

            <div className="mt-5 space-y-3 sm:space-y-4">
              {interests.map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="font-medium text-gray-900">{it.title}</p>
                    <span className="self-start sm:self-auto text-xs px-2 py-1 rounded-full bg-white border border-blue-100 text-gray-500">
                      gentle focus
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{it.note}</p>
                </div>

              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/70 border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
        <p className="text-sm text-blue-900/70">
          ✧ I am still a learner with strong interest and commitment to my studies.
        </p>
      </section>
    </div>
  );
}
