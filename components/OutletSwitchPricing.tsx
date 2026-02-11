import React, { useState } from 'react'

interface OutletSwitchItem {
  key: string
  label: string
  qty: number
}

interface EstimateResult {
  status: 'ok' | 'needs_evaluation'
  message?: string
  total?: number
  range?: { low: number; high: number }
  breakdown?: {
    serviceCall: number
    itemsSubtotal: number
    volumeDiscount: number
    complexityMultiplier: number
    afterHoursMultiplier: number
  }
}

const PRICING = {
  serviceCall: {
    standard: 99,
    afterHoursMultiplier: 1.35
  },

  items: {
    // Standard Replacements
    standardOutletReplace: 45,
    standardSwitchReplace: 55,

    // GFCI / Specialty
    gfciReplace: 85,
    usbOutletReplace: 95,
    weatherproofOutletReplace: 110,

    // Dimmers
    dimmerSwitchReplace: 85,

    // Smart Devices
    smartSwitchInstall: 135,
    smartOutletInstall: 125
  },

  volumeDiscountTiers: [
    { min: 1,  max: 2,  discount: 0.00 },
    { min: 3,  max: 5,  discount: 0.10 },
    { min: 6,  max: 10, discount: 0.18 },
    { min: 11, max: 25, discount: 0.25 },
    { min: 26, max: 999, discount: 0.30 }
  ],

  complexityMultiplier: {
    easy: 1.00,
    typical: 1.15,
    complex: 1.35
  },

  uncertaintyRange: {
    low: 0.08,
    medium: 0.12,
    high: 0.18
  }
}

function getVolumeDiscount(qty: number): number {
  const tier = PRICING.volumeDiscountTiers.find(t => qty >= t.min && qty <= t.max)
  return tier ? tier.discount : 0
}

function estimateProject({
  items,
  complexity = 'typical',
  afterHours = false,
  uncertainty = 'medium',
  flags = {}
}: {
  items: OutletSwitchItem[]
  complexity?: keyof typeof PRICING.complexityMultiplier
  afterHours?: boolean
  uncertainty?: keyof typeof PRICING.uncertaintyRange
  flags?: {
    sparking?: boolean
    warmOutlet?: boolean
    aluminum?: boolean
    notSureWiring?: boolean
  }
}): EstimateResult {

  // Guardrails
  if (flags.sparking || flags.warmOutlet) {
    return {
      status: 'needs_evaluation',
      message: 'Potential safety issue selected. We\'ll schedule a diagnostic visit to quote accurately.'
    }
  }

  if (flags.aluminum || flags.notSureWiring) {
    return {
      status: 'needs_evaluation',
      message: 'Aluminum/unknown wiring selected. On-site evaluation required for safe and code-compliant pricing.'
    }
  }

  const baseServiceCall =
    PRICING.serviceCall.standard *
    (afterHours ? PRICING.serviceCall.afterHoursMultiplier : 1)

  let subtotalItems = 0
  let totalQty = 0

  for (const line of items) {
    const unit = PRICING.items[line.key as keyof typeof PRICING.items] ?? 0
    totalQty += line.qty
    subtotalItems += unit * line.qty
  }

  // Apply volume discount to entire order
  const discount = getVolumeDiscount(totalQty)
  const subtotalWithDiscount = subtotalItems * (1 - discount)

  const multiplier = PRICING.complexityMultiplier[complexity] ?? 1.15

  const total = (baseServiceCall + subtotalWithDiscount) * multiplier

  const rangePct = PRICING.uncertaintyRange[uncertainty] ?? 0.12
  const low = Math.round(total * (1 - rangePct))
  const high = Math.round(total * (1 + rangePct))

  return {
    status: 'ok',
    total: Math.round(total),
    range: { low, high },
    breakdown: {
      serviceCall: baseServiceCall,
      itemsSubtotal: subtotalItems,
      volumeDiscount: discount,
      complexityMultiplier: multiplier,
      afterHoursMultiplier: afterHours ? PRICING.serviceCall.afterHoursMultiplier : 1
    }
  }
}

const ITEM_OPTIONS = [
  { key: 'standardOutletReplace', label: 'Standard Outlet', price: 45 },
  { key: 'standardSwitchReplace', label: 'Standard Switch', price: 55 },
  { key: 'gfciReplace', label: 'GFCI Outlet', price: 85 },
  { key: 'usbOutletReplace', label: 'USB Outlet', price: 95 },
  { key: 'weatherproofOutletReplace', label: 'Weatherproof Outlet', price: 110 },
  { key: 'dimmerSwitchReplace', label: 'Dimmer Switch', price: 85 },
  { key: 'smartSwitchInstall', label: 'Smart Switch', price: 135 },
  { key: 'smartOutletInstall', label: 'Smart Outlet', price: 125 }
]

export default function OutletSwitchPricing() {
  const [items, setItems] = useState<OutletSwitchItem[]>([])
  const [complexity, setComplexity] = useState<keyof typeof PRICING.complexityMultiplier>('typical')
  const [afterHours, setAfterHours] = useState(false)
  const [uncertainty, setUncertainty] = useState<keyof typeof PRICING.uncertaintyRange>('medium')
  const [flags, setFlags] = useState({
    sparking: false,
    warmOutlet: false,
    aluminum: false,
    notSureWiring: false
  })
  const [estimate, setEstimate] = useState<EstimateResult | null>(null)
  const [showEstimate, setShowEstimate] = useState(false)

  const handleAddItem = (key: string) => {
    const existing = items.find(item => item.key === key)
    if (existing) {
      setItems(items.map(item => 
        item.key === key ? { ...item, qty: item.qty + 1 } : item
      ))
    } else {
      const option = ITEM_OPTIONS.find(opt => opt.key === key)
      setItems([...items, { key, label: option?.label || key, qty: 1 }])
    }
  }

  const handleQuantityChange = (key: string, qty: number) => {
    if (qty <= 0) {
      setItems(items.filter(item => item.key !== key))
    } else {
      setItems(items.map(item => 
        item.key === key ? { ...item, qty } : item
      ))
    }
  }

  const handleCalculate = () => {
    const result = estimateProject({
      items,
      complexity,
      afterHours,
      uncertainty,
      flags
    })
    setEstimate(result)
    setShowEstimate(true)
  }

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0)
  const volumeDiscount = getVolumeDiscount(totalQty)

  return (
    <div style={{ 
      backgroundColor: '#161b22', 
      padding: '2.5rem', 
      borderRadius: '12px', 
      border: '1px solid #30363d',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        marginBottom: '0.5rem', 
        color: '#00f0ff', 
        fontWeight: '700' 
      }}>
        Outlet & Switch Pricing Calculator
      </h2>
      <p style={{ color: '#8b949e', marginBottom: '2rem', fontSize: '1.05rem' }}>
        Get volume discounts on bulk outlet/switch replacements
      </p>

      {/* Item Selection */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ 
          display: 'block', 
          color: '#c9d1d9', 
          marginBottom: '1rem', 
          fontWeight: '600',
          fontSize: '1.1rem' 
        }}>
          Select Items to Replace/Install
        </label>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '0.75rem' 
        }}>
          {ITEM_OPTIONS.map(option => (
            <button
              key={option.key}
              onClick={() => handleAddItem(option.key)}
              style={{
                padding: '0.75rem',
                backgroundColor: items.some(i => i.key === option.key) ? '#0d4754' : '#21262d',
                border: items.some(i => i.key === option.key) ? '2px solid #00f0ff' : '1px solid #30363d',
                borderRadius: '8px',
                color: '#c9d1d9',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left'
              }}
            >
              <div style={{ fontWeight: '600' }}>{option.label}</div>
              <div style={{ fontSize: '0.9rem', color: '#8b949e', marginTop: '0.25rem' }}>
                ${option.price} each
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Items with Quantities */}
      {items.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ 
            display: 'block', 
            color: '#c9d1d9', 
            marginBottom: '1rem', 
            fontWeight: '600',
            fontSize: '1.1rem' 
          }}>
            Your Items ({totalQty} total)
            {volumeDiscount > 0 && (
              <span style={{ color: '#00f0ff', marginLeft: '0.5rem', fontSize: '0.95rem' }}>
                {(volumeDiscount * 100).toFixed(0)}% volume discount applied!
              </span>
            )}
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {items.map(item => (
              <div key={item.key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#21262d',
                border: '1px solid #30363d',
                borderRadius: '8px'
              }}>
                <div style={{ flex: 1, color: '#c9d1d9', fontWeight: '600' }}>
                  {item.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => handleQuantityChange(item.key, item.qty - 1)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#30363d',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#c9d1d9',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      lineHeight: '1'
                    }}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleQuantityChange(item.key, parseInt(e.target.value) || 0)}
                    style={{
                      width: '60px',
                      padding: '0.5rem',
                      backgroundColor: '#0d1117',
                      border: '1px solid #30363d',
                      borderRadius: '4px',
                      color: '#c9d1d9',
                      textAlign: 'center',
                      fontSize: '1rem'
                    }}
                  />
                  <button
                    onClick={() => handleQuantityChange(item.key, item.qty + 1)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#30363d',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#c9d1d9',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      lineHeight: '1'
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.key, 0)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: 'rgba(255, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 0, 0, 0.3)',
                      borderRadius: '4px',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      marginLeft: '0.5rem'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Complexity */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ 
          display: 'block', 
          color: '#c9d1d9', 
          marginBottom: '1rem', 
          fontWeight: '600',
          fontSize: '1.1rem' 
        }}>
          Job Complexity
        </label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {(['easy', 'typical', 'complex'] as const).map(level => (
            <button
              key={level}
              onClick={() => setComplexity(level)}
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: complexity === level ? '#0d4754' : '#21262d',
                border: complexity === level ? '2px solid #00f0ff' : '1px solid #30363d',
                borderRadius: '8px',
                color: '#c9d1d9',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontWeight: '600', textTransform: 'capitalize' }}>{level}</div>
              <div style={{ fontSize: '0.85rem', color: '#8b949e', marginTop: '0.25rem' }}>
                {level === 'easy' && 'Easy access, no issues'}
                {level === 'typical' && 'Normal installation (+15%)'}
                {level === 'complex' && 'Difficult access (+35%)'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* After Hours */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '0.5rem',
          color: '#c9d1d9',
          cursor: 'pointer'
        }}>
          <input
            type="checkbox"
            checked={afterHours}
            onChange={(e) => setAfterHours(e.target.checked)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <span style={{ fontWeight: '600' }}>After Hours Service</span>
          <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>(+35% service call)</span>
        </label>
      </div>

      {/* Safety Flags */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ 
          display: 'block', 
          color: '#c9d1d9', 
          marginBottom: '1rem', 
          fontWeight: '600',
          fontSize: '1.1rem' 
        }}>
          Safety Concerns (requires evaluation)
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { key: 'sparking', label: 'Sparking outlets/switches' },
            { key: 'warmOutlet', label: 'Warm outlets to touch' },
            { key: 'aluminum', label: 'Aluminum wiring' },
            { key: 'notSureWiring', label: 'Not sure about wiring type' }
          ].map(flag => (
            <label key={flag.key} style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '0.5rem',
              color: '#c9d1d9',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={flags[flag.key as keyof typeof flags]}
                onChange={(e) => setFlags({ ...flags, [flag.key]: e.target.checked })}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span>{flag.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={handleCalculate}
        disabled={items.length === 0}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: items.length === 0 ? '#30363d' : '#00f0ff',
          color: items.length === 0 ? '#8b949e' : '#0d1117',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: '700',
          cursor: items.length === 0 ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s'
        }}
      >
        Calculate Estimate
      </button>

      {/* Estimate Results */}
      {showEstimate && estimate && (
        <div style={{ 
          marginTop: '2rem',
          padding: '2rem',
          backgroundColor: estimate.status === 'ok' ? '#0d4754' : 'rgba(255, 193, 7, 0.1)',
          border: estimate.status === 'ok' ? '2px solid #00f0ff' : '2px solid rgba(255, 193, 7, 0.5)',
          borderRadius: '12px'
        }}>
          {estimate.status === 'needs_evaluation' ? (
            <div>
              <h3 style={{ color: '#ffc107', fontSize: '1.5rem', marginBottom: '1rem' }}>
                ⚠️ Evaluation Required
              </h3>
              <p style={{ color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.6' }}>
                {estimate.message}
              </p>
            </div>
          ) : (
            <div>
              <h3 style={{ color: '#00f0ff', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Your Estimate
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700', 
                color: '#00f0ff',
                marginBottom: '1rem' 
              }}>
                ${estimate.range!.low.toLocaleString()} - ${estimate.range!.high.toLocaleString()}
              </div>
              
              {estimate.breakdown && (
                <div style={{ 
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px'
                }}>
                  <h4 style={{ color: '#c9d1d9', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    Breakdown
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b949e' }}>
                      <span>Service Call:</span>
                      <span>${estimate.breakdown.serviceCall.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b949e' }}>
                      <span>Items Subtotal:</span>
                      <span>${estimate.breakdown.itemsSubtotal.toFixed(2)}</span>
                    </div>
                    {estimate.breakdown.volumeDiscount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00f0ff' }}>
                        <span>Volume Discount:</span>
                        <span>-{(estimate.breakdown.volumeDiscount * 100).toFixed(0)}%</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b949e' }}>
                      <span>Complexity Multiplier:</span>
                      <span>×{estimate.breakdown.complexityMultiplier.toFixed(2)}</span>
                    </div>
                    {estimate.breakdown.afterHoursMultiplier > 1 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b949e' }}>
                        <span>After Hours:</span>
                        <span>×{estimate.breakdown.afterHoursMultiplier.toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div style={{ 
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: '#8b949e'
              }}>
                <strong style={{ color: '#c9d1d9' }}>Volume Discount Tiers:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li>3-5 items: 10% off</li>
                  <li>6-10 items: 18% off</li>
                  <li>11-25 items: 25% off</li>
                  <li>26+ items: 30% off</li>
                </ul>
              </div>

              <button
                style={{
                  width: '100%',
                  marginTop: '1.5rem',
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
                onClick={() => window.location.href = `/contact?service=outlet-switch&estimate=${estimate.range!.low}-${estimate.range!.high}`}
              >
                Schedule This Work →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Helpful Info */}
      <div style={{ 
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: 'rgba(0, 240, 255, 0.05)',
        border: '1px solid rgba(0, 240, 255, 0.2)',
        borderRadius: '8px'
      }}>
        <h4 style={{ color: '#00f0ff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
          💡 Money-Saving Tips
        </h4>
        <ul style={{ color: '#8b949e', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
          <li>Bundle multiple replacements to unlock volume discounts (up to 30% off!)</li>
          <li>Standard hours (M-F 8am-5pm) save 35% vs after-hours</li>
          <li>Whole-home replacements often qualify for the highest discount tier</li>
          <li>Combine outlet/switch upgrades with other electrical work for better rates</li>
        </ul>
      </div>
    </div>
  )
}
