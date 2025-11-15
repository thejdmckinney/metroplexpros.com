import { useState, useEffect } from 'react'
import EditableText from './EditableText'
import ImageUploader from './ImageUploader'

export default function VisualEditor({ enabled = false, onToggle }) {
  const [isEditing, setIsEditing] = useState(enabled)
  const [siteData, setSiteData] = useState({})

  useEffect(() => {
    // Load site data from localStorage
    const savedData = localStorage.getItem('metroplexSiteData')
    if (savedData) {
      setSiteData(JSON.parse(savedData))
    }
  }, [])

  const saveSiteData = () => {
    localStorage.setItem('metroplexSiteData', JSON.stringify(siteData))
    alert('Changes saved!')
  }

  const updateSiteData = (path, value) => {
    const newData = { ...siteData }
    const keys = path.split('.')
    let current = newData
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {}
      current = current[keys[i]]
    }
    
    current[keys[keys.length - 1]] = value
    setSiteData(newData)
  }

  if (!isEditing) {
    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 10000
      }}>
        <button
          onClick={() => {
            setIsEditing(true)
            if (onToggle) onToggle(true)
          }}
          style={{
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
            color: 'var(--color-bg)',
            border: 'none',
            borderRadius: '50px',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 240, 255, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          ✏️ Edit Page
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Editor Toolbar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--color-bg-alt)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h3 style={{ margin: 0, color: 'var(--color-accent)' }}>
            ✏️ Visual Editor Active
          </h3>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Click on any text or image to edit it
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={saveSiteData}
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              border: 'none',
              borderRadius: '5px',
              padding: '0.75rem 1.5rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            💾 Save Changes
          </button>
          
          <button
            onClick={() => {
              setIsEditing(false)
              if (onToggle) onToggle(false)
            }}
            style={{
              background: 'var(--color-text-muted)',
              color: 'var(--color-bg)',
              border: 'none',
              borderRadius: '5px',
              padding: '0.75rem 1.5rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            ❌ Exit Editor
          </button>
        </div>
      </div>

      {/* Editing Styles */}
      <style jsx global>{`
        body.editing {
          padding-top: 100px;
        }
        
        .editable-text:hover .edit-indicator {
          display: flex !important;
        }
        
        .editing-hint {
          position: relative;
        }
        
        .editing-hint::after {
          content: 'Click to edit';
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-accent);
          color: var(--color-bg);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        
        .editing-hint:hover::after {
          opacity: 1;
        }
      `}</style>
    </>
  )
}

// HOC to wrap components with editing capabilities
export function withVisualEditor(WrappedComponent, editableFields = {}) {
  return function EditableComponent(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editableData, setEditableData] = useState({})

    useEffect(() => {
      // Check if visual editor is active
      const editorActive = localStorage.getItem('visualEditorActive') === 'true'
      setIsEditing(editorActive)
      
      // Load editable data
      const savedData = localStorage.getItem('metroplexSiteData')
      if (savedData) {
        setEditableData(JSON.parse(savedData))
      }
    }, [])

    const updateField = (path, value) => {
      const newData = { ...editableData }
      const keys = path.split('.')
      let current = newData
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}
        current = current[keys[i]]
      }
      
      current[keys[keys.length - 1]] = value
      setEditableData(newData)
      localStorage.setItem('metroplexSiteData', JSON.stringify(newData))
    }

    const getFieldValue = (path, defaultValue = '') => {
      const keys = path.split('.')
      let current = editableData
      
      for (const key of keys) {
        if (!current || !current[key]) return defaultValue
        current = current[key]
      }
      
      return current || defaultValue
    }

    // Create enhanced props with editable fields
    const enhancedProps = {
      ...props,
      isEditing,
      editableData,
      updateField,
      getFieldValue
    }

    return <WrappedComponent {...enhancedProps} />
  }
}

// Helper component for editable sections
export function EditableSection({ 
  children, 
  path, 
  defaultValue, 
  type = 'text', 
  multiline = false,
  updateField,
  getFieldValue,
  isEditing = false 
}) {
  if (!isEditing) {
    return children
  }

  const value = getFieldValue(path, defaultValue)
  
  return (
    <EditableText
      value={value}
      onChange={(newValue) => updateField(path, newValue)}
      type={type}
      multiline={multiline}
      className="editable-text editing-hint"
    />
  )
}

// Helper component for editable images
export function EditableImage({ 
  src, 
  alt, 
  path,
  updateField,
  getFieldValue,
  isEditing = false,
  ...imageProps 
}) {
  if (!isEditing) {
    return <img src={src} alt={alt} {...imageProps} />
  }

  const imageSrc = getFieldValue(path, src)
  
  return (
    <ImageUploader
      currentImage={imageSrc}
      onImageChange={(newImage) => updateField(path, newImage)}
      width={imageProps.width || '100%'}
      height={imageProps.height || '200px'}
    />
  )
}