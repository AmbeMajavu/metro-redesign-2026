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
         Technology That Moves
         Business Forward
        </h1>

        <p
          className="
          mt-8
          text-gray-300
          text-lg
          max-w-2xl
          "
        >
         Delivering infrastructure,
         networking, managed IT,
         security and enterprise
         gtechnology solutions across
         South Africa.
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