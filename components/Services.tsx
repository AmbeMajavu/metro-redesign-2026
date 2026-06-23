import {
  Server,
  Shield,
  Network,
} from "lucide-react";

import FadeIn from "./FadeIn";

export default function Services() {
  return (
    <FadeIn>
    <section className="bg-white py-32">


      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-red-600 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technology Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="border
                rounded-2xl
                p-8
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300">

            <Server size={40} />

            <h3 className="text-2xl font-bold mt-6">
              Infrastructure
            </h3>

            <p className="mt-4 text-gray-600">
              Enterprise hardware,
              support and systems.
            </p>

          </div>

          <div className="border
                rounded-2xl
                p-8
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300">

            <Network size={40} />

            <h3 className="text-2xl font-bold mt-6">
              Networking
            </h3>

            <p className="mt-4 text-gray-600">
              Reliable business
              connectivity solutions.
            </p>

          </div>

          <div className="border
                rounded-2xl
                p-8
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300">

            <Shield size={40} />

            <h3 className="text-2xl font-bold mt-6">
              Cybersecurity
            </h3>

            <p className="mt-4 text-gray-600">
              Protection and
              secure infrastructure.
            </p>

          </div>

        </div>

      </div>

      

    </section>
    
    </FadeIn>

  );
}