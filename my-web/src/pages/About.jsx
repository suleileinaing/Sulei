export default function About() {
  const skills = ["Python", "Pandas", "C/C++", "SQL", "React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Git/GitHub"];
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
    <div className="max-w-5xl mx-auto space-y-6">
      <section className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm">
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs">
            🩵 About Me
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Hey!
          </h1>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            I’m <span className="font-medium text-gray-900">SU LEI LEI NAING</span>, a Computer Science
            student at Kyung Hee University. I enjoy learning by building—turning small ideas into
            clean, thoughtful projects. I’m detail-oriented, and I love making things feel calm,
            consistent, and a little bit cute.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>

      <section className="grid md:grid-cols-12 gap-6">
        {/* Left: photo + mini note */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm">
            <div className="rounded-[24px] bg-blue-50 border border-blue-100 p-3">
              <img
                src="/profile.png"
                alt="SU LEI LEI NAING"
                className="w-50 rounded-[18px] object-cover"
              />
            </div>

            <div className="mt-5">
              <p className="text-sm text-gray-500">SU LEI LEI NAING</p>
              <p className="text-lg font-semibold text-gray-900">
                CSE @ Kyung Hee University
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Computer Science", "Data Analysis", "Detail lover"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm">
            <p className="text-sm text-gray-500">A small note</p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              I’m happiest when a project feels <span className="font-medium">simple</span>,{" "}
              <span className="font-medium">organized</span>, and{" "}
              <span className="font-medium">gently polished</span> — like everything is in the right place 🩵
            </p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-6">
          <div className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
              <span className="text-xs text-gray-400">What I use / learnt</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
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
I try to improve a little with each project 🩵
            </p>
          </div>

          <div className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Interests</h2>
            <p className="text-sm text-gray-500 mt-1">What I’m curious about</p>

            <div className="mt-5 space-y-4">
              {interests.map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{it.title}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-white border border-blue-100 text-gray-500">
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

      {/* Bottom calm strip */}
      <section className="bg-blue-50/70 border border-blue-100 rounded-[28px] p-6 shadow-sm">
        <p className="text-sm text-blue-900/70">
          ✧  I am still a learner with strong interest and commitment to my studies.
        </p>
      </section>
    </div>
  );
}
