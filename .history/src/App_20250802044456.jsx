export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Tallal</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          A passionate frontend developer crafting beautiful web interfaces.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white">
            Download CV
          </button>
          <button className="border border-white px-6 py-2 rounded text-white hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}
