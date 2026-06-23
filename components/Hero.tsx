export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-40">

        <p className="text-red-500 font-medium">
          METRO COMPUTER SERVICES
        </p>

        <h1
          className="
          text-6xl
          font-bold
          mt-6
          max-w-4xl
          "
        >
          Enterprise ICT Solutions
          For Modern Business
        </h1>

        <p
          className="
          mt-8
          text-gray-300
          text-lg
          max-w-2xl
          "
        >
          Infrastructure, networking,
          cybersecurity, managed IT,
          software and enterprise support.
        </p>

        <div className="flex gap-4 mt-10">

          <button
            className="
            bg-red-600
            px-8
            py-4
            rounded-lg
            "
          >
            Request Quote
          </button>

          <button
            className="
            border
            border-white
            px-8
            py-4
            rounded-lg
            "
          >
            Explore Services
          </button>

        </div>

      </div>

    </section>
  );
}