export default {
  name: 'seoSettings',
  type: 'document',
  title: 'SEO Settings',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
      description: 'Internal reference (e.g., "Electrical Services Page", "Garland Area Page")',
      validation: Rule => Rule.required()
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      description: 'SEO title (50-60 characters recommended)',
      validation: Rule => Rule.required().max(60).warning('Should be 50-60 characters')
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      description: 'SEO description (150-160 characters recommended)',
      rows: 3,
      validation: Rule => Rule.required().max(160).warning('Should be 150-160 characters')
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Focus Keywords',
      description: 'Main keywords for this page',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for social media sharing (1200x630px recommended)',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text'
        }
      ]
    },
    {
      name: 'ogTitle',
      type: 'string',
      title: 'Open Graph Title',
      description: 'Social media title (optional, uses Meta Title if empty)'
    },
    {
      name: 'ogDescription',
      type: 'text',
      title: 'Open Graph Description',
      description: 'Social media description (optional, uses Meta Description if empty)',
      rows: 2
    },
    {
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
      description: 'Full URL to prevent duplicate content issues (e.g., https://metroplexpros.com/services/electrical)'
    },
    {
      name: 'noindex',
      type: 'boolean',
      title: 'No Index',
      description: 'Prevent search engines from indexing this page',
      initialValue: false
    },
    {
      name: 'nofollow',
      type: 'boolean',
      title: 'No Follow',
      description: 'Prevent search engines from following links on this page',
      initialValue: false
    },
    {
      name: 'structuredData',
      type: 'object',
      title: 'Structured Data (Schema.org)',
      description: 'JSON-LD structured data for rich snippets',
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Schema Type',
          options: {
            list: [
              {title: 'Local Business', value: 'LocalBusiness'},
              {title: 'Service', value: 'Service'},
              {title: 'Product', value: 'Product'},
              {title: 'Article', value: 'Article'},
              {title: 'FAQ', value: 'FAQPage'}
            ]
          }
        },
        {
          name: 'customSchema',
          type: 'text',
          title: 'Custom JSON-LD',
          description: 'Advanced: Paste custom JSON-LD code',
          rows: 8
        }
      ]
    },
    {
      name: 'pageType',
      type: 'string',
      title: 'Page Type',
      description: 'What type of page is this for?',
      options: {
        list: [
          {title: 'Service Page', value: 'service'},
          {title: 'Service Area Page', value: 'area'},
          {title: 'Pricing Page', value: 'pricing'},
          {title: 'Blog Post', value: 'blog'},
          {title: 'Homepage', value: 'homepage'},
          {title: 'Other', value: 'other'}
        ]
      }
    },
    {
      name: 'lastUpdated',
      type: 'datetime',
      title: 'Last SEO Update',
      description: 'Auto-updated when changes are saved',
      readOnly: true,
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      title: 'pageName',
      subtitle: 'metaTitle',
      pageType: 'pageType'
    },
    prepare({title, subtitle, pageType}) {
      const typeEmoji = {
        service: '🔧',
        area: '📍',
        pricing: '💰',
        blog: '📝',
        homepage: '🏠',
        other: '📄'
      }
      return {
        title: `${typeEmoji[pageType] || '📄'} ${title}`,
        subtitle: subtitle || 'No meta title set'
      }
    }
  }
}
