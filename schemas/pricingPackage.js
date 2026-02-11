export default {
  name: 'pricingPackage',
  type: 'document',
  title: 'Pricing & Packages',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Package Name',
      description: 'e.g., "$99 Plan", "Emergency Service", "Panel Upgrade"',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'packageType',
      type: 'string',
      title: 'Package Type',
      options: {
        list: [
          {title: 'Subscription Plan', value: 'subscription'},
          {title: 'One-Time Service', value: 'one-time'},
          {title: 'Emergency Service', value: 'emergency'},
          {title: 'Service Bundle', value: 'bundle'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      type: 'object',
      title: 'Price',
      fields: [
        {
          name: 'amount',
          type: 'number',
          title: 'Price Amount',
          description: 'Enter number only (e.g., 99 for $99)'
        },
        {
          name: 'currency',
          type: 'string',
          title: 'Currency',
          initialValue: 'USD',
          options: {
            list: ['USD', 'CAD']
          }
        },
        {
          name: 'frequency',
          type: 'string',
          title: 'Billing Frequency',
          options: {
            list: [
              {title: 'One-Time', value: 'one-time'},
              {title: 'Monthly', value: 'monthly'},
              {title: 'Yearly', value: 'yearly'},
              {title: 'Per Hour', value: 'hourly'}
            ]
          }
        },
        {
          name: 'displayPrice',
          type: 'string',
          title: 'Display Price',
          description: 'How to show the price (e.g., "$99/month", "Starting at $150")'
        }
      ]
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'Brief one-liner about this package',
      rows: 2
    },
    {
      name: 'fullDescription',
      type: 'array',
      title: 'Full Description',
      of: [{type: 'block'}]
    },
    {
      name: 'features',
      type: 'array',
      title: 'Included Features',
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
              name: 'included',
              type: 'boolean',
              title: 'Included',
              initialValue: true
            },
            {
              name: 'details',
              type: 'string',
              title: 'Additional Details'
            }
          ]
        }
      ]
    },
    {
      name: 'benefits',
      type: 'array',
      title: 'Key Benefits',
      description: 'Why customers should choose this package',
      of: [{type: 'string'}]
    },
    {
      name: 'servicesIncluded',
      type: 'array',
      title: 'Services Included',
      description: 'Which services are part of this package',
      of: [
        {
          type: 'reference',
          to: [{type: 'servicePage'}]
        }
      ]
    },
    {
      name: 'limitations',
      type: 'array',
      title: 'Limitations or Exclusions',
      description: 'What is NOT included',
      of: [{type: 'string'}]
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      title: 'Featured Package',
      description: 'Highlight this package (e.g., "Most Popular")',
      initialValue: false
    },
    {
      name: 'featuredLabel',
      type: 'string',
      title: 'Featured Label',
      description: 'e.g., "Most Popular", "Best Value"'
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Call to Action Button Text',
      initialValue: 'Get Started'
    },
    {
      name: 'discounts',
      type: 'object',
      title: 'Active Discounts',
      fields: [
        {
          name: 'hasDiscount',
          type: 'boolean',
          title: 'Discount Active'
        },
        {
          name: 'discountAmount',
          type: 'string',
          title: 'Discount Amount',
          description: 'e.g., "$20 off", "10% off"'
        },
        {
          name: 'discountExpiry',
          type: 'date',
          title: 'Discount Expiration Date'
        }
      ]
    },
    {
      name: 'serviceAreas',
      type: 'array',
      title: 'Available In',
      description: 'Which service areas offer this package',
      of: [
        {
          type: 'reference',
          to: [{type: 'serviceArea'}]
        }
      ]
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
      description: 'Show this package on the website',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price.displayPrice',
      featured: 'isFeatured'
    },
    prepare({title, subtitle, featured}) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: subtitle || 'No price set'
      }
    }
  }
}
