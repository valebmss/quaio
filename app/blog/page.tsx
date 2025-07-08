import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

const query = groq`
  *[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug
  }
`;

export default async function BlogList() {
  const posts = await client.fetch(query);

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Últimas Publicaciones
        </h1>

        <ul className="grid gap-8 md:grid-cols-2">
          {posts.map((post: any) => (
            <li
              key={post._id}
              className="bg-white border border-gray-200 rounded-xl shadow-soft p-6 transition hover:border-primary hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <Link
                href={`/blog/${post.slug.current}`}
                className="inline-flex items-center text-secondary font-medium hover:underline"
              >
                Leer más
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
