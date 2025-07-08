import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';
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
    slug,
    excerpt,
    mainImage
  }
`;

export default async function BlogList( { params }: { params: { slug: string } }) {
      const slug = params.slug;

  const post = await client.fetch(query, { slug });
  const posts = await client.fetch(query);

  return (
    <main className="min-h-screen bg-[#f7f7f7] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary text-center mb-12">
          Últimas Publicaciones
        </h1>

        <ul className="grid gap-8 md:grid-cols-2">
          {posts.map((post: any) => {
            const imageUrl = post.mainImage?.asset?._ref
              ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${post.mainImage.asset._ref
                  .replace('image-', '')
                  .replace('-jpg', '.jpg')
                  .replace('-png', '.png')}`
              : null;

            return (
              <li
                key={post._id}
                className="bg-white border border-gray-200 rounded-xl shadow-soft hover:border-primary hover:shadow-md transition overflow-hidden"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center text-secondary font-medium hover:underline"
                  >
                    Leer más
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
