import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ 
  children, 
  title,
  description,
  keywords,
  canonicalUrl,
  openGraph,
  localBusiness = true
}) {
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
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}