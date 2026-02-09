/**
 * Test Sanity Connection Script
 * 
 * Run this script to verify your Sanity setup is working correctly:
 * node scripts/test-sanity.js
 */

require('dotenv').config({ path: '.env.local' })

async function testSanityConnection() {
  console.log('🔍 Testing Sanity Connection...\n')

  // Check environment variables
  console.log('1️⃣ Checking environment variables:')
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

  if (!projectId || projectId === 'YOUR_PROJECT_ID') {
    console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set or is still the placeholder')
    console.log('   Please update your .env.local file with your actual Sanity project ID')
    return
  } else {
    console.log(`✅ Project ID: ${projectId}`)
  }

  if (!dataset) {
    console.error('❌ NEXT_PUBLIC_SANITY_DATASET is not set')
    console.log('   Please update your .env.local file with your dataset name')
    return
  } else {
    console.log(`✅ Dataset: ${dataset}`)
  }

  // Test Sanity client
  console.log('\n2️⃣ Testing Sanity client connection:')
  try {
    const { client } = require('../lib/sanityClient')
    
    // Simple query to test connection
    const result = await client.fetch('*[_type == "post"][0...1]')
    
    console.log(`✅ Successfully connected to Sanity!`)
    console.log(`   Found ${result.length} post(s)`)
    
    if (result.length > 0) {
      console.log(`   Latest post: "${result[0].title}"`)
    } else {
      console.log('\n💡 No posts found yet. Create your first post in the Sanity Studio!')
    }

    // Test categories
    const categories = await client.fetch('*[_type == "category"]')
    console.log(`   Found ${categories.length} categor${categories.length === 1 ? 'y' : 'ies'}`)

    // Test authors
    const authors = await client.fetch('*[_type == "author"]')
    console.log(`   Found ${authors.length} author${authors.length === 1 ? '' : 's'}`)

    console.log('\n✅ All tests passed! Your Sanity setup is working correctly.')
    console.log('\n📝 Next steps:')
    console.log('   1. Visit https://www.sanity.io/manage to access your Studio')
    console.log('   2. Create an author profile')
    console.log('   3. Create some categories')
    console.log('   4. Write your first blog post')
    console.log('   5. Run "npm run dev" and visit http://localhost:3000/blog')

  } catch (error) {
    console.error('❌ Error connecting to Sanity:')
    console.error(`   ${error.message}`)
    
    if (error.message.includes('401')) {
      console.log('\n💡 Tip: This might be an authentication issue.')
      console.log('   Make sure your project ID and dataset name are correct.')
    } else if (error.message.includes('404')) {
      console.log('\n💡 Tip: Dataset not found.')
      console.log('   Make sure you have created the dataset in your Sanity project.')
    } else {
      console.log('\n💡 Tip: Check your internet connection and Sanity project settings.')
    }
  }
}

testSanityConnection()
