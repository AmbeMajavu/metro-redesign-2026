export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-100">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        grid
        md:grid-cols-2
        gap-20
        items-center
        "
      >

        <div>

          <p className="text-blue-600 font-semibold">

            ABOUT METRO

          </p>

          <h2 className="text-5xl font-bold mt-4">

            Building Reliable
            Technology Solutions

          </h2>

          <p
            className="
            mt-8
            text-gray-600
            leading-8
            "
          >

            We help organisations
            modernise infrastructure,
            improve connectivity,
            strengthen security and
            enable business growth
            through technology.

          </p>

        </div>

        <div
          className="
          h-[450px]
          rounded-3xl
          bg-gradient-to-br
          from-blue-600
          to-black
          "
        />

      </div>

    </section>
  );
}