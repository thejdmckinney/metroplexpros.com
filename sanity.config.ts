/**'use client'

 * This configuration is used for the Sanity Studio

 * Schemas are defined in the './schemas' folder/**

 */ * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route

 */

import {visionTool} from '@sanity/vision'

import {defineConfig} from 'sanity'import {visionTool} from '@sanity/vision'

import {structureTool} from 'sanity/structure'import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'

// Import schemas

import {schemaTypes} from './schemas'// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import {apiVersion, dataset, projectId} from './src/sanity/env'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h3o584t2'import {schema} from './src/sanity/schemaTypes'

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'import {structure} from './src/sanity/structure'



export default defineConfig({export default defineConfig({

  name: 'default',  basePath: '/studio',

  title: 'Metroplex Pros',  projectId,

    dataset,

  projectId,  // Add and edit the content schema in the './sanity/schemaTypes' folder

  dataset,  schema,

    plugins: [

  plugins: [    structureTool({structure}),

    structureTool(),    // Vision is for querying with GROQ from inside the Studio

    visionTool(),    // https://www.sanity.io/docs/the-vision-plugin

  ],    visionTool({defaultApiVersion: apiVersion}),

    ],

  schema: {})

    types: schemaTypes,
  },
})
