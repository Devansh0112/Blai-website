export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-[#c3f53b] to-[#7bf03a] px-4 pt-24">
  <div className="container mx-auto flex flex-col items-center justify-center text-center">
    <h1 className="mb-6 text-[12rem] font-bold">blai</h1>
    <p className="mb-8 text-2xl">One-click Crypto</p>
    <button className="relative rounded-full p-[0.1rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-center rounded-full bg-black px-8 py-3">
        <span className="text-white">Get started</span>
      </div>
    </button>
  </div>
</section>

  )
}

