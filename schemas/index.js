import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import callToAction from './callToAction'
import servicePage from './servicePage'
import serviceArea from './serviceArea'
import pricingPackage from './pricingPackage'
import seoSettings from './seoSettings'

export const schemaTypes = [
  // Blog schemas
  post, 
  author, 
  category, 
  blockContent, 
  callToAction,
  
  // Content management schemas
  servicePage,
  serviceArea,
  pricingPackage,
  seoSettings
]
