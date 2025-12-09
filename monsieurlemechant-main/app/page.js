"use client";

import AnimatedCounter from "./components/AnimatedCounter";


export default function Home() {
  return (
    <main className="bg-[#050910] text-white">

      {/* HERO */}
      <section className="relative h-screen w-full">
        <img
          src="/2.jpeg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Luxury Background"
        />
        <div className="absolute inset-0 bg-black/40"></div>

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


      {/* COMPTEURS */}
      <section className="py-28 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif text-[#FFD56B]">Nos Chiffres</h2>
        <div className="w-24 h-1 bg-[#FFD56B] mx-auto my-4"></div>

        <p className="text-gray-400 mb-16">
          Une expérience unique façonnée par l’excellence et les moments inoubliables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <AnimatedCounter end={120} label="Personnes taquinées" />
          <AnimatedCounter end={350} label="Moments gênants créés" />
          <AnimatedCounter end={15} label="Années à râler pour rien" />
          <AnimatedCounter end={45} label="Chats témoins de ses bêtises" />
        </div>
      </section>


      {/* DOMAINES D’INTERVENTION */}
      <section className="py-28 bg-[#050910] text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Nos Domaines d’Intervention
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Une offre complète mêlant humour, impact stratégique et jugement félin
          de haute précision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-[#0B1220] p-10 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
            <h3 className="text-[#00AEEF] text-2xl font-semibold mb-4">
              Consulting Taquin
            </h3>
            <p className="text-gray-300">
              Analyse stratégique des situations où Monsieur Le Méchant peut
              taquiner avec précision.
            </p>
          </div>

          <div className="bg-[#0B1220] p-10 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
            <h3 className="text-[#00AEEF] text-2xl font-semibold mb-4">
              Gestion du Stress Félin
            </h3>
            <p className="text-gray-300">
              Messi observe, juge, et optimise votre comportement en fonction de
              son taux d’agacement.
            </p>
          </div>

          <div className="bg-[#0B1220] p-10 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300">
            <h3 className="text-[#00AEEF] text-2xl font-semibold mb-4">
              Transformation Digitale
            </h3>
            <p className="text-gray-300">
              Automatisation, leadership, humour et chaos parfaitement coordonné.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
