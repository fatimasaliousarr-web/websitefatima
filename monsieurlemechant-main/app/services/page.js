export default function Services() {
  return (
    <main className="relative min-h-screen bg-black text-white pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <img
          src="/4.jpeg"
          alt="Luxury Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-serif text-6xl mb-4">SERVICES</h1>
          <p className="text-lg tracking-wide max-w-2xl">
            Discover our premium services crafted with elegance and exclusivity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 px-10 max-w-6xl mx-auto">
        <div className="text-center">
          <img src="/2.jpeg" className="h-64 mx-auto mb-4 object-cover" />
          <h2 className="font-serif text-2xl mb-2">Custom Designs</h2>
          <p className="text-gray-300 text-sm">
            Tailored luxury creations crafted uniquely for you.
          </p>
        </div>

        <div className="text-center">
          <img src="/4.jpeg" className="h-64 mx-auto mb-4 object-cover" />
          <h2 className="font-serif text-2xl mb-2">Premium Materials</h2>
          <p className="text-gray-300 text-sm">
            Finest gemstones and metals selected with care.
          </p>
        </div>

        <div className="text-center">
          <img src="/3.jpeg" className="h-64 mx-auto mb-4 object-cover" />
          <h2 className="font-serif text-2xl mb-2">Expert Craftsmanship</h2>
          <p className="text-gray-300 text-sm">
            Handmade pieces created by master artisans.
          </p>
        </div>
      </section>
    </main>
  );
}
