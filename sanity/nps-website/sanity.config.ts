import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'NPS Website',

  projectId: 'uq5fkdge',
  dataset: 'production',
  basePath: '/studio',

  plugins: [
    deskTool(),
    process.env.NODE_ENV === 'development' ? visionTool() : undefined,
  ].filter(Boolean),

  schema: {
    types: schemaTypes,
  },
})