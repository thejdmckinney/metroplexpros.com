import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Blue)', value: 'primary' },
          { title: 'Secondary (Dark)', value: 'secondary' },
          { title: 'Success (Green)', value: 'success' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      text: 'text',
      style: 'style',
    },
    prepare({ text, style }) {
      return {
        title: text || 'Button',
        subtitle: `${style} button`,
      }
    },
  },
})
