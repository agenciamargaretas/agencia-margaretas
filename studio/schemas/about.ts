import { defineType, defineField } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Seção Sobre',
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
      name: 'description',
      title: 'Descrição',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true }
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
      initialValue: 5
    })
  ]
}) 