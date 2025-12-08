export default function Footer() {
  return (
    <footer className="mt-32 py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">

        <div>
          <h3 className="font-bold gold text-xl mb-4">Entreprise</h3>
          <p className="text-gray-400">
            Solutions haut de gamme pour marques ambitieuses.
          </p>
        </div>

        <div>
          <h3 className="font-bold gold text-xl mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Accueil</li>
            <li>Activités</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold gold text-xl mb-4">Contact</h3>
          <p>Email : contact@entreprise.com</p>
          <p>Téléphone : +33 06 00 00 00 00</p>
        </div>

      </div>
    </footer>
  );
}
