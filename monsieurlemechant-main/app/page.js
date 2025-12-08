"use client";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="pt-32 fade-in">

      <section className="relative h-[90vh] w-full flex items-center fade-in">

  {/* Background image */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/info.jpeg')" }}
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  {/* CONTENT */}
  <div className="relative z-10 section max-w-4xl">
    <h1 className="text-6xl md:text-7xl font-bold gradient-gold mb-6 leading-tight">
      Excellence & Raffinement
    </h1>

    <p className="text-gray-300 text-lg max-w-2xl mb-10">
      Découvrez un univers façonné autour du luxe, de la précision et de l’élégance.
      Nos solutions sont pensées pour les marques qui exigent plus que l’ordinaire.
    </p>

    <button className="btn-gold text-lg">Découvrir Nos Services</button>
  </div>
</section>



      {/* COUNTERS HUMORISTIQUES */}
      <section className="section grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <Reveal><AnimatedCounter end={120} label="Personnes taquinées" /></Reveal>
        <Reveal><AnimatedCounter end={350} label="Moments gênants créés" /></Reveal>
        <Reveal><AnimatedCounter end={15} label="Années à râler pour rien" /></Reveal>
        <Reveal><AnimatedCounter end={45} label="Chats témoins de ses bêtises" /></Reveal>
      </section>

    </div>
  );
}
console.log("DEPLOY TEST");









