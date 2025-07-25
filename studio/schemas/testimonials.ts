import { defineType, defineField } from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Seção de Depoimentos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Título principal da seção de depoimentos'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo da Seção',
      type: 'text',
      description: 'Subtítulo descritivo da seção'
    }),
    defineField({
      name: 'testimonialsList',
      title: 'Lista de Depoimentos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID do Depoimento',
              type: 'number',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'name',
              title: 'Nome do Cliente',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'role',
              title: 'Cargo/Função',
              type: 'string',
              description: 'Cargo ou função do cliente'
            }),
            defineField({
              name: 'company',
              title: 'Empresa',
              type: 'string',
              description: 'Nome da empresa do cliente'
            }),
            defineField({
              name: 'testimonial',
              title: 'Depoimento',
              type: 'text',
              validation: (Rule) => Rule.required(),
              description: 'Texto do depoimento'
            }),
            defineField({
              name: 'rating',
              title: 'Avaliação',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
              description: 'Avaliação de 1 a 5 estrelas'
            }),
            defineField({
              name: 'avatar',
              title: 'Foto do Cliente',
              type: 'image',
              options: {
                hotspot: true
              },
              description: 'Foto do cliente (opcional)'
            }),
            defineField({
              name: 'isActive',
              title: 'Depoimento Ativo',
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
              title: 'name',
              subtitle: 'company',
              media: 'avatar'
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title || 'Cliente',
                subtitle: subtitle || 'Empresa'
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
      initialValue: 3,
      description: 'Ordem de exibição da seção'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      testimonialsCount: 'testimonialsList'
    },
    prepare(selection) {
      const { title, subtitle, testimonialsCount } = selection
      return {
        title: title || 'Seção de Depoimentos',
        subtitle: subtitle || `${testimonialsCount?.length || 0} depoimentos cadastrados`
      }
    }
  }
}) 