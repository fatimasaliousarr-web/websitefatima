export default function Services() {
  return (
    <div className="pt-32 section">
      <h1 className="text-4xl md:text-5xl font-semibold gradient-title mb-10">
        Nos Services
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-bold gold mb-2">Développement Web</h3>
          <p className="text-gray-300">
            Création de sites modernes, rapides et responsives.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-bold gold mb-2">Consulting</h3>
          <p className="text-gray-300">
            Accompagnement stratégique pour vos projets digitaux.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-bold gold mb-2">Formations</h3>
          <p className="text-gray-300">
            Sessions de formation pour monter en compétences.
          </p>
        </div>
      </div>
    </div>
  );
}
