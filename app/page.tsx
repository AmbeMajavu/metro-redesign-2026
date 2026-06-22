import Navbar from "../components/Navbar";
export default function Home()
{
  return (
    <main>
         <Navbar />

      <section className="min-h-screen bg-black text-white">

        <div className="max-w-7xl mx-auto px-8 py-28">

          <p className="text-red-500 font-medium">
            METRO COMPUTER SERVICES
          </p>

          <h1 className="text-6xl font-bold mt-6 max-w-3xl">
            Enterprise ICT Solutions For Modern Business
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-2xl">
            Infrastructure, networking, security, hardware,
            software and managed technology solutions.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-red-600 px-8 py-4 rounded-xl">
              Request Quote
            </button>

            <button className="border px-8 py-4 rounded-xl">
              View Services
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}