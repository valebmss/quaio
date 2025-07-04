import React from "react";
import Hero from "@/components/Hero";

export default function HomeClient({ dict }: { dict: any }) {

  return (
    <html lang="en">
      <body>
    <main className="relative">
      <Hero dict={dict} />
    </main>
      </body>
    </html>
  );
}
