import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-4
        flex
        justify-between
        items-center
        "
      >

        <Image
          src="/metro-logo.png"
          alt="Metro Computer Services"
          width={170}
          height={60}
          className="object-contain"      
        />

        <div
          className="
          hidden
          md:flex
          gap-8
          items-center
          text-zinc-100
          "
        >

          <a 
          href="#services"
          className = "hover:text-blue-500 transition"
          >
            Services
          </a>

          <a href="#about"
          className = "hover:text-blue-500 transition"
          >
            About
          </a>

          <a href="#contact"
          className = "hover:text-blue-500 transition"
          >
            Contact
          </a>

          <button
            className="
            bg-blue-600
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