import {
  Server,
  Shield,
  Network,
} from "lucide-react";

import FadeIn from "./FadeIn";
import { services } from "../data/services";

export default function Services() {
  return (
    <FadeIn>
    <section className="bg-white py-32">

      <div className="
              border
              rounded-2xl
              p-8
              hover:shadow-2xl
              hover:-translate-y-2
              transition
              duration-300
        ">

        <div className="text-center">

          <p className="text-red-600 font-semibold">
            OUR SERVICES
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technology Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

  {services.map((service) => (

    <div
      key={service.title}
      className="
      border
      rounded-2xl
      p-8
      hover:shadow-2xl
      hover:-translate-y-2
      transition
      duration-300
      "
    >

      <h3 className="text-2xl font-bold">

        {service.title}

      </h3>

      <p className="mt-4 text-gray-600">

        {service.description}

      </p>

    </div>

  ))}

</div> 

</div>

    </section>
    </FadeIn>
  );
}