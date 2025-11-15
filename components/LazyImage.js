import { useState, useRef, useEffect } from 'react'

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholder = '/placeholder.svg' 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            onLoad={handleLoad}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.3s ease',
              opacity: isLoaded ? 1 : 0
            }}
          />
          {!isLoaded && (
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'var(--color-bg-alt)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)'
              }}
            >
              Loading...
            </div>
          )}
        </>
      )}
      
      {!isInView && (
        <div 
          style={{
            width: '100%',
            height: '100%',
            background: 'var(--color-bg-alt)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-muted)'
          }}
        >
          <div className="loading-placeholder">
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}

    </div>
  )
}