import Image from "next/image";
export default function Footer() {

  return (
    <footer className="bg-zinc-950 text-white">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-20
        "
      >

        <Image
            src="/metro-logo.png"
            alt="Metro"
            width={200}
            height={70}
        />

        <p className="mt-4 text-gray-400">

          Enterprise ICT Solutions
          for modern organisations.

        </p>

        <div className="mt-10">

          © 2026 Metro Computer Services

        </div>

      </div>

    </footer>
  );
}