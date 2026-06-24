export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-6
        flex
        justify-between
        items-center
        "
      >

        <h2 className="text-white text-2xl font-bold">
          METRO
        </h2>

        <div
          className="
          hidden
          md:flex
          gap-8
          items-center
          text-white
          "
        >

          <a href="#services">Services</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

          <button
            className="
            bg-red-600
            px-5
            py-2
            rounded-lg
            "
          >
            Get Quote
          </button>

        </div>

        <button
          className="
          md:hidden
          text-white
          text-3xl
          "
        >
          ☰
        </button>

      </div>

    </nav>
  );
}