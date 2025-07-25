import { defineType, defineField } from 'sanity'

export const targetAudience = defineType({
  name: 'targetAudience',
  title: 'Seção de Público-Alvo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text'
    }),
    defineField({
      name: 'audienceList',
      title: 'Lista de Públicos-Alvo',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Descrição', type: 'text' },
            { name: 'image', title: 'Imagem', type: 'image' },
            { name: 'isActive', title: 'Ativo', type: 'boolean', initialValue: true },
            { name: 'order', title: 'Ordem', type: 'number', initialValue: 0 }
          ]
        }
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Seção Ativa',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'order',
      title: 'Ordem',
      type: 'number',
      initialValue: 9
    })
  ]
}) 