export default {
  name: 'serviceArea',
  type: 'document',
  title: 'Service Areas',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Area Name',
      description: 'e.g., "Garland", "Irving", "Richardson"',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heroHeadline',
      type: 'string',
      title: 'Hero Headline',
      description: 'e.g., "Professional Home Services in Garland, TX"'
    },
    {
      name: 'heroSubheadline',
      type: 'text',
      title: 'Hero Subheadline',
      rows: 3
    },
    {
      name: 'areaImage',
      type: 'image',
      title: 'Area Image',
      description: 'Photo representing this area',
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
      name: 'description',
      type: 'array',
      title: 'Area Description',
      description: 'Information about serving this area',
      of: [{type: 'block'}]
    },
    {
      name: 'neighborhoods',
      type: 'array',
      title: 'Neighborhoods',
      description: 'Specific neighborhoods or ZIP codes served',
      of: [{type: 'string'}]
    },
    {
      name: 'localStats',
      type: 'object',
      title: 'Local Statistics',
      fields: [
        {
          name: 'population',
          type: 'string',
          title: 'Population'
        },
        {
          name: 'medianHomeValue',
          type: 'string',
          title: 'Median Home Value'
        },
        {
          name: 'medianHomeAge',
          type: 'string',
          title: 'Median Home Age'
        },
        {
          name: 'customStats',
          type: 'array',
          title: 'Custom Statistics',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Stat Label'
                },
                {
                  name: 'value',
                  type: 'string',
                  title: 'Stat Value'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'servicesOffered',
      type: 'array',
      title: 'Services Offered',
      description: 'Which services are available in this area',
      of: [
        {
          type: 'reference',
          to: [{type: 'servicePage'}]
        }
      ]
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Local Testimonials',
      description: 'Testimonials from customers in this area',
      of: [{type: 'string'}]
    },
    {
      name: 'responseTime',
      type: 'string',
      title: 'Response Time',
      description: 'e.g., "30-minute response time"'
    },
    {
      name: 'emergencyServices',
      type: 'boolean',
      title: '24/7 Emergency Services Available',
      initialValue: true
    },
    {
      name: 'customCTA',
      type: 'object',
      title: 'Custom Call to Action',
      description: 'Optional area-specific CTA',
      fields: [
        {
          name: 'headline',
          type: 'string',
          title: 'CTA Headline'
        },
        {
          name: 'message',
          type: 'text',
          title: 'CTA Message',
          rows: 3
        }
      ]
    },
    {
      name: 'seo',
      type: 'reference',
      title: 'SEO Settings',
      to: [{type: 'seoSettings'}]
    },
    {
      name: 'displayOrder',
      type: 'number',
      title: 'Display Order'
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'heroHeadline',
      media: 'areaImage'
    }
  }
}
