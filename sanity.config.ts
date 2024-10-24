import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { work } from './sanity/schemas/work';

export default defineConfig({
  name: 'default',
  title: 'Your Project Name',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio', // Access studio at /studio
  plugins: [deskTool()],
  schema: {
    types: [work],
  },
});