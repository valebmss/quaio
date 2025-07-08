import { type SchemaTypeDefinition } from 'sanity';
import post from './post';           // 👈  importa el esquema que acabas de crear

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],                     // 👈  ponlo en el array
};
