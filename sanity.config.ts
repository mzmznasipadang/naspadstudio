// sanity/nps-website/sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { work } from './schemas/work'; // Import schema directly

export default defineConfig({
  name: 'default',
  title: 'NPS Website',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool(),
    process.env.NODE_ENV === 'development' ? visionTool() : undefined,
  ].filter(Boolean),

  schema: {
    types: [work], // Use schema directly instead of importing from schemaTypes
  },
});