import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-900">

      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        <Outlet />
      </main>
      <footer className="border-t shadow-3xl border-blue-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500
                        flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-medium">
              SU LEI LEI NAING
            </span>
          </p>
          <div className="flex gap-20 justify-center md:justify-end">
            <a
              href="mailto:yumi.sulei@email.com"
              className="hover:text-blue-800 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/suleileinaing"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/s_sulei_i/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800 transition-colors"
            >
              Instagram
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
