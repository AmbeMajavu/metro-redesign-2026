export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">

        <h2 className="text-white text-2xl font-bold">
          METRO
        </h2>

        <div className="flex gap-8 text-white">

          <a href="#">Services</a>

          <a href="#">Solutions</a>

          <a href="#">Contact</a>

          <button className="bg-red-600 px-5 py-2 rounded-lg">
            Get Quote
          </button>

        </div>

      </div>

    </nav>
  );
}