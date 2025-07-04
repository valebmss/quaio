import React from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";

export default function HomeClient({ dict }: { dict: any }) {

  return (
      <body>
    <main className="relative">
      <Hero dict={dict} />
    </main>
    <section>
        <Servicios dict={dict['services-section']} />
    </section>
      </body>
  );
}
