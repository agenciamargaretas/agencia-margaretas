import { defineType, defineField } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Seção de Contato',
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
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'text'
    }),
    defineField({
      name: 'socialMedia',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' }
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
      initialValue: 6
    })
  ]
}) 