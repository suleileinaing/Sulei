import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
      <section
        className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm
                   flex items-center justify-center
                   min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]"
      >
        <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative w-full p-6 sm:p-8 md:p-10">
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs text-center">
              🩵 welcome to my portfolio website
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="w-[160px] sm:w-[190px] md:w-[240px] flex-shrink-0">
              <div className="rounded-full bg-blue-50 border border-blue-100 p-1">
                <img
                  src={process.env.PUBLIC_URL + "/profile.png"}
                  alt="SU LEI LEI NAING"
                  className="w-full aspect-square rounded-full object-cover"
                />
              </div>
            </div>

            <div className="w-full text-center md:text-left">
              <p className="text-sm text-gray-500">Hello, I’m</p>

              <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 leading-tight">
                <span className="text-sky-600">SU LEI LEI NAING</span> 🩵
              </h1>

              <p className="mt-4 text-gray-600 leading-relaxed md:max-w-2xl">
                A 24-year-old Computer Science student at Kyung Hee University with a genuine
                interest in learning, problem-solving, and building things thoughtfully.
              </p>

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

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>
    </div>
  );
}
