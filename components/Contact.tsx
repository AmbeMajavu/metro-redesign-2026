export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-red-600 font-semibold">
            CONTACT US
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let’s Start The Conversation
          </h2>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          gap-12
          mt-20
          "
        >

          <div>

            <h3 className="text-3xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-6 text-gray-600">

              Tell us about your
              technology requirements
              and our team will reach out.

            </p>

          </div>

          <form className="space-y-6">

            <input
              placeholder="Full Name"
              className="
              w-full
              p-4
              rounded-xl
              border
              "
            />

            <input
              placeholder="Email Address"
              className="
              w-full
              p-4
              rounded-xl
              border
              "
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project"
              className="
              w-full
              p-4
              rounded-xl
              border
              "
            />

            <button
              className="
              bg-red-600
              text-white
              px-8
              py-4
              rounded-xl
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}