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
        .normalize('NFD')                     // separa acentos
        .replace(/[\u0300-\u036f]/g, '')      // elimina acentos
        .replace(/\s+/g, '-')                 // reemplaza espacios por guiones
        .replace(/[^\w\-]+/g, '')             // elimina caracteres no válidos
        .slice(0, 96),
        
      },

    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

export default post;
