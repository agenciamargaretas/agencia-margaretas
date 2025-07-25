import { defineType, defineField } from 'sanity'

export const diagnostic = defineType({
  name: 'diagnostic',
  title: 'Seção Diagnóstico',
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
      name: 'questions',
      title: 'Perguntas do Diagnóstico',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Pergunta', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'type', title: 'Tipo', type: 'string' },
            { name: 'options', title: 'Opções', type: 'array', of: [{ type: 'string' }] },
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
      initialValue: 12
    })
  ]
}) 