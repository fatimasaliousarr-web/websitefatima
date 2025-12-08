export default function Home() {
  return (
    <main className="relative h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/1.jpeg"
          className="h-full w-full object-cover"
          alt="Luxury Hotel Background"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h4 className="tracking-[0.3em] text-sm mb-3">
          LUXURY HOTEL & BEST RESORT
        </h4>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          ENJOY A LUXURY <br /> EXPERIENCE
        </h1>

        <a
          href="/services"
          className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          ROOMS & SUITES
        </a>
      </div>
    </main>
  );
}
