const projects = [
  {
    name: "Youtube Views Prediction",
    desc: "AI programming project, using various AI libraries",
    tags: ["Python", "Pandas", "Numpy", "Sklearn"],
    link: "https://github.com/suleileinaing/Predicting-Youtube-Video-Views",
  },
  {
    name: "Simple Physics Engine",
    desc: "Simple simulation of billiard game, using pygame",
    tags: ["Python", "Pygame"],
    link: "https://github.com/suleileinaing/Simple-Physics-Engine",
  },
  {
    name: "Snake Game",
    desc: "Added new missions to snake game template given by ChatGPT",
    tags: ["Python", "Pygame"],
    link: "https://github.com/suleileinaing/snake-game",
  },
  {
    name: "Arrow Runner",
    desc: "Simple Python Game",
    tags: ["Python", "Pygame"],
    link: "https://github.com/suleileinaing/Arrow-Runner",
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <section className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm">
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs">
            ✨ projects
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Projects
          </h1>

          <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
            A small collection of projects I’ve worked on. Mostly projects from my classes in University and small personal projects
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-white border border-blue-100 rounded-[28px] p-6 shadow-sm
                       hover:bg-blue-50/30 hover:border-blue-200 transition
                       hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.14)]"
          >
            <h2 className="text-xl font-semibold text-gray-900">{p.name}</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-50/70 text-blue-800/80
                             border border-blue-100"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target={p.link?.startsWith("http") ? "_blank" : undefined}
              rel={p.link?.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium
                         text-blue-700 hover:text-blue-900 transition-colors"
            >
              View <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </section>

      {/* Bottom calm note */}
      <section className="bg-blue-50/70 border border-blue-100 rounded-[28px] p-6 shadow-sm">
        <p className="text-sm text-blue-900/70">
          I’m continuously learning and adding new projects as I grow 🩵
        </p>
      </section>
    </div>
  );
}
