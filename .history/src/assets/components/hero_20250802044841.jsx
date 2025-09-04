// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="h-screen flex items-center px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
          Hello, I'm <span className="text-blue-600">Joan</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A Frontend Developer passionate about crafting clean and user‑friendly experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="/Joan-CV.pdf"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
