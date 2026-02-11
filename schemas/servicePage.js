export default {
  name: 'servicePage',
  type: 'document',
  title: 'Service Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
      description: 'e.g., "Electrical Services", "Plumbing Services"',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      description: 'e.g., "electrical", "plumbing"',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heroHeadline',
      type: 'string',
      title: 'Hero Headline',
      description: 'Main headline at the top of the page'
    },
    {
      name: 'heroSubheadline',
      type: 'text',
      title: 'Hero Subheadline',
      description: 'Supporting text under the headline',
      rows: 3
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessibility'
        }
      ]
    },
    {
      name: 'description',
      type: 'array',
      title: 'Service Description',
      description: 'Main content describing the service',
      of: [{type: 'block'}]
    },
    {
      name: 'features',
      type: 'array',
      title: 'Key Features',
      description: 'Bullet points or features of this service',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'feature',
              type: 'string',
              title: 'Feature'
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 2
            }
          ]
        }
      ]
    },
    {
      name: 'subservices',
      type: 'array',
      title: 'Sub-Services',
      description: 'Related sub-services (e.g., Panel Upgrades, Rewiring)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Sub-Service Name'
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              rows: 3
            },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Emoji',
              description: 'e.g., ⚡, 🔧, 💡'
            },
            {
              name: 'slug',
              type: 'string',
              title: 'URL Path',
              description: 'e.g., "panel-upgrades", "rewiring"'
            }
          ]
        }
      ]
    },
    {
      name: 'faqs',
      type: 'array',
      title: 'FAQs',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question'
            },
            {
              name: 'answer',
              type: 'text',
              title: 'Answer',
              rows: 4
            }
          ]
        }
      ]
    },
    {
      name: 'callToAction',
      type: 'object',
      title: 'Call to Action',
      fields: [
        {
          name: 'headline',
          type: 'string',
          title: 'CTA Headline'
        },
        {
          name: 'buttonText',
          type: 'string',
          title: 'Button Text'
        },
        {
          name: 'phoneNumber',
          type: 'string',
          title: 'Phone Number'
        }
      ]
    },
    {
      name: 'seo',
      type: 'reference',
      title: 'SEO Settings',
      to: [{type: 'seoSettings'}],
      description: 'Link to SEO metadata for this page'
    },
    {
      name: 'displayOrder',
      type: 'number',
      title: 'Display Order',
      description: 'Order to display services (lower numbers first)'
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Show this service on the website',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroHeadline',
      media: 'heroImage'
    }
  }
}
