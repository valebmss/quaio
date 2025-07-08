
import { groq } from 'next-sanity';
import { createClient } from 'next-sanity';
import Image from 'next/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  useCdn: true,
});

const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body
  }
`;

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-2 text-secondary">{children}</h2>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-800">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5 mb-4 text-gray-800">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const ref = value.asset?._ref;
      if (!ref) return null;

      const url = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${ref
        .replace('image-', '')
        .replace('-jpg', '.jpg')
        .replace('-png', '.png')}`;

      return (
        <Image
          src={url}
          alt="Imagen del contenido"
          width={800}
          height={500}
          className="rounded-lg my-6"
        />
      );
    }
  }
};

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-500">Post no encontrado</div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">{post.title}</h1>

      {post.mainImage?.asset?._ref && (
        <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-xl">
          <Image
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${post.mainImage.asset._ref
              .replace('image-', '')
              .replace('-jpg', '.jpg')
              .replace('-png', '.png')}`}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none text-black prose-h2:text-secondary prose-a:text-primary prose-img:rounded-lg">
        <PortableText value={post.body} components={components} />
      </div>
    </article>
  );
}

export const revalidate = 60;
