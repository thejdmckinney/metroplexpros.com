import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'metroplex-pros-studio',
  title: 'Metroplex Pros Blog',

  projectId: 'h3o584t2',
  dataset: 'production',
  organizationId: 'ot13dSvF3',

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
