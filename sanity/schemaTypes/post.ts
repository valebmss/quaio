import { defineType, defineField } from 'sanity';

const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 96),
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Resumen',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(300).warning('Máximo 300 caracteres'),
    }),

    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
        {
          type: 'object',
          name: 'quote',
          title: 'Cita',
          fields: [
            { name: 'text', title: 'Texto', type: 'string' },
            { name: 'author', title: 'Autor', type: 'string' },
          ],
          preview: {
            select: { title: 'text', subtitle: 'author' },
          },
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video (YouTube Embed)',
          fields: [
            {
              name: 'url',
              title: 'URL de YouTube',
              type: 'url',
              validation: Rule => Rule.uri({ scheme: ['https'] }),
            },
          ],
        },
      ],
    }),
  ],
});

export default post;
