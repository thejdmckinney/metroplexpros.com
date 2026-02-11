import React, { useState } from 'react'

interface SmartDevice {
  id: string
  name: string
  category: string
  cost: { low: number; high: number }
  monthlyEnergySavings: { low: number; high: number }
  homeValueIncrease: number // percentage
  lifespanYears: number
}

interface SelectedDevice {
  deviceId: string
  quantity: number
}

interface ROIResults {
  totalCost: { low: number; high: number }
  annualEnergySavings: { low: number; high: number }
  homeValueIncrease: { low: number; high: number }
  paybackPeriod: { low: number; high: number } // in months
  fiveYearSavings: { low: number; high: number }
  tenYearSavings: { low: number; high: number }
  roi: { low: number; high: number } // percentage
}

const SMART_DEVICES: SmartDevice[] = [
  // Climate Control
  {
    id: 'smart-thermostat',
    name: 'Smart Thermostat',
    category: 'Climate Control',
    cost: { low: 200, high: 400 },
    monthlyEnergySavings: { low: 15, high: 30 },
    homeValueIncrease: 0.5,
    lifespanYears: 10
  },
  {
    id: 'smart-ceiling-fan',
    name: 'Smart Ceiling Fan',
    category: 'Climate Control',
    cost: { low: 250, high: 450 },
    monthlyEnergySavings: { low: 10, high: 20 },
    homeValueIncrease: 0.3,
    lifespanYears: 15
  },
  
  // Lighting
  {
    id: 'smart-lighting',
    name: 'Smart Lighting System (per room)',
    category: 'Lighting',
    cost: { low: 150, high: 300 },
    monthlyEnergySavings: { low: 8, high: 15 },
    homeValueIncrease: 0.4,
    lifespanYears: 10
  },
  {
    id: 'smart-outdoor-lighting',
    name: 'Smart Outdoor Lighting',
    category: 'Lighting',
    cost: { low: 300, high: 600 },
    monthlyEnergySavings: { low: 5, high: 12 },
    homeValueIncrease: 0.6,
    lifespanYears: 12
  },
  
  // Security
  {
    id: 'smart-doorbell',
    name: 'Smart Video Doorbell',
    category: 'Security',
    cost: { low: 150, high: 300 },
    monthlyEnergySavings: { low: 0, high: 0 },
    homeValueIncrease: 0.4,
    lifespanYears: 7
  },
  {
    id: 'smart-lock',
    name: 'Smart Door Lock',
    category: 'Security',
    cost: { low: 200, high: 400 },
    monthlyEnergySavings: { low: 0, high: 0 },
    homeValueIncrease: 0.5,
    lifespanYears: 8
  },
  {
    id: 'security-cameras',
    name: 'Security Camera System (4 cameras)',
    category: 'Security',
    cost: { low: 800, high: 1500 },
    monthlyEnergySavings: { low: 0, high: 5 },
    homeValueIncrease: 1.0,
    lifespanYears: 10
  },
  
  // Outlets & Switches
  {
    id: 'smart-switches',
    name: 'Smart Switches (per room)',
    category: 'Control',
    cost: { low: 200, high: 350 },
    monthlyEnergySavings: { low: 5, high: 10 },
    homeValueIncrease: 0.2,
    lifespanYears: 15
  },
  {
    id: 'smart-outlets',
    name: 'Smart Outlets (4-pack)',
    category: 'Control',
    cost: { low: 300, high: 500 },
    monthlyEnergySavings: { low: 8, high: 15 },
    homeValueIncrease: 0.3,
    lifespanYears: 12
  },
  
  // Appliances
  {
    id: 'smart-garage-door',
    name: 'Smart Garage Door Opener',
    category: 'Convenience',
    cost: { low: 200, high: 400 },
    monthlyEnergySavings: { low: 0, high: 2 },
    homeValueIncrease: 0.3,
    lifespanYears: 10
  },
  {
    id: 'smart-blinds',
    name: 'Smart Window Blinds (per room)',
    category: 'Climate Control',
    cost: { low: 400, high: 800 },
    monthlyEnergySavings: { low: 10, high: 20 },
    homeValueIncrease: 0.5,
    lifespanYears: 12
  },
  
  // Whole Home
  {
    id: 'home-hub',
    name: 'Smart Home Hub/Controller',
    category: 'System',
    cost: { low: 100, high: 300 },
    monthlyEnergySavings: { low: 0, high: 0 },
    homeValueIncrease: 0.2,
    lifespanYears: 8
  }
]

export default function SmartHomeROICalculator() {
  const [selectedDevices, setSelectedDevices] = useState<SelectedDevice[]>([])
  const [homeValue, setHomeValue] = useState<number>(400000)
  const [electricityRate, setElectricityRate] = useState<number>(0.12) // per kWh
  const [results, setResults] = useState<ROIResults | null>(null)
  const [showResults, setShowResults] = useState(false)

  const categories = Array.from(new Set(SMART_DEVICES.map(d => d.category)))

  const handleDeviceToggle = (deviceId: string) => {
    const existing = selectedDevices.find(d => d.deviceId === deviceId)
    if (existing) {
      setSelectedDevices(selectedDevices.filter(d => d.deviceId !== deviceId))
    } else {
      setSelectedDevices([...selectedDevices, { deviceId, quantity: 1 }])
    }
  }

  const handleQuantityChange = (deviceId: string, quantity: number) => {
    if (quantity <= 0) {
      setSelectedDevices(selectedDevices.filter(d => d.deviceId !== deviceId))
    } else {
      setSelectedDevices(selectedDevices.map(d => 
        d.deviceId === deviceId ? { ...d, quantity } : d
      ))
    }
  }

  const calculateROI = (): ROIResults => {
    let totalCostLow = 0
    let totalCostHigh = 0
    let monthlyEnergySavingsLow = 0
    let monthlyEnergySavingsHigh = 0
    let totalHomeValueIncrease = 0

    selectedDevices.forEach(({ deviceId, quantity }) => {
      const device = SMART_DEVICES.find(d => d.id === deviceId)
      if (device) {
        totalCostLow += device.cost.low * quantity
        totalCostHigh += device.cost.high * quantity
        monthlyEnergySavingsLow += device.monthlyEnergySavings.low * quantity
        monthlyEnergySavingsHigh += device.monthlyEnergySavings.high * quantity
        totalHomeValueIncrease += device.homeValueIncrease * quantity
      }
    })

    const annualEnergySavingsLow = monthlyEnergySavingsLow * 12
    const annualEnergySavingsHigh = monthlyEnergySavingsHigh * 12

    const homeValueIncreaseLow = homeValue * (totalHomeValueIncrease / 100) * 0.8 // Conservative
    const homeValueIncreaseHigh = homeValue * (totalHomeValueIncrease / 100) * 1.2 // Optimistic

    const paybackPeriodLow = annualEnergySavingsHigh > 0 
      ? (totalCostLow / annualEnergySavingsHigh) * 12 
      : 999
    const paybackPeriodHigh = annualEnergySavingsLow > 0 
      ? (totalCostHigh / annualEnergySavingsLow) * 12 
      : 999

    const fiveYearSavingsLow = (annualEnergySavingsLow * 5) + homeValueIncreaseLow - totalCostHigh
    const fiveYearSavingsHigh = (annualEnergySavingsHigh * 5) + homeValueIncreaseHigh - totalCostLow

    const tenYearSavingsLow = (annualEnergySavingsLow * 10) + homeValueIncreaseLow - totalCostHigh
    const tenYearSavingsHigh = (annualEnergySavingsHigh * 10) + homeValueIncreaseHigh - totalCostLow

    const totalBenefitLow = tenYearSavingsLow
    const totalBenefitHigh = tenYearSavingsHigh
    const roiLow = ((totalBenefitLow / totalCostHigh) * 100)
    const roiHigh = ((totalBenefitHigh / totalCostLow) * 100)

    return {
      totalCost: { low: totalCostLow, high: totalCostHigh },
      annualEnergySavings: { low: annualEnergySavingsLow, high: annualEnergySavingsHigh },
      homeValueIncrease: { low: homeValueIncreaseLow, high: homeValueIncreaseHigh },
      paybackPeriod: { low: paybackPeriodLow, high: paybackPeriodHigh },
      fiveYearSavings: { low: fiveYearSavingsLow, high: fiveYearSavingsHigh },
      tenYearSavings: { low: tenYearSavingsLow, high: tenYearSavingsHigh },
      roi: { low: roiLow, high: roiHigh }
    }
  }

  const handleCalculate = () => {
    if (selectedDevices.length === 0) {
      alert('Please select at least one smart device')
      return
    }
    const calculatedResults = calculateROI()
    setResults(calculatedResults)
    setShowResults(true)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div style={{ 
      backgroundColor: '#161b22', 
      padding: '2.5rem', 
      borderRadius: '12px', 
      border: '1px solid #30363d',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '0.5rem', 
        color: '#00f0ff', 
        fontWeight: '700' 
      }}>
        Smart Home ROI Calculator
      </h2>
      <p style={{ color: '#8b949e', marginBottom: '2rem', fontSize: '1.05rem' }}>
        Calculate your return on investment for smart home upgrades
      </p>

      {/* Home Value Input */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ 
          display: 'block', 
          color: '#c9d1d9', 
          marginBottom: '0.75rem', 
          fontWeight: '600',
          fontSize: '1.1rem' 
        }}>
          Your Home Value
        </label>
        <input
          type="number"
          value={homeValue}
          onChange={(e) => setHomeValue(parseInt(e.target.value) || 0)}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '8px',
            color: '#c9d1d9',
            fontSize: '1rem'
          }}
          placeholder="e.g., 400000"
        />
        <p style={{ color: '#8b949e', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Smart home upgrades typically increase home value by 3-5%
        </p>
      </div>

      {/* Device Selection by Category */}
      {categories.map(category => {
        const categoryDevices = SMART_DEVICES.filter(d => d.category === category)
        return (
          <div key={category} style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#00f0ff', 
              fontSize: '1.3rem', 
              marginBottom: '1rem',
              fontWeight: '600' 
            }}>
              {category}
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1rem' 
            }}>
              {categoryDevices.map(device => {
                const selected = selectedDevices.find(d => d.deviceId === device.id)
                return (
                  <div
                    key={device.id}
                    style={{
                      padding: '1rem',
                      backgroundColor: selected ? '#0d4754' : '#21262d',
                      border: selected ? '2px solid #00f0ff' : '1px solid #30363d',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onClick={() => handleDeviceToggle(device.id)}
                  >
                    <div style={{ fontWeight: '600', color: '#c9d1d9', marginBottom: '0.5rem' }}>
                      {device.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#8b949e', marginBottom: '0.5rem' }}>
                      {formatCurrency(device.cost.low)} - {formatCurrency(device.cost.high)}
                    </div>
                    {device.monthlyEnergySavings.high > 0 && (
                      <div style={{ fontSize: '0.85rem', color: '#00f0ff' }}>
                        💡 Saves ${device.monthlyEnergySavings.low}-${device.monthlyEnergySavings.high}/month
                      </div>
                    )}
                    {selected && (
                      <div style={{ 
                        marginTop: '0.75rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        justifyContent: 'center'
                      }}
                      onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => handleQuantityChange(device.id, selected.quantity - 1)}
                          style={{
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#30363d',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#c9d1d9',
                            cursor: 'pointer'
                          }}
                        >
                          −
                        </button>
                        <span style={{ color: '#c9d1d9', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>
                          {selected.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(device.id, selected.quantity + 1)}
                          style={{
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#30363d',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#c9d1d9',
                            cursor: 'pointer'
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        disabled={selectedDevices.length === 0}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: selectedDevices.length === 0 ? '#30363d' : '#00f0ff',
          color: selectedDevices.length === 0 ? '#8b949e' : '#0d1117',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: '700',
          cursor: selectedDevices.length === 0 ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
          marginTop: '1rem'
        }}
      >
        Calculate ROI
      </button>

      {/* Results */}
      {showResults && results && (
        <div style={{ 
          marginTop: '2rem',
          padding: '2rem',
          backgroundColor: '#0d4754',
          border: '2px solid #00f0ff',
          borderRadius: '12px'
        }}>
          <h3 style={{ color: '#00f0ff', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
            Your Smart Home ROI
          </h3>

          {/* Key Metrics Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Total Investment
              </div>
              <div style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '700' }}>
                {formatCurrency(results.totalCost.low)} - {formatCurrency(results.totalCost.high)}
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Annual Energy Savings
              </div>
              <div style={{ color: '#00f0ff', fontSize: '1.5rem', fontWeight: '700' }}>
                {formatCurrency(results.annualEnergySavings.low)} - {formatCurrency(results.annualEnergySavings.high)}
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Home Value Increase
              </div>
              <div style={{ color: '#00f0ff', fontSize: '1.5rem', fontWeight: '700' }}>
                {formatCurrency(results.homeValueIncrease.low)} - {formatCurrency(results.homeValueIncrease.high)}
              </div>
            </div>
          </div>

          {/* Payback Period */}
          {results.paybackPeriod.low < 999 && (
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Payback Period (Energy Savings Only)
              </div>
              <div style={{ color: '#ffffff', fontSize: '2rem', fontWeight: '700' }}>
                {Math.round(results.paybackPeriod.low)} - {Math.round(results.paybackPeriod.high)} months
              </div>
              <div style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Time to recover your investment through energy savings
              </div>
            </div>
          )}

          {/* Long-term Projections */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                5-Year Net Benefit
              </div>
              <div style={{ 
                color: results.fiveYearSavings.low > 0 ? '#00f0ff' : '#ff6b6b', 
                fontSize: '1.5rem', 
                fontWeight: '700' 
              }}>
                {formatCurrency(results.fiveYearSavings.low)} - {formatCurrency(results.fiveYearSavings.high)}
              </div>
            </div>
            
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                10-Year Net Benefit
              </div>
              <div style={{ 
                color: results.tenYearSavings.low > 0 ? '#00f0ff' : '#ff6b6b', 
                fontSize: '1.5rem', 
                fontWeight: '700' 
              }}>
                {formatCurrency(results.tenYearSavings.low)} - {formatCurrency(results.tenYearSavings.high)}
              </div>
            </div>
          </div>

          {/* ROI Percentage */}
          <div style={{ 
            padding: '2rem',
            backgroundColor: 'rgba(0, 240, 255, 0.1)',
            border: '2px solid #00f0ff',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{ color: '#8b949e', fontSize: '1rem', marginBottom: '0.75rem' }}>
              10-Year Return on Investment
            </div>
            <div style={{ color: '#00f0ff', fontSize: '3rem', fontWeight: '700' }}>
              {Math.round(results.roi.low)}% - {Math.round(results.roi.high)}%
            </div>
            <div style={{ color: '#c9d1d9', fontSize: '0.9rem', marginTop: '0.75rem' }}>
              Total value including energy savings + home value increase
            </div>
          </div>

          {/* CTA Button */}
          <button
            style={{
              width: '100%',
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#238636',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => window.location.href = `/contact?service=smart-home&estimate=${results.totalCost.low}-${results.totalCost.high}`}
          >
            Get Started with Smart Home Installation →
          </button>
        </div>
      )}

      {/* Info Box */}
      <div style={{ 
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: 'rgba(0, 240, 255, 0.05)',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        borderRadius: '8px'
      }}>
        <h4 style={{ color: '#00f0ff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
          📊 How We Calculate ROI
        </h4>
        <ul style={{ color: '#8b949e', lineHeight: '1.8', paddingLeft: '1.5rem', margin: 0 }}>
          <li>Energy savings based on average Dallas electricity rates (${electricityRate}/kWh)</li>
          <li>Home value increase based on industry research (National Association of Realtors)</li>
          <li>Conservative estimates account for maintenance and replacement costs</li>
          <li>Calculations include both tangible (energy) and intangible (convenience, security) benefits</li>
        </ul>
      </div>
    </div>
  )
}
