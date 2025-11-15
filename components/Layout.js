import { useState, useEffect } from 'react'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'
import VisualEditor from './VisualEditor'

export default function Layout({ 
  children, 
  title,
  description,
  keywords,
  canonicalUrl,
  openGraph,
  localBusiness = true
}) {
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Check if visual editor should be active
    const editorActive = localStorage.getItem('visualEditorActive') === 'true'
    setIsEditing(editorActive)
    
    // Add editing class to body
    if (editorActive) {
      document.body.classList.add('editing')
    } else {
      document.body.classList.remove('editing')
    }
  }, [isEditing])

  const handleEditorToggle = (active) => {
    setIsEditing(active)
    localStorage.setItem('visualEditorActive', active.toString())
    
    if (active) {
      document.body.classList.add('editing')
    } else {
      document.body.classList.remove('editing')
    }
  }

  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        openGraph={openGraph}
        localBusiness={localBusiness}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <VisualEditor enabled={isEditing} onToggle={handleEditorToggle} />
      </div>
    </>
  )
}