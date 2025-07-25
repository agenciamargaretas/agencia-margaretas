import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Agência Margaretas CMS',
  projectId: 'margaretas-admin',
  dataset: process.env.SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    deskTool({
      structure,
    })
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // Customizar componentes do studio se necessário
    }
  }
}) 