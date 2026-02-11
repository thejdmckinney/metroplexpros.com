'use client'

import { useState, FormEvent } from 'react'

interface LeadCaptureModalProps {
  resourceId: string
  resourceName: string
  onClose: () => void
}

export default function LeadCaptureModal({ resourceId, resourceName, onClose }: LeadCaptureModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/leads/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          resource_id: resourceId,
          source: typeof window !== 'undefined' ? window.location.pathname : '/blog'
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>

          {success ? (
            <div className="modal-success">
              <div className="success-icon">✓</div>
              <h2>Check Your Email!</h2>
              <p>We've sent {resourceName} to your inbox.</p>
              <p className="success-note">
                If you don't see it in a few minutes, check your spam folder.
              </p>
            </div>
          ) : (
            <>
              <div className="modal-header">
                <h2>Get Your Free Download</h2>
                <p>{resourceName}</p>
              </div>

              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label htmlFor="download-name">Name *</label>
                  <input
                    id="download-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="download-email">Email *</label>
                  <input
                    id="download-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="error-message">{error}</div>
                )}

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Me the Download'}
                </button>

                <p className="privacy-note">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 12px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          position: relative;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: #8b949e;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #30363d;
          color: #c9d1d9;
        }

        .modal-header {
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #c9d1d9;
          margin: 0 0 0.5rem 0;
        }

        .modal-header p {
          color: #8b949e;
          font-size: 1rem;
          margin: 0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #c9d1d9;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-group input {
          padding: 0.875rem;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 8px;
          color: #c9d1d9;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #00f0ff;
        }

        .form-group input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-button {
          padding: 1rem;
          background: linear-gradient(135deg, #00f0ff, #0080ff);
          color: #0d1117;
          font-weight: 700;
          font-size: 1.05rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 240, 255, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .privacy-note {
          text-align: center;
          color: #8b949e;
          font-size: 0.85rem;
          margin: 0;
        }

        .error-message {
          padding: 0.875rem;
          background: rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 8px;
          color: #fca5a5;
          font-size: 0.95rem;
        }

        .modal-success {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          font-size: 4rem;
          color: #10b981;
          margin-bottom: 1rem;
        }

        .modal-success h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #c9d1d9;
          margin: 0 0 0.75rem 0;
        }

        .modal-success p {
          color: #8b949e;
          font-size: 1.05rem;
          margin: 0 0 0.5rem 0;
        }

        .success-note {
          font-size: 0.9rem !important;
          margin-top: 1rem !important;
        }
      `}</style>
    </>
  )
}
