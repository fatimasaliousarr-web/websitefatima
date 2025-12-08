export default function Activites() {
  return (
    <main className="relative h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src="/2.jpeg"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="font-serif text-5xl mb-10">OUR ACTIVITIES</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Box 1 */}
          <a className="border border-white py-4 tracking-widest hover:bg-white hover:text-black transition">
            LIST YOUR HOME
          </a>

          {/* Box 2 */}
          <a className="border border-white py-4 tracking-widest hover:bg-white hover:text-black transition">
            BUY A HOME
          </a>

          {/* Box 3 */}
          <a className="border border-white py-4 tracking-widest hover:bg-white hover:text-black transition">
            NEW DEVELOPMENTS
          </a>
        </div>
      </div>
    </main>
  );
}
