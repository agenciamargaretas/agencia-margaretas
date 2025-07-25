import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Seção Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Título principal da seção hero'
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Subtítulo descritivo'
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto do Botão CTA',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Texto do botão de call-to-action'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link do Botão CTA',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Link de destino do botão (ex: #contato)'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagem de Fundo',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Imagem de fundo da seção hero'
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
      initialValue: 1,
      description: 'Ordem de exibição da seção'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Seção Hero',
        subtitle: subtitle || 'Seção principal do site',
        media: media
      }
    }
  }
}) 