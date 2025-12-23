const projects = [
  {
    name: "Project One",
    desc: "Short description of what it does.",
    tags: ["React", "Tailwind"],
    link: "#",
  },
  {
    name: "Project Two",
    desc: "Another project description.",
    tags: ["Node", "API"],
    link: "#",
  },
  {
    name: "Project Three",
    desc: "Add more projects anytime.",
    tags: ["ML", "Python"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-600 mt-2">
          Showcase your best work here.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600 mt-2">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 border"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              className="inline-block mt-5 text-blue-600 hover:underline text-sm font-medium"
            >
              View →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
