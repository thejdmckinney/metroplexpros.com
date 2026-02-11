import React, { useState } from 'react'

interface CalculatorInputs {
  currentPanel: string
  desiredPanel: string
  homeAge: string
  homeSize: string
  reasons: string[]
  location: string
}

interface ContactInfo {
  name: string
  email: string
  phone: string
  address: string
}

interface CostEstimate {
  low: number
  high: number
  breakdown: {
    baseUpgrade: number
    homeAgeMultiplier: number
    homeSizeMultiplier: number
    locationPremium: number
  }
}

export default function PanelUpgradeCalculator() {
  const [step, setStep] = useState<'calculator' | 'contact' | 'results'>('calculator')
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentPanel: '',
    desiredPanel: '',
    homeAge: '',
    homeSize: '',
    reasons: [],
    location: '',
  })
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [estimate, setEstimate] = useState<CostEstimate | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Calculate cost estimate based on inputs
  const calculateEstimate = (): CostEstimate => {
    // Base costs for different upgrade types
    const baseCosts: { [key: string]: { low: number; high: number } } = {
      '100-150': { low: 2500, high: 4000 },
      '100-200': { low: 3500, high: 5500 },
      '150-200': { low: 3000, high: 4500 },
      '200-400': { low: 4500, high: 7000 },
      '100-400': { low: 5000, high: 8000 },
    }

    const upgradeKey = `${inputs.currentPanel}-${inputs.desiredPanel}`
    const baseCost = baseCosts[upgradeKey] || { low: 3000, high: 6000 }

    // Home age multiplier
    let ageMultiplier = 1.0
    if (inputs.homeAge === 'over-40') {
      ageMultiplier = 1.3 // 30% increase for older homes (more wiring issues)
    } else if (inputs.homeAge === '20-40') {
      ageMultiplier = 1.15 // 15% increase
    } else if (inputs.homeAge === '10-20') {
      ageMultiplier = 1.05 // 5% increase
    }

    // Home size multiplier
    let sizeMultiplier = 1.0
    if (inputs.homeSize === 'over-4000') {
      sizeMultiplier = 1.25 // 25% increase for large homes
    } else if (inputs.homeSize === '3000-4000') {
      sizeMultiplier = 1.15 // 15% increase
    } else if (inputs.homeSize === '2000-3000') {
      sizeMultiplier = 1.1 // 10% increase
    }

    // Location premium (affluent areas)
    let locationPremium = 0
    if (inputs.location === 'highland-park' || inputs.location === 'university-park') {
      locationPremium = 500 // Premium for high-end neighborhoods
    } else if (inputs.location === 'dallas') {
      locationPremium = 200
    }

    // Calculate final estimate
    const low = Math.round(baseCost.low * ageMultiplier * sizeMultiplier + locationPremium)
    const high = Math.round(baseCost.high * ageMultiplier * sizeMultiplier + locationPremium)

    return {
      low,
      high,
      breakdown: {
        baseUpgrade: baseCost.low,
        homeAgeMultiplier: ageMultiplier,
        homeSizeMultiplier: sizeMultiplier,
        locationPremium,
      },
    }
  }

  const handleInputChange = (field: keyof CalculatorInputs, value: string | string[]) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  const handleReasonToggle = (reason: string) => {
    setInputs((prev) => ({
      ...prev,
      reasons: prev.reasons.includes(reason)
        ? prev.reasons.filter((r) => r !== reason)
        : [...prev.reasons, reason],
    }))
  }

  const handleCalculate = () => {
    // Validate inputs
    if (!inputs.currentPanel || !inputs.desiredPanel || !inputs.homeAge || !inputs.homeSize || !inputs.location) {
      setError('Please fill in all fields')
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
      const response = await fetch('/api/leads/calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          address: contactInfo.address,
          calculator_inputs: inputs,
          estimated_cost_low: estimate?.low,
          estimated_cost_high: estimate?.high,
          source: window.location.href,
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

  const reasons = [
    'Adding new appliances',
    'Frequent breaker trips',
    'Installing EV charger',
    'Home addition/renovation',
    'Smart home upgrades',
    'HVAC upgrade',
    'Pool/hot tub installation',
    'Solar panel preparation',
  ]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {step === 'calculator' && (
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
            Calculate Your Panel Upgrade Cost
          </h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Get an instant estimate for your electrical panel upgrade
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Current Panel */}
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Current Panel Size (Amps) *
              </label>
              <select
                value={inputs.currentPanel}
                onChange={(e) => handleInputChange('currentPanel', e.target.value)}
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
                <option value="">Select current panel size</option>
                <option value="100">100 Amps</option>
                <option value="150">150 Amps</option>
                <option value="200">200 Amps</option>
              </select>
            </div>

            {/* Desired Panel */}
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Desired Panel Size (Amps) *
              </label>
              <select
                value={inputs.desiredPanel}
                onChange={(e) => handleInputChange('desiredPanel', e.target.value)}
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
                <option value="">Select desired panel size</option>
                <option value="150">150 Amps</option>
                <option value="200">200 Amps</option>
                <option value="400">400 Amps</option>
              </select>
            </div>

            {/* Home Age */}
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Home Age *
              </label>
              <select
                value={inputs.homeAge}
                onChange={(e) => handleInputChange('homeAge', e.target.value)}
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
                <option value="">Select home age</option>
                <option value="under-10">Less than 10 years</option>
                <option value="10-20">10-20 years</option>
                <option value="20-40">20-40 years</option>
                <option value="over-40">Over 40 years</option>
              </select>
            </div>

            {/* Home Size */}
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Home Size (Square Feet) *
              </label>
              <select
                value={inputs.homeSize}
                onChange={(e) => handleInputChange('homeSize', e.target.value)}
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
                <option value="">Select home size</option>
                <option value="under-1500">Under 1,500 sq ft</option>
                <option value="1500-2000">1,500-2,000 sq ft</option>
                <option value="2000-3000">2,000-3,000 sq ft</option>
                <option value="3000-4000">3,000-4,000 sq ft</option>
                <option value="over-4000">Over 4,000 sq ft</option>
              </select>
            </div>

            {/* Reasons for Upgrade */}
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.75rem', fontWeight: '600' }}>
                Reasons for Upgrade (Select all that apply)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {reasons.map((reason) => (
                  <label
                    key={reason}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      padding: '0.75rem',
                      backgroundColor: inputs.reasons.includes(reason) ? 'rgba(0, 240, 255, 0.1)' : '#0d1117',
                      border: inputs.reasons.includes(reason) ? '1px solid #00f0ff' : '1px solid #30363d',
                      borderRadius: '6px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={inputs.reasons.includes(reason)}
                      onChange={() => handleReasonToggle(reason)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <span style={{ color: inputs.reasons.includes(reason) ? '#00f0ff' : '#c9d1d9', fontSize: '0.95rem' }}>
                      {reason}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label style={{ display: 'block', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: '600' }}>
                Location *
              </label>
              <select
                value={inputs.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
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
                <option value="highland-park">Highland Park</option>
                <option value="university-park">University Park</option>
                <option value="dallas">Dallas</option>
                <option value="richardson">Richardson</option>
                <option value="garland">Garland</option>
                <option value="irving">Irving</option>
                <option value="other">Other DFW Area</option>
              </select>
            </div>

            <button
              onClick={handleCalculate}
              style={{
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
            Your Estimated Cost
          </h2>
          <p style={{ color: '#8b949e', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Enter your contact information to see your detailed estimate
          </p>

          <div
            style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.1))',
              border: '2px solid #00f0ff',
              borderRadius: '12px',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <div style={{ fontSize: '1.2rem', color: '#8b949e', marginBottom: '0.5rem' }}>Estimated Range</div>
            <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00f0ff' }}>
              ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
            </div>
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
                Phone Number
              </label>
              <input
                type="tel"
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
                Service Address
              </label>
              <input
                type="text"
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
              {loading ? 'Submitting...' : 'View My Detailed Estimate'}
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
            We've received your request and will contact you shortly with a detailed estimate.
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
              ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
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
              Schedule Consultation
            </a>
            <a
              href="/blog"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#0d1117',
                color: '#00f0ff',
                border: '1px solid #00f0ff',
                borderRadius: '8px',
                fontWeight: '700',
                textDecoration: 'none',
              }}
            >
              Read Our Blog
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
