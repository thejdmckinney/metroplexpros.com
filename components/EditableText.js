import { useState } from 'react'

export default function EditableText({ 
  value, 
  onChange, 
  type = 'text', 
  placeholder = 'Click to edit...',
  style = {},
  multiline = false,
  className = ''
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)

  const handleSave = () => {
    onChange(editValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(value)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      handleSave()
    }
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  if (isEditing) {
    return (
      <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
        {multiline ? (
          <textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            autoFocus
            style={{
              ...style,
              width: '100%',
              minHeight: '100px',
              padding: '0.5rem',
              background: 'var(--color-bg)',
              border: '2px solid var(--color-accent)',
              borderRadius: '4px',
              color: 'var(--color-text)',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
        ) : (
          <input
            type={type}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            autoFocus
            style={{
              ...style,
              width: '100%',
              padding: '0.5rem',
              background: 'var(--color-bg)',
              border: '2px solid var(--color-accent)',
              borderRadius: '4px',
              color: 'var(--color-text)',
              fontSize: 'inherit',
              fontFamily: 'inherit'
            }}
          />
        )}
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          right: '0',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 1000
        }}>
          <button
            onClick={handleSave}
            style={{
              padding: '0.25rem 0.5rem',
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              border: 'none',
              borderRadius: '3px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            style={{
              padding: '0.25rem 0.5rem',
              background: 'var(--color-text-muted)',
              color: 'var(--color-bg)',
              border: 'none',
              borderRadius: '3px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={className}
      style={{
        ...style,
        cursor: 'pointer',
        position: 'relative',
        minHeight: multiline ? '100px' : 'auto',
        padding: '0.25rem',
        borderRadius: '4px',
        border: '2px solid transparent',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.border = '2px dashed var(--color-accent)'
        e.target.style.background = 'rgba(0, 240, 255, 0.05)'
      }}
      onMouseLeave={(e) => {
        e.target.style.border = '2px solid transparent'
        e.target.style.background = 'transparent'
      }}
    >
      {value || placeholder}
      <div style={{
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        background: 'var(--color-accent)',
        color: 'var(--color-bg)',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold'
      }}
      className="edit-indicator"
      >
        ✏
      </div>
    </div>
  )
}