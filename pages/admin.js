import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('pages')
  const [siteData, setSiteData] = useState({
    pages: {
      home: {
        heroTitle: 'Premier Home Improvement Services in Dallas-Fort Worth',
        heroSubtitle: 'Transform Your Home with Metroplex Pros',
        heroDescription: 'From kitchen remodeling to complete home renovations, we bring your vision to life with exceptional craftsmanship and attention to detail.'
      },
      about: {
        title: 'About Metroplex Pros',
        description: 'Your trusted home improvement partner'
      }
    },
    contact: {
      phone: '682-466-2130',
      email: 'info@metroplexpros.com',
      address: 'Dallas-Fort Worth Area, Texas',
      formspreeEndpoint: 'https://formspree.io/f/mvgdadnq'
    },
    services: [],
    gallery: [],
    serviceAreas: []
  })

  // Simple password authentication (in production, use proper auth)
  const handleLogin = (e) => {
    e.preventDefault()
    // You can change this password to whatever you want
    if (password === 'metroplex2024') {
      setIsAuthenticated(true)
      loadSiteData()
    } else {
      alert('Incorrect password')
    }
  }

  const loadSiteData = async () => {
    try {
      // Load existing data from JSON files or localStorage
      const savedData = localStorage.getItem('metroplexSiteData')
      if (savedData) {
        setSiteData(JSON.parse(savedData))
      }
    } catch (error) {
      console.error('Error loading site data:', error)
    }
  }

  const saveSiteData = () => {
    try {
      localStorage.setItem('metroplexSiteData', JSON.stringify(siteData))
      alert('Changes saved successfully!')
    } catch (error) {
      console.error('Error saving data:', error)
      alert('Error saving changes')
    }
  }

  const exportData = () => {
    const dataStr = JSON.stringify(siteData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'metroplex-site-data.json'
    link.click()
  }

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--color-bg)'
      }}>
        <div style={{
          background: 'var(--color-bg-alt)',
          padding: '2rem',
          borderRadius: '10px',
          border: '1px solid var(--color-border)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '5px',
                  color: 'var(--color-text)',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
                color: 'var(--color-bg)',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
          <p style={{ 
            textAlign: 'center', 
            marginTop: '1rem', 
            fontSize: '0.9rem', 
            color: 'var(--color-text-muted)' 
          }}>
            Default password: metroplex2024
          </p>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--color-bg)',
        paddingTop: '6rem'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <h1 style={{ color: 'var(--color-accent)' }}>Site Administration</h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={saveSiteData}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
                  color: 'var(--color-bg)',
                  border: 'none',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
              <button
                onClick={exportData}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--color-bg-alt)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Export Data
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: 'var(--color-text-muted)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={{ 
            display: 'flex', 
            marginBottom: '2rem',
            borderBottom: '1px solid var(--color-border)'
          }}>
            {[
              { id: 'pages', label: 'Page Content' },
              { id: 'contact', label: 'Contact Info' },
              { id: 'services', label: 'Services' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'areas', label: 'Service Areas' },
              { id: 'images', label: 'Images' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '1rem 1.5rem',
                  background: activeTab === tab.id ? 'var(--color-accent)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--color-bg)' : 'var(--color-text)',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '3px solid var(--color-accent)' : '3px solid transparent',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ 
            background: 'var(--color-bg-alt)', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '1px solid var(--color-border)'
          }}>
            {activeTab === 'pages' && <PageContentEditor siteData={siteData} setSiteData={setSiteData} />}
            {activeTab === 'contact' && <ContactInfoEditor siteData={siteData} setSiteData={setSiteData} />}
            {activeTab === 'services' && <ServicesEditor siteData={siteData} setSiteData={setSiteData} />}
            {activeTab === 'gallery' && <GalleryEditor siteData={siteData} setSiteData={setSiteData} />}
            {activeTab === 'areas' && <ServiceAreasEditor siteData={siteData} setSiteData={setSiteData} />}
            {activeTab === 'images' && <ImageManager />}
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Page Content Editor Component
function PageContentEditor({ siteData, setSiteData }) {
  const updatePageContent = (page, field, value) => {
    setSiteData(prev => ({
      ...prev,
      pages: {
        ...prev.pages,
        [page]: {
          ...prev.pages[page],
          [field]: value
        }
      }
    }))
  }

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Edit Page Content</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Home Page</h3>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Hero Title:
          </label>
          <input
            type="text"
            value={siteData.pages.home.heroTitle}
            onChange={(e) => updatePageContent('home', 'heroTitle', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Hero Subtitle:
          </label>
          <input
            type="text"
            value={siteData.pages.home.heroSubtitle}
            onChange={(e) => updatePageContent('home', 'heroSubtitle', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Hero Description:
          </label>
          <textarea
            value={siteData.pages.home.heroDescription}
            onChange={(e) => updatePageContent('home', 'heroDescription', e.target.value)}
            rows={4}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>
      </div>
    </div>
  )
}

// Contact Info Editor Component
function ContactInfoEditor({ siteData, setSiteData }) {
  const updateContact = (field, value) => {
    setSiteData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }))
  }

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Edit Contact Information</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Phone Number:
          </label>
          <input
            type="tel"
            value={siteData.contact.phone}
            onChange={(e) => updateContact('phone', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Email Address:
          </label>
          <input
            type="email"
            value={siteData.contact.email}
            onChange={(e) => updateContact('email', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Service Address:
          </label>
          <input
            type="text"
            value={siteData.contact.address}
            onChange={(e) => updateContact('address', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Formspree Endpoint:
          </label>
          <input
            type="url"
            value={siteData.contact.formspreeEndpoint}
            onChange={(e) => updateContact('formspreeEndpoint', e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '5px',
              color: 'var(--color-text)',
              fontSize: '1rem'
            }}
          />
        </div>
      </div>
    </div>
  )
}

// Services Editor Component
function ServicesEditor({ siteData, setSiteData }) {
  const addService = () => {
    const newService = {
      id: Date.now(),
      title: 'New Service',
      icon: '🔧',
      description: 'Service description here...',
      features: ['Feature 1', 'Feature 2']
    }
    
    setSiteData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }))
  }

  const updateService = (id, field, value) => {
    setSiteData(prev => ({
      ...prev,
      services: prev.services.map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    }))
  }

  const removeService = (id) => {
    if (confirm('Are you sure you want to remove this service?')) {
      setSiteData(prev => ({
        ...prev,
        services: prev.services.filter(service => service.id !== id)
      }))
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ color: 'var(--color-accent)' }}>Manage Services</h2>
        <button
          onClick={addService}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
            color: 'var(--color-bg)',
            border: 'none',
            borderRadius: '5px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Add Service
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {siteData.services.map(service => (
          <div key={service.id} style={{ 
            background: 'var(--color-bg)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h3 style={{ color: 'var(--color-accent)', margin: 0 }}>{service.title}</h3>
              <button
                onClick={() => removeService(service.id)}
                style={{
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Remove
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Service Title"
                value={service.title}
                onChange={(e) => updateService(service.id, 'title', e.target.value)}
                style={{
                  padding: '0.5rem',
                  background: 'var(--color-bg-alt)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  color: 'var(--color-text)'
                }}
              />
              
              <input
                type="text"
                placeholder="Icon (emoji)"
                value={service.icon}
                onChange={(e) => updateService(service.id, 'icon', e.target.value)}
                style={{
                  padding: '0.5rem',
                  background: 'var(--color-bg-alt)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  color: 'var(--color-text)'
                }}
              />
            </div>
            
            <textarea
              placeholder="Service Description"
              value={service.description}
              onChange={(e) => updateService(service.id, 'description', e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '0.5rem',
                background: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                color: 'var(--color-text)',
                marginTop: '1rem',
                resize: 'vertical'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Gallery Editor Component  
function GalleryEditor({ siteData, setSiteData }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Manage Gallery</h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Gallery management will be implemented here. You'll be able to upload and organize project photos.
      </p>
    </div>
  )
}

// Service Areas Editor Component
function ServiceAreasEditor({ siteData, setSiteData }) {
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Manage Service Areas</h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Service areas management will be implemented here. You'll be able to add/edit cities, zip codes, and descriptions.
      </p>
    </div>
  )
}

// Image Manager Component
function ImageManager() {
  const [images, setImages] = useState([])

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files)
    
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newImage = {
          id: Date.now() + Math.random(),
          name: file.name,
          url: e.target.result,
          size: file.size
        }
        setImages(prev => [...prev, newImage])
      }
      reader.readAsDataURL(file)
    })
  }

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Image Manager</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
            color: 'var(--color-bg)',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Upload Images
        </label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {images.map(image => (
          <div key={image.id} style={{
            background: 'var(--color-bg)',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)'
          }}>
            <img
              src={image.url}
              alt={image.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', wordBreak: 'break-word' }}>
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}