import { defineType, defineField } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Seção de Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Título principal da seção de portfolio'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo da Seção',
      type: 'text',
      description: 'Subtítulo descritivo da seção'
    }),
    defineField({
      name: 'projectsList',
      title: 'Lista de Projetos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID do Projeto',
              type: 'number',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'title',
              title: 'Título do Projeto',
              type: 'string',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              validation: (Rule) => Rule.required()
            }),
            defineField({
              name: 'client',
              title: 'Cliente',
              type: 'string',
              description: 'Nome do cliente'
            }),
            defineField({
              name: 'category',
              title: 'Categoria',
              type: 'string',
              description: 'Categoria do projeto (ex: Branding, Site, Social Media)'
            }),
            defineField({
              name: 'image',
              title: 'Imagem do Projeto',
              type: 'image',
              options: {
                hotspot: true
              },
              description: 'Imagem principal do projeto'
            }),
            defineField({
              name: 'images',
              title: 'Galeria de Imagens',
              type: 'array',
              of: [{ type: 'image' }],
              description: 'Galeria de imagens do projeto'
            }),
            defineField({
              name: 'url',
              title: 'URL do Projeto',
              type: 'url',
              description: 'Link para o projeto (se disponível)'
            }),
            defineField({
              name: 'isActive',
              title: 'Projeto Ativo',
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
              subtitle: 'client',
              media: 'image'
            },
            prepare(selection) {
              const { title, subtitle } = selection
              return {
                title: title || 'Projeto',
                subtitle: subtitle || 'Cliente'
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
      initialValue: 4,
      description: 'Ordem de exibição da seção'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      projectsCount: 'projectsList'
    },
    prepare(selection) {
      const { title, subtitle, projectsCount } = selection
      return {
        title: title || 'Seção de Portfolio',
        subtitle: subtitle || `${projectsCount?.length || 0} projetos cadastrados`
      }
    }
  }
}) 