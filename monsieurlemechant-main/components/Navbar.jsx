"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <nav className={`nav-premium ${scrolled ? "py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <h1 className="text-3xl font-bold gradient-gold">
          Entreprise
        </h1>

        <div className="flex gap-8 text-lg">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <Link href="/activites" className="hover:text-gold transition">Activités</Link>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
