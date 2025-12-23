const items = [
  {
    school: "Your University",
    degree: "B.S. in Computer Science",
    period: "2023 – Present",
    details: ["Algorithms", "Databases", "Machine Learning"],
  },
  {
    school: "Your High School",
    degree: "Science Track",
    period: "2019 – 2022",
    details: ["Math club", "Programming club"],
  },
];

export default function Education() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Education</h1>

      {items.map((e) => (
        <div key={e.school} className="bg-white rounded-2xl border p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h2 className="text-xl font-semibold">{e.school}</h2>
              <p className="text-gray-600">{e.degree}</p>
            </div>
            <span className="text-sm text-gray-500">{e.period}</span>
          </div>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            {e.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
