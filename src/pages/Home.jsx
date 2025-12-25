import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <section className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm
                    flex items-center justify-center min-h-[70vh]">

        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative p-8 md:p-10">
          {/* tiny ribbon */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs">
            🩵 welcome to my portfolio website
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-[240px]">
              <div className="rounded-full bg-blue-50 border border-blue-100 p-1">
                <img
                  src={`${process.env.PUBLIC_URL}/profile.png`}
                  alt="SU LEI LEI NAING"
                  className="w-full aspect-square rounded-full object-cover"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm text-gray-500">Hello, I’m</p>

              <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 leading-tight">
                <span className="text-sky-600">SU LEI LEI NAING</span> 🩵
              </h1>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                A 24-year-old Computer Science student at Kyung Hee University with a genuine
                interest in learning, problem-solving, and building things thoughtfully.
              </p>


              {/* soft note line */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

              <p className="mt-5 text-sm text-gray-500">
                Want to know more about me?{" "}
                <Link
                  to="/about"
                  className="underline underline-offset-4 text-gray-600 hover:text-blue-700 transition-colors"
                >
                  Click here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>

    </div>
  );
}
