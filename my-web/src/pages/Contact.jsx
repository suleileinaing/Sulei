export default function Contact() {
  return (
    <div className="bg-white rounded-2xl border p-8 max-w-2xl">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="mt-3 text-gray-600">
        Fill this form (for now it doesn’t send anywhere, it’s just UI).
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            rows="4"
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write something..."
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
