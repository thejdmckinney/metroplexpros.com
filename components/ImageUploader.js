import { useState, useRef } from 'react'

export default function ImageUploader({ 
  currentImage, 
  onImageChange, 
  placeholder = 'Click to upload image',
  width = '100%',
  height = '200px'
}) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = (files) => {
    if (files && files[0]) {
      const file = files[0]
      
      // Check if it's an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image must be smaller than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        onImageChange(e.target.result, file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleRemoveImage = (e) => {
    e.stopPropagation()
    onImageChange(null, null)
  }

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        width,
        height,
        border: isDragging 
          ? '3px dashed var(--color-accent)' 
          : currentImage 
          ? '2px solid var(--color-border)'
          : '2px dashed var(--color-border)',
        borderRadius: '8px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        background: isDragging 
          ? 'rgba(0, 240, 255, 0.1)' 
          : currentImage 
          ? 'transparent'
          : 'var(--color-bg-alt)',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFileSelect(e.target.files)}
        style={{ display: 'none' }}
      />

      {currentImage ? (
        <>
          <img
            src={currentImage}
            alt="Uploaded"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <button
              onClick={handleRemoveImage}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                padding: 0,
                width: '100%',
                height: '100%'
              }}
            >
              ×
            </button>
          </div>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '0.5rem',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            Click to change image
          </div>
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          color: 'var(--color-text-muted)'
        }}>
          {isDragging ? (
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📤</div>
              <div>Drop image here</div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📷</div>
              <div>{placeholder}</div>
              <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                Drag & drop or click to upload
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}