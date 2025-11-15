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
    services: [
      {
        id: 1,
        title: 'Kitchen Remodeling',
        icon: '🍳',
        description: 'Complete kitchen renovations with custom cabinets, countertops, and modern appliances.',
        features: ['Custom cabinet installation', 'Granite & quartz countertops', 'Professional appliance setup', 'Electrical & plumbing work', '1-year warranty']
      },
      {
        id: 2,
        title: 'Bathroom Renovation',
        icon: '🚿',
        description: 'Transform your bathroom with modern fixtures, tiles, and efficient layouts.',
        features: ['Tile installation', 'Modern fixture upgrades', 'Vanity & mirror installation', 'Shower & tub replacement', 'Waterproof guarantee']
      }
    ],
    gallery: [
      {
        id: 1,
        title: 'Modern Kitchen Remodel',
        category: 'Kitchen',
        description: 'Complete kitchen transformation with custom cabinets and granite countertops.',
        image: null,
        beforeImage: null,
        afterImage: null
      }
    ],
    serviceAreas: [
      {
        id: 1,
        city: 'Dallas',
        description: 'Serving Dallas with comprehensive home improvement services including kitchen remodeling, bathroom renovation, electrical, plumbing, and HVAC services.',
        population: '1.3 million',
        highlights: ['Downtown Dallas', 'Oak Cliff', 'East Dallas', 'North Dallas'],
        zipCodes: ['75201', '75202', '75203', '75204', '75205', '75206']
      },
      {
        id: 2,
        city: 'Plano',
        description: 'Premier home improvement contractor in Plano, TX. Specializing in luxury kitchen and bathroom remodels for Plano homeowners.',
        population: '287,000',
        highlights: ['West Plano', 'East Plano', 'Legacy West', 'Willow Bend'],
        zipCodes: ['75023', '75024', '75025', '75074', '75075', '75093']
      }
    ]
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
    link.download = `metroplex-site-data-${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  const importData = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result)
        setSiteData(importedData)
        localStorage.setItem('metroplexSiteData', JSON.stringify(importedData))
        alert('Data imported successfully!')
      } catch (error) {
        alert('Error importing data. Please check the file format.')
        console.error('Import error:', error)
      }
    }
    reader.readAsText(file)
  }

  const resetData = () => {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      localStorage.removeItem('metroplexSiteData')
      window.location.reload()
    }
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
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                💾 Save Changes
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
                📤 Export Data
              </button>
              <label
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--color-bg-alt)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              >
                📥 Import Data
                <input
                  type="file"
                  accept=".json"
                  onChange={importData}
                  style={{ display: 'none' }}
                />
              </label>
              <button
                onClick={resetData}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                🔄 Reset All
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
                🚪 Logout
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
      features: ['Professional installation', 'Quality materials', 'Warranty included']
    }
    
    setSiteData(prev => ({
      ...prev,
      services: [...(prev.services || []), newService]
    }))
  }

  const updateService = (id, field, value) => {
    setSiteData(prev => ({
      ...prev,
      services: (prev.services || []).map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    }))
  }

  const removeService = (id) => {
    if (confirm('Are you sure you want to remove this service?')) {
      setSiteData(prev => ({
        ...prev,
        services: (prev.services || []).filter(service => service.id !== id)
      }))
    }
  }

  const updateFeatures = (id, features) => {
    const featureArray = features.split('\n').map(f => f.trim()).filter(f => f)
    updateService(id, 'features', featureArray)
  }

  const addFeature = (id) => {
    const service = siteData.services.find(s => s.id === id)
    if (service) {
      const newFeatures = [...(service.features || []), 'New feature']
      updateService(id, 'features', newFeatures)
    }
  }

  const removeFeature = (serviceId, featureIndex) => {
    const service = siteData.services.find(s => s.id === serviceId)
    if (service) {
      const newFeatures = service.features.filter((_, index) => index !== featureIndex)
      updateService(serviceId, 'features', newFeatures)
    }
  }

  const updateFeature = (serviceId, featureIndex, newValue) => {
    const service = siteData.services.find(s => s.id === serviceId)
    if (service) {
      const newFeatures = [...service.features]
      newFeatures[featureIndex] = newValue
      updateService(serviceId, 'features', newFeatures)
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
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {(siteData.services || []).map(service => (
          <div key={service.id} style={{ 
            background: 'var(--color-bg)', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Basic Info */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Service Title:
                </label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => updateService(service.id, 'title', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Icon (Emoji):
                </label>
                <input
                  type="text"
                  value={service.icon}
                  onChange={(e) => updateService(service.id, 'icon', e.target.value)}
                  placeholder="🔧 (Use emoji or text)"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Service Description:
                </label>
                <textarea
                  value={service.description}
                  onChange={(e) => updateService(service.id, 'description', e.target.value)}
                  rows={4}
                  placeholder="Describe what this service includes..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              {/* Features */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ fontWeight: '600' }}>Service Features:</label>
                  <button
                    onClick={() => addFeature(service.id)}
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    Add Feature
                  </button>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  {(service.features || []).map((feature, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      gap: '0.5rem', 
                      marginBottom: '0.5rem',
                      alignItems: 'center'
                    }}>
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => updateFeature(service.id, index, e.target.value)}
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          background: 'var(--color-bg-alt)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '4px',
                          color: 'var(--color-text)',
                          fontSize: '0.9rem'
                        }}
                      />
                      <button
                        onClick={() => removeFeature(service.id, index)}
                        style={{
                          background: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          width: '30px',
                          height: '30px',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                
                {/* Preview */}
                <div style={{
                  background: 'var(--color-bg-alt)',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--color-border)'
                }}>
                  <strong style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                    Preview:
                  </strong>
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                    {service.icon} {service.title}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    {service.description}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                    {(service.features || []).map((feature, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {(siteData.services || []).length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: 'var(--color-text-muted)',
          border: '2px dashed var(--color-border)',
          borderRadius: '10px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
          <h3 style={{ marginBottom: '0.5rem' }}>No Services Yet</h3>
          <p>Click "Add Service" to start building your service offerings</p>
        </div>
      )}
      
      <div style={{
        background: 'var(--color-bg)',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        marginTop: '2rem'
      }}>
        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>💡 Tips for Services:</h3>
        <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          <li>Use clear, descriptive titles that customers would search for</li>
          <li>Include specific features that set you apart from competitors</li>
          <li>Mention warranties, guarantees, or certifications in features</li>
          <li>Use emojis in icons to make services visually appealing</li>
        </ul>
      </div>
    </div>
  )
}

// Gallery Editor Component  
function GalleryEditor({ siteData, setSiteData }) {
  const addGalleryItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'New Project',
      description: 'Project description...',
      category: 'Kitchen',
      image: null,
      beforeImage: null,
      afterImage: null
    }
    
    setSiteData(prev => ({
      ...prev,
      gallery: [...(prev.gallery || []), newItem]
    }))
  }

  const updateGalleryItem = (id, field, value) => {
    setSiteData(prev => ({
      ...prev,
      gallery: (prev.gallery || []).map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeGalleryItem = (id) => {
    if (confirm('Are you sure you want to remove this gallery item?')) {
      setSiteData(prev => ({
        ...prev,
        gallery: (prev.gallery || []).filter(item => item.id !== id)
      }))
    }
  }

  const handleImageUpload = (id, field, file) => {
    if (!file) return
    
    const reader = new FileReader()
    reader.onload = (e) => {
      updateGalleryItem(id, field, e.target.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ color: 'var(--color-accent)' }}>Manage Gallery</h2>
        <button
          onClick={addGalleryItem}
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
          Add Gallery Item
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {(siteData.gallery || []).map(item => (
          <div key={item.id} style={{ 
            background: 'var(--color-bg)', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--color-accent)', margin: 0 }}>{item.title}</h3>
              <button
                onClick={() => removeGalleryItem(item.id)}
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
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Project Details */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Project Title:
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateGalleryItem(item.id, 'title', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Category:
                </label>
                <select
                  value={item.category}
                  onChange={(e) => updateGalleryItem(item.id, 'category', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                >
                  <option value="Kitchen">Kitchen Remodeling</option>
                  <option value="Bathroom">Bathroom Renovation</option>
                  <option value="Painting">Painting</option>
                  <option value="Flooring">Flooring</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="HVAC">HVAC</option>
                  <option value="Roofing">Roofing</option>
                </select>
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Description:
                </label>
                <textarea
                  value={item.description}
                  onChange={(e) => updateGalleryItem(item.id, 'description', e.target.value)}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              {/* Images */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Main Project Image:
                </label>
                <div style={{ marginBottom: '1rem' }}>
                  {item.image ? (
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <img
                        src={item.image}
                        alt="Project"
                        style={{
                          width: '200px',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          border: '1px solid var(--color-border)'
                        }}
                      />
                      <button
                        onClick={() => updateGalleryItem(item.id, 'image', null)}
                        style={{
                          position: 'absolute',
                          top: '5px',
                          right: '5px',
                          background: 'rgba(0,0,0,0.7)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '25px',
                          height: '25px',
                          cursor: 'pointer',
                          fontSize: '16px'
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label style={{
                      display: 'block',
                      width: '200px',
                      height: '150px',
                      border: '2px dashed var(--color-border)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-muted)'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📷</div>
                        <div>Click to upload</div>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(item.id, 'image', e.target.files[0])}
                        style={{ display: 'none' }}
                      />
                    </label>
                  )}
                  {!item.image && (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(item.id, 'image', e.target.files[0])}
                      style={{ marginTop: '0.5rem' }}
                    />
                  )}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                      Before Image:
                    </label>
                    {item.beforeImage ? (
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                          src={item.beforeImage}
                          alt="Before"
                          style={{
                            width: '100%',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '6px'
                          }}
                        />
                        <button
                          onClick={() => updateGalleryItem(item.id, 'beforeImage', null)}
                          style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(item.id, 'beforeImage', e.target.files[0])}
                        style={{ width: '100%', fontSize: '0.8rem' }}
                      />
                    )}
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
                      After Image:
                    </label>
                    {item.afterImage ? (
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                          src={item.afterImage}
                          alt="After"
                          style={{
                            width: '100%',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '6px'
                          }}
                        />
                        <button
                          onClick={() => updateGalleryItem(item.id, 'afterImage', null)}
                          style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(item.id, 'afterImage', e.target.files[0])}
                        style={{ width: '100%', fontSize: '0.8rem' }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {(siteData.gallery || []).length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: 'var(--color-text-muted)',
          border: '2px dashed var(--color-border)',
          borderRadius: '10px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
          <h3 style={{ marginBottom: '0.5rem' }}>No Gallery Items Yet</h3>
          <p>Click "Add Gallery Item" to start building your project gallery</p>
        </div>
      )}
    </div>
  )
}

// Service Areas Editor Component
function ServiceAreasEditor({ siteData, setSiteData }) {
  const addServiceArea = () => {
    const newArea = {
      id: Date.now(),
      city: 'New City',
      description: 'Professional home improvement services in this area...',
      population: '100,000',
      highlights: ['Downtown', 'Residential Area'],
      zipCodes: ['75001', '75002']
    }
    
    setSiteData(prev => ({
      ...prev,
      serviceAreas: [...(prev.serviceAreas || []), newArea]
    }))
  }

  const updateServiceArea = (id, field, value) => {
    setSiteData(prev => ({
      ...prev,
      serviceAreas: (prev.serviceAreas || []).map(area => 
        area.id === id ? { ...area, [field]: value } : area
      )
    }))
  }

  const removeServiceArea = (id) => {
    if (confirm('Are you sure you want to remove this service area?')) {
      setSiteData(prev => ({
        ...prev,
        serviceAreas: (prev.serviceAreas || []).filter(area => area.id !== id)
      }))
    }
  }

  const updateHighlights = (id, highlights) => {
    const highlightArray = highlights.split(',').map(h => h.trim()).filter(h => h)
    updateServiceArea(id, 'highlights', highlightArray)
  }

  const updateZipCodes = (id, zipCodes) => {
    const zipArray = zipCodes.split(',').map(z => z.trim()).filter(z => z)
    updateServiceArea(id, 'zipCodes', zipArray)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ color: 'var(--color-accent)' }}>Manage Service Areas</h2>
        <button
          onClick={addServiceArea}
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
          Add Service Area
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {(siteData.serviceAreas || []).map(area => (
          <div key={area.id} style={{ 
            background: 'var(--color-bg)', 
            padding: '2rem', 
            borderRadius: '10px',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--color-accent)', margin: 0 }}>{area.city}, Texas</h3>
              <button
                onClick={() => removeServiceArea(area.id)}
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
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Basic Info */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  City Name:
                </label>
                <input
                  type="text"
                  value={area.city}
                  onChange={(e) => updateServiceArea(area.id, 'city', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Population:
                </label>
                <input
                  type="text"
                  value={area.population}
                  onChange={(e) => updateServiceArea(area.id, 'population', e.target.value)}
                  placeholder="e.g., 200,000"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Service Description:
                </label>
                <textarea
                  value={area.description}
                  onChange={(e) => updateServiceArea(area.id, 'description', e.target.value)}
                  rows={4}
                  placeholder="Describe your services in this area..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              {/* Areas & Zip Codes */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Popular Areas/Neighborhoods:
                </label>
                <input
                  type="text"
                  value={area.highlights?.join(', ') || ''}
                  onChange={(e) => updateHighlights(area.id, e.target.value)}
                  placeholder="Downtown, Residential District, Business Area"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                <small style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '1rem' }}>
                  Separate multiple areas with commas
                </small>
                
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Zip Codes Served:
                </label>
                <input
                  type="text"
                  value={area.zipCodes?.join(', ') || ''}
                  onChange={(e) => updateZipCodes(area.id, e.target.value)}
                  placeholder="75001, 75002, 75003"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}
                />
                <small style={{ color: 'var(--color-text-muted)', display: 'block', marginBottom: '1rem' }}>
                  Separate multiple zip codes with commas
                </small>
                
                {/* Preview Tags */}
                <div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>Preview - Popular Areas:</strong>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '1rem' }}>
                    {(area.highlights || []).map((highlight, idx) => (
                      <span key={idx} style={{
                        background: 'var(--color-accent-20)',
                        color: 'var(--color-accent)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem'
                      }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>Preview - Zip Codes:</strong>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {(area.zipCodes || []).map((zip, idx) => (
                      <span key={idx} style={{
                        background: 'var(--color-accent-20)',
                        color: 'var(--color-accent)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem'
                      }}>
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {(siteData.serviceAreas || []).length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: 'var(--color-text-muted)',
          border: '2px dashed var(--color-border)',
          borderRadius: '10px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏙️</div>
          <h3 style={{ marginBottom: '0.5rem' }}>No Service Areas Yet</h3>
          <p>Click "Add Service Area" to start managing the cities and areas you serve</p>
        </div>
      )}
      
      <div style={{
        background: 'var(--color-bg)',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        marginTop: '2rem'
      }}>
        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>💡 Tips for Service Areas:</h3>
        <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          <li>Use specific neighborhood names in "Popular Areas" to improve local SEO</li>
          <li>Include all zip codes you service for better search visibility</li>
          <li>Write detailed descriptions mentioning local landmarks or areas</li>
          <li>Keep population numbers current for credibility</li>
        </ul>
      </div>
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