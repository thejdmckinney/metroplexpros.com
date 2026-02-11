import React, { useState } from 'react'

interface ProjectSelection {
  category: string
  projects: string[]
}

interface ContactInfo {
  name: string
  email: string
  phone: string
  address: string
}

interface CostEstimate {
  totalLow: number
  totalHigh: number
  projects: Array<{
    name: string
    low: number
    high: number
    unit: string
  }>
}

export default function ElectricalCostEstimator() {
  const [step, setStep] = useState<'selection' | 'contact' | 'results'>('selection')
  const [selectedProjects, setSelectedProjects] = useState<ProjectSelection>({
    category: '',
    projects: [],
  })
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [location, setLocation] = useState('')
  const [urgency, setUrgency] = useState<'standard' | 'urgent' | 'emergency'>('standard')
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [estimate, setEstimate] = useState<CostEstimate | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Project categories and pricing
  const projectCategories = {
    outlets: {
      name: 'Outlets & Switches',
      icon: '🔌',
      projects: {
        'Standard Outlet Installation': { low: 125, high: 200, unit: 'per outlet' },
        'GFCI Outlet Installation': { low: 150, high: 250, unit: 'per outlet' },
        'USB Outlet Installation': { low: 175, high: 275, unit: 'per outlet' },
        'Switch Installation': { low: 100, high: 175, unit: 'per switch' },
        'Dimmer Switch Installation': { low: 150, high: 225, unit: 'per switch' },
        'Smart Switch Installation': { low: 200, high: 350, unit: 'per switch' },
      },
    },
    lighting: {
      name: 'Lighting',
      icon: '💡',
      projects: {
        'Recessed Lighting Installation': { low: 200, high: 350, unit: 'per light' },
        'Ceiling Fan Installation': { low: 150, high: 300, unit: 'per fan' },
        'Chandelier Installation': { low: 200, high: 400, unit: 'per fixture' },
        'Outdoor Lighting Installation': { low: 175, high: 325, unit: 'per light' },
        'Under-Cabinet Lighting': { low: 300, high: 600, unit: 'per kitchen' },
        'Landscape Lighting System': { low: 800, high: 2000, unit: 'per system' },
      },
    },
    circuits: {
      name: 'Circuits & Wiring',
      icon: '⚡',
      projects: {
        'New Circuit Installation': { low: 300, high: 600, unit: 'per circuit' },
        'Dedicated Appliance Circuit': { low: 400, high: 800, unit: 'per circuit' },
        'Whole House Rewiring': { low: 8000, high: 15000, unit: 'per project' },
        'Room Rewiring': { low: 1500, high: 3000, unit: 'per room' },
        'Knob & Tube Removal': { low: 4000, high: 10000, unit: 'per project' },
        'Aluminum Wiring Replacement': { low: 5000, high: 12000, unit: 'per project' },
      },
    },
    appliances: {
      name: 'Appliances & Equipment',
      icon: '🏠',
      projects: {
        'EV Charger Installation (Level 2)': { low: 800, high: 2000, unit: 'per charger' },
        'Hot Tub Wiring': { low: 1000, high: 2500, unit: 'per tub' },
        'Pool Equipment Wiring': { low: 800, high: 2000, unit: 'per project' },
        'Generator Installation': { low: 3000, high: 8000, unit: 'per generator' },
        'Generator Transfer Switch': { low: 1500, high: 3000, unit: 'per switch' },
        'Water Heater Wiring': { low: 300, high: 700, unit: 'per heater' },
      },
    },
    safety: {
      name: 'Safety & Upgrades',
      icon: '🛡️',
      projects: {
        'Smoke Detector Installation': { low: 100, high: 200, unit: 'per detector' },
        'Carbon Monoxide Detector': { low: 100, high: 200, unit: 'per detector' },
        'Surge Protection System': { low: 400, high: 1000, unit: 'per system' },
        'AFCI Breaker Installation': { low: 150, high: 300, unit: 'per breaker' },
        'Electrical Safety Inspection': { low: 200, high: 400, unit: 'per inspection' },
        'Code Compliance Upgrade': { low: 1000, high: 5000, unit: 'per project' },
      },
    },
    smart: {
      name: 'Smart Home',
      icon: '🤖',
      projects: {
        'Smart Thermostat Installation': { low: 200, high: 400, unit: 'per thermostat' },
        'Smart Doorbell Installation': { low: 150, high: 300, unit: 'per doorbell' },
        'Smart Lock Installation': { low: 200, high: 400, unit: 'per lock' },
        'Security Camera Wiring': { low: 250, high: 500, unit: 'per camera' },
        'Home Automation Hub Setup': { low: 500, high: 1500, unit: 'per system' },
        'Whole Home Audio Wiring': { low: 2000, high: 6000, unit: 'per system' },
      },
    },
  }

  const handleProjectToggle = (projectName: string) => {
    setSelectedProjects((prev) => {
      const isSelected = prev.projects.includes(projectName)
      if (isSelected) {
        // Remove project
        const newProjects = prev.projects.filter((p) => p !== projectName)
        const newQuantities = { ...quantities }
        delete newQuantities[projectName]
        setQuantities(newQuantities)
        return { ...prev, projects: newProjects }
      } else {
        // Add project with default quantity of 1
        setQuantities((prev) => ({ ...prev, [projectName]: 1 }))
        return { ...prev, projects: [...prev.projects, projectName] }
      }
    })
  }

  const handleQuantityChange = (projectName: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [projectName]: Math.max(1, quantity) }))
  }

  const calculateEstimate = (): CostEstimate => {
    let totalLow = 0
    let totalHigh = 0
    const projectDetails: Array<{ name: string; low: number; high: number; unit: string }> = []

    // Get selected category data
    const categoryData = projectCategories[selectedProjects.category as keyof typeof projectCategories]
    if (!categoryData) {
      return { totalLow: 0, totalHigh: 0, projects: [] }
    }

    selectedProjects.projects.forEach((projectName) => {
      const projectData = categoryData.projects[projectName as keyof typeof categoryData.projects] as any
      if (projectData) {
        const qty = quantities[projectName] || 1
        const low = projectData.low * qty
        const high = projectData.high * qty

        totalLow += low
        totalHigh += high

        projectDetails.push({
          name: qty > 1 ? `${projectName} (×${qty})` : projectName,
          low,
          high,
          unit: projectData.unit,
        })
      }
    })

    // Apply location premium
    if (location === 'highland-park' || location === 'university-park') {
      totalLow *= 1.15
      totalHigh *= 1.15
    } else if (location === 'dallas') {
      totalLow *= 1.08
      totalHigh *= 1.08
    }

    // Apply urgency multiplier
    if (urgency === 'urgent') {
      totalLow *= 1.25
      totalHigh *= 1.25
    } else if (urgency === 'emergency') {
      totalLow *= 1.5
      totalHigh *= 1.5
    }

    return {
      totalLow: Math.round(totalLow),
      totalHigh: Math.round(totalHigh),
      projects: projectDetails,
    }
  }

  const handleCalculate = () => {
    if (selectedProjects.projects.length === 0) {
      setError('Please select at least one project')
      return
    }
    if (!location) {
      setError('Please select your location')
      return
    }

    const calculatedEstimate = calculateEstimate()
    setEstimate(calculatedEstimate)
    setStep('contact')
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Prepare calculator inputs
      const calculatorInputs = {
        category: selectedProjects.category,
        projects: selectedProjects.projects,
        quantities,
        location,
        urgency,
      }

      const response = await fetch('/api/leads/calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          address: contactInfo.address,
          calculator_inputs: calculatorInputs,
          estimated_cost_low: estimate?.totalLow,
          estimated_cost_high: estimate?.totalHigh,
          source: 'electrical-cost-estimator',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setStep('results')
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {step === 'selection' && (
        <div
          style={{
            backgroundColor: '#161b22',
            padding: '2.5rem',
            borderRadius: '12px',
            border: '1px solid #30363d',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              color: '#00f0ff',
              fontWeight: '700',
            }}
          >
            Electrical Project Cost Estimator
          </h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Select your projects and get an instant cost estimate
          </p>

          {error && (
            <div
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                border: '1px solid rgba(255, 0, 0, 0.3)',
                borderRadius: '6px',
                color: '#ff6b6b',
                marginBottom: '1.5rem',
              }}
            >
              {error}
            </div>
          )}

          {/* Category Selection */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '1rem', fontWeight: '600', fontSize: '1.1rem' }}>
              Select Project Category *
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              {Object.entries(projectCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedProjects({ category: key, projects: [] })
                    setQuantities({})
                  }}
                  style={{
                    padding: '1.5rem 1rem',
                    backgroundColor: selectedProjects.category === key ? 'rgba(0, 240, 255, 0.1)' : '#0d1117',
                    border: selectedProjects.category === key ? '2px solid #00f0ff' : '1px solid #30363d',
                    borderRadius: '8px',
                    color: selectedProjects.category === key ? '#00f0ff' : '#c9d1d9',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{category.icon}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>{category.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Selection */}
          {selectedProjects.category && (
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '1rem', fontWeight: '600', fontSize: '1.1rem' }}>
                Select Projects (check all that apply)
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.entries(
                  projectCategories[selectedProjects.category as keyof typeof projectCategories].projects
                ).map(([projectName, pricing]) => {
                  const isSelected = selectedProjects.projects.includes(projectName)
                  return (
                    <div
                      key={projectName}
                      style={{
                        backgroundColor: isSelected ? 'rgba(0, 240, 255, 0.05)' : '#0d1117',
                        border: isSelected ? '1px solid #00f0ff' : '1px solid #30363d',
                        borderRadius: '8px',
                        padding: '1rem',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer',
                            flex: '1 1 300px',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleProjectToggle(projectName)}
                            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                          />
                          <div>
                            <div style={{ color: isSelected ? '#00f0ff' : '#c9d1d9', fontWeight: '600', marginBottom: '0.25rem' }}>
                              {projectName}
                            </div>
                            <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                              ${pricing.low.toLocaleString()} - ${pricing.high.toLocaleString()} {pricing.unit}
                            </div>
                          </div>
                        </label>

                        {isSelected && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <label style={{ color: '#8b949e', fontSize: '0.9rem' }}>Quantity:</label>
                            <input
                              type="number"
                              min="1"
                              value={quantities[projectName] || 1}
                              onChange={(e) => handleQuantityChange(projectName, parseInt(e.target.value) || 1)}
                              style={{
                                width: '80px',
                                padding: '0.5rem',
                                backgroundColor: '#161b22',
                                border: '1px solid #30363d',
                                borderRadius: '6px',
                                color: '#c9d1d9',
                                fontSize: '1rem',
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Location */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
              Location *
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '6px',
                color: '#c9d1d9',
                fontSize: '1rem',
              }}
            >
              <option value="">Select your location</option>
              <option value="highland-park">Highland Park (+15% premium area)</option>
              <option value="university-park">University Park (+15% premium area)</option>
              <option value="dallas">Dallas (+8%)</option>
              <option value="richardson">Richardson</option>
              <option value="garland">Garland</option>
              <option value="irving">Irving</option>
              <option value="other">Other DFW Area</option>
            </select>
          </div>

          {/* Urgency */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
              Project Timeline
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <button
                onClick={() => setUrgency('standard')}
                style={{
                  padding: '1rem',
                  backgroundColor: urgency === 'standard' ? 'rgba(0, 240, 255, 0.1)' : '#0d1117',
                  border: urgency === 'standard' ? '2px solid #00f0ff' : '1px solid #30363d',
                  borderRadius: '8px',
                  color: urgency === 'standard' ? '#00f0ff' : '#c9d1d9',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Standard</div>
                <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>1-2 weeks</div>
              </button>
              <button
                onClick={() => setUrgency('urgent')}
                style={{
                  padding: '1rem',
                  backgroundColor: urgency === 'urgent' ? 'rgba(255, 165, 0, 0.1)' : '#0d1117',
                  border: urgency === 'urgent' ? '2px solid #FFA500' : '1px solid #30363d',
                  borderRadius: '8px',
                  color: urgency === 'urgent' ? '#FFA500' : '#c9d1d9',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Urgent</div>
                <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>2-3 days (+25%)</div>
              </button>
              <button
                onClick={() => setUrgency('emergency')}
                style={{
                  padding: '1rem',
                  backgroundColor: urgency === 'emergency' ? 'rgba(255, 0, 0, 0.1)' : '#0d1117',
                  border: urgency === 'emergency' ? '2px solid #ff4444' : '1px solid #30363d',
                  borderRadius: '8px',
                  color: urgency === 'emergency' ? '#ff4444' : '#c9d1d9',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Emergency</div>
                <div style={{ fontSize: '0.85rem', color: '#8b949e' }}>Same day (+50%)</div>
              </button>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
              color: '#0d1117',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Calculate My Estimate
          </button>
        </div>
      )}

      {step === 'contact' && estimate && (
        <div
          style={{
            backgroundColor: '#161b22',
            padding: '2.5rem',
            borderRadius: '12px',
            border: '1px solid #30363d',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              color: '#00f0ff',
              fontWeight: '700',
            }}
          >
            Your Project Estimate
          </h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Enter your contact information to receive your detailed quote
          </p>

          <div
            style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.1))',
              border: '2px solid #00f0ff',
              borderRadius: '12px',
              marginBottom: '2rem',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#8b949e', marginBottom: '0.5rem', textAlign: 'center' }}>
              Total Estimated Cost
            </div>
            <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00f0ff', textAlign: 'center' }}>
              ${estimate.totalLow.toLocaleString()} - ${estimate.totalHigh.toLocaleString()}
            </div>

            {/* Project Breakdown */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #30363d' }}>
              <div style={{ fontSize: '1rem', color: '#c9d1d9', marginBottom: '1rem', fontWeight: '600' }}>
                Project Breakdown:
              </div>
              {estimate.projects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    color: '#8b949e',
                    fontSize: '0.95rem',
                  }}
                >
                  <span>{project.name}</span>
                  <span style={{ fontWeight: '600' }}>
                    ${project.low.toLocaleString()} - ${project.high.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {urgency !== 'standard' && (
              <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(255, 165, 0, 0.1)', borderRadius: '6px' }}>
                <div style={{ color: '#FFA500', fontSize: '0.9rem', fontWeight: '600' }}>
                  {urgency === 'urgent' ? '⚡ Urgent Service Fee Applied (+25%)' : '🚨 Emergency Service Fee Applied (+50%)'}
                </div>
              </div>
            )}
          </div>

          {error && (
            <div
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                border: '1px solid rgba(255, 0, 0, 0.3)',
                borderRadius: '6px',
                color: '#ff6b6b',
                marginBottom: '1.5rem',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={contactInfo.name}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, name: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#c9d1d9',
                  fontSize: '1rem',
                }}
                placeholder="John Smith"
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                value={contactInfo.email}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, email: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#c9d1d9',
                  fontSize: '1rem',
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={contactInfo.phone}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, phone: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#c9d1d9',
                  fontSize: '1rem',
                }}
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Service Address *
              </label>
              <input
                type="text"
                required
                value={contactInfo.address}
                onChange={(e) => setContactInfo((prev) => ({ ...prev, address: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#c9d1d9',
                  fontSize: '1rem',
                }}
                placeholder="123 Main St, Dallas, TX 75201"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '1rem',
                background: loading ? '#30363d' : 'linear-gradient(135deg, #00f0ff, #0080ff)',
                color: loading ? '#8b949e' : '#0d1117',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: '1rem',
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => !loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {loading ? 'Submitting...' : 'Get My Detailed Quote'}
            </button>

            <p style={{ color: '#8b949e', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>
      )}

      {step === 'results' && estimate && (
        <div
          style={{
            backgroundColor: '#161b22',
            padding: '2.5rem',
            borderRadius: '12px',
            border: '1px solid #30363d',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#00f0ff',
              fontWeight: '700',
            }}
          >
            Thank You, {contactInfo.name}!
          </h2>
          <p style={{ color: '#c9d1d9', marginBottom: '2rem', fontSize: '1.1rem' }}>
            We've received your project request and will contact you shortly with a detailed quote.
          </p>

          <div
            style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.1))',
              border: '2px solid #00f0ff',
              borderRadius: '12px',
              marginBottom: '2rem',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#8b949e', marginBottom: '0.5rem' }}>Your Estimated Range</div>
            <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00f0ff' }}>
              ${estimate.totalLow.toLocaleString()} - ${estimate.totalHigh.toLocaleString()}
            </div>
            <div style={{ marginTop: '1rem', color: '#8b949e', fontSize: '0.95rem' }}>
              For {selectedProjects.projects.length} project{selectedProjects.projects.length !== 1 ? 's' : ''}
            </div>
          </div>

          <p style={{ color: '#8b949e', fontSize: '1rem', marginBottom: '2rem' }}>
            Check your email ({contactInfo.email}) for a copy of your estimate and next steps.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
                color: '#0d1117',
                borderRadius: '8px',
                fontWeight: '700',
                textDecoration: 'none',
              }}
            >
              Schedule Service
            </a>
            <button
              onClick={() => {
                setStep('selection')
                setSelectedProjects({ category: '', projects: [] })
                setQuantities({})
                setContactInfo({ name: '', email: '', phone: '', address: '' })
                setEstimate(null)
              }}
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#0d1117',
                color: '#00f0ff',
                border: '1px solid #00f0ff',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              New Estimate
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
