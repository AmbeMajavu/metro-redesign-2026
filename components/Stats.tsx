import FadeIn from "./FadeIn";

export default function Stats() {
  return (
    <FadeIn>
    <section className="bg-black text-white py-24">

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        grid
        md:grid-cols-4
        gap-10
        text-center
        "
      >

        <div>

          <h2 className="text-5xl font-bold text-red-500">
            15+
          </h2>

          <p className="mt-3">
            Years Experience
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-red-500">
            100+
          </h2>

          <p className="mt-3">
            Projects Delivered
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-red-500">
            24/7
          </h2>

          <p className="mt-3">
            Support
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-red-500">
            SA
          </h2>

          <p className="mt-3">
            National Coverage
          </p>

        </div>

      </div>

    </section>
    </FadeIn>
  );
}