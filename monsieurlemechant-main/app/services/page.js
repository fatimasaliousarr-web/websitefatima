export default function Services() {
  return (
    <div className="pt-40 section fade-in">

      <h1 className="text-5xl font-bold gradient-gold mb-10">Services Premium</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <ServiceCard title="Développement Web Luxe" img="/service1.jpg" />
        <ServiceCard title="Consulting Élégant" img="/service2.jpg" />
        <ServiceCard title="Formations Professionnelles" img="/service3.jpg" />
      </div>

    </div>
  );
}
