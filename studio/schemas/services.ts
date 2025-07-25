import { defineType, defineField } from 'sanity'

export const services = defineType({
  name: 'services',
  title: 'Seção de Serviços',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Título principal da seção de serviços'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo da Seção',
      type: 'text',
      description: 'Subtítulo descritivo da seção'
    }),
    defineField({
      name: 'servicesList',
      title: 'Lista de Serviços',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Título do Serviço',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtítulo do Serviço',
              type: 'text',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'highlight',
              title: 'Destaque',
              type: 'string',
              description: 'Frase de destaque do serviço'
            }),
            defineField({
              name: 'cta',
              title: 'Texto do CTA',
              type: 'string',
              description: 'Texto do botão de call-to-action'
            }),
            defineField({
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              description: 'Escolha um ícone para o serviço',
              options: {
                list: [
                  { title: 'Olho (Branding)', value: 'EyeIcon' },
                  { title: 'Grupo de Pessoas (Redes Sociais)', value: 'UserGroupIcon' },
                  { title: 'Globo (Sites)', value: 'GlobeAltIcon' },
                  { title: 'Foguete (Performance)', value: 'RocketLaunchIcon' },
                  { title: 'Lâmpada (Consultoria)', value: 'LightBulbIcon' },
                  { title: 'Engrenagem (Soluções)', value: 'CogIcon' }
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isActive',
              title: 'Serviço Ativo',
              type: 'boolean',
              initialValue: true
            }),
            defineField({
              name: 'order',
              title: 'Ordem',
              type: 'number',
              initialValue: 0
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'icon'
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title || 'Serviço',
                subtitle: subtitle || 'Descrição do serviço'
              }
            }
          }
        }
      ],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: 'isActive',
      title: 'Seção Ativa',
      type: 'boolean',
      initialValue: true,
      description: 'Define se esta seção está ativa no site'
    }),
    defineField({
      name: 'order',
      title: 'Ordem',
      type: 'number',
      initialValue: 2,
      description: 'Ordem de exibição da seção'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      servicesCount: 'servicesList'
    },
    prepare(selection) {
      const { title, subtitle, servicesCount } = selection
      return {
        title: title || 'Seção de Serviços',
        subtitle: subtitle || `${servicesCount?.length || 0} serviços cadastrados`
      }
    }
  }
}) 