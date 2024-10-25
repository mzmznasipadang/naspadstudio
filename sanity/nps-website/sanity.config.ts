import {defineConfig, Plugin} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'NPS Website',

  projectId: 'uq5fkdge',
  dataset: 'production',

  plugins: [
    structureTool(),
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : []),  vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})