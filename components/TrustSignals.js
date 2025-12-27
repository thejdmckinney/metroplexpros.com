import React from 'react'

export default function TrustSignals({ variant = 'default', className = '' }) {
  const badges = [
    {
      icon: '🏆',
      title: 'Licensed & Insured',
      description: 'Fully licensed electricians & plumbers'
    },
    {
      icon: '⚡',
      title: '24/7 Emergency',
      description: 'Available day & night'
    },
    {
      icon: '📅',
      title: 'Same-Day Service',
      description: 'Fast response times'
    },
    {
      icon: '💰',
      title: 'FREE Estimates',
      description: 'No obligation quotes'
    },
    {
      icon: '⭐',
      title: '4.9 Star Rating',
      description: '127+ verified reviews'
    },
    {
      icon: '🏠',
      title: '15+ Years Experience',
      description: 'Expert technicians'
    }
  ]

  // Compact horizontal variant
  if (variant === 'compact') {
    return (
      <div className={`trust-signals-compact ${className}`} style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '1.5rem 1rem',
        background: 'rgba(0, 240, 255, 0.05)',
        borderRadius: '8px',
        border: '1px solid rgba(0, 240, 255, 0.2)'
      }}>
        {badges.slice(0, 4).map((badge, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{fontSize: '1.5rem'}}>{badge.icon}</span>
            <div>
              <div style={{
                fontWeight: 'bold',
                color: '#00f0ff',
                fontSize: '0.9rem',
                lineHeight: '1.2'
              }}>{badge.title}</div>
              <div style={{
                fontSize: '0.75rem',
                color: '#8b949e'
              }}>{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Hero variant - inline badges
  if (variant === 'hero') {
    return (
      <div className={`trust-signals-hero ${className}`} style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '1.5rem 0',
        borderTop: '1px solid #30363d',
        marginTop: '2rem'
      }}>
        {badges.map((badge, index) => (
          <div key={index} style={{textAlign: 'center'}}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.5rem'
            }}>{badge.icon}</div>
            <div style={{
              fontWeight: 'bold',
              color: '#00f0ff',
              fontSize: '0.95rem',
              marginBottom: '0.25rem'
            }}>{badge.title}</div>
            <div style={{
              fontSize: '0.8rem',
              color: '#8b949e'
            }}>{badge.description}</div>
          </div>
        ))}
      </div>
    )
  }

  // Default grid variant
  return (
    <div className={`trust-signals ${className}`} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      {badges.map((badge, index) => (
        <div key={index} style={{
          background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid #30363d',
          textAlign: 'center',
          transition: 'transform 0.3s ease, border-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.borderColor = '#00f0ff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.borderColor = '#30363d'
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem'
          }}>{badge.icon}</div>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#00f0ff',
            marginBottom: '0.5rem'
          }}>{badge.title}</h3>
          <p style={{
            fontSize: '0.9rem',
            color: '#8b949e',
            margin: 0
          }}>{badge.description}</p>
        </div>
      ))}
    </div>
  )
}

// Inline badge component for use in headers/CTAs
export function InlineTrustBadges() {
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '1rem',
      fontSize: '0.9rem'
    }}>
      <span style={{
        padding: '0.5rem 1rem',
        background: 'rgba(0, 240, 255, 0.1)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        borderRadius: '20px',
        color: '#00f0ff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>✓</span> Licensed & Insured
      </span>
      <span style={{
        padding: '0.5rem 1rem',
        background: 'rgba(0, 240, 255, 0.1)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        borderRadius: '20px',
        color: '#00f0ff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>✓</span> 24/7 Emergency
      </span>
      <span style={{
        padding: '0.5rem 1rem',
        background: 'rgba(0, 240, 255, 0.1)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        borderRadius: '20px',
        color: '#00f0ff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>✓</span> FREE Estimates
      </span>
      <span style={{
        padding: '0.5rem 1rem',
        background: 'rgba(0, 240, 255, 0.1)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        borderRadius: '20px',
        color: '#00f0ff',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span>⭐</span> 4.9 Rating
      </span>
    </div>
  )
}
