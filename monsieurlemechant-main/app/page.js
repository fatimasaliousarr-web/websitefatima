"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function Home() {
  return (
    <main className="relative w-full text-white">

      {/* 🌟 HERO SECTION */}
      <section className="relative h-screen w-full">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/2.jpeg"
            className="h-full w-full object-cover"
            alt="Luxury Hotel Background"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
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
      </section>

      {/* 🌟 SECTION COMPTEURS LUXE */}
      <section className="py-28 bg-[#050910] max-w-7xl mx-auto px-6 text-center">

        {/* Titre premium */}
        <h2 className="premium-title text-5xl gold-glow">Nos Chiffres</h2>
        <div className="divider"></div>

        <p className="text-gray-400 mb-16">
          Une expérience unique façonnée par l’excellence et les moments inoubliables.
        </p>

        {/* Compteurs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          <AnimatedCounter end={120} label="Personnes taquinées" />
          <AnimatedCounter end={350} label="Moments gênants créés" />
          <AnimatedCounter end={15} label="Années à râler pour rien" />
          <AnimatedCounter end={45} label="Chats témoins de ses bêtises" />

        </div>
      </section>

    </main>
  );
}
