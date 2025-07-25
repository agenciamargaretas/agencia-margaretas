import { type SchemaTypeDefinition } from 'sanity'

// Importar nossos schemas personalizados
import { hero } from '../../studio/schemas/hero'
import { services } from '../../studio/schemas/services'
import { testimonials } from '../../studio/schemas/testimonials'
import { portfolio } from '../../studio/schemas/portfolio'
import { about } from '../../studio/schemas/about'
import { contact } from '../../studio/schemas/contact'
import { clients } from '../../studio/schemas/clients'
import { agencyValue } from '../../studio/schemas/agencyValue'
import { targetAudience } from '../../studio/schemas/targetAudience'
import { challenges } from '../../studio/schemas/challenges'
import { methodEye } from '../../studio/schemas/methodEye'
import { diagnostic } from '../../studio/schemas/diagnostic'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    services,
    testimonials,
    portfolio,
    about,
    contact,
    clients,
    agencyValue,
    targetAudience,
    challenges,
    methodEye,
    diagnostic
  ],
}
