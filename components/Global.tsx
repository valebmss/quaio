import React from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SearchBar from "@/components/SearchBar";

export default function HomeClient({ dict }: { dict: any }) {

  return (
      <body>
    <main className="relative">
      <Hero dict={dict} />
    </main>
    <section>
        <SearchBar
  dict={dict}
  data={['Asesorías', 'Gestión de datos', 'Ciberseguridad', 'Migración a la nube']}
/>

    </section>
    <section>
        <Servicios dict={dict['services-section']} />
    </section>
      </body>
  );
}
