import React from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SearchBar from "@/components/SearchBar";
import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

const query = groq`
  *[_type == "post"]{
    title,
    "slug": slug.current
  }
`;

export default async function HomeClient({ dict }: { dict: any }) {
    const posts: { title: string; slug: string }[] = await client.fetch(query);

  return (
    <div>
      <main className="relative">
        <Hero dict={dict} />
      </main>
      <section>
        <SearchBar dict={dict} data={posts} />
      </section>
      <section>
        <Servicios dict={dict["services-section"]} />
      </section>
    </div>
  );
}
