export default function Contact() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgrkyqr";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
      <section className="relative overflow-hidden bg-white border border-blue-100 rounded-[28px] shadow-sm">
        <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs">
            💌 contact
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Contact me
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Leave me a message here. I’ll be in touch as soon as possible.
          </p>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-100 via-white to-blue-100" />
      </section>

      <section className="bg-white border border-blue-100 rounded-[28px] p-5 sm:p-6 md:p-8 shadow-sm">
        <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-5">
          <input type="text" name="_gotcha" className="hidden" />
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio website"
          />

          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-blue-100 px-4 py-2.5
                         bg-blue-50/40 text-gray-800
                         focus:outline-none focus:border-blue-300
                         focus:ring-2 focus:ring-blue-200/60 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="mt-2 w-full rounded-2xl border border-blue-100 px-4 py-2.5
                         bg-blue-50/40 text-gray-800
                         focus:outline-none focus:border-blue-300
                         focus:ring-2 focus:ring-blue-200/60 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="mt-2 w-full rounded-2xl border border-blue-100 px-4 py-2.5
                         bg-blue-50/40 text-gray-800
                         focus:outline-none focus:border-blue-300
                         focus:ring-2 focus:ring-blue-200/60 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 rounded-2xl bg-blue-100 text-blue-700 py-3
                       border border-blue-200
                       hover:bg-blue-600 hover:text-white
                       transition-all duration-300
                       hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.25)]"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-400 text-center">
            This form uses Formspree to deliver messages to my email.
          </p>
        </form>
      </section>

      <section className="bg-blue-50/70 border border-blue-100 rounded-[28px] p-5 sm:p-6 shadow-sm">
        <p className="text-sm text-blue-900/70">
          I’m always happy to connect and learn from new environments 🩵
        </p>
      </section>
    </div>
  );
}
