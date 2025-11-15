import { useEffect, useRef, useState } from 'react'

export default function ServiceAreaMap({ mapboxToken }) {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  // DFW service area cities with coordinates
  const serviceAreas = [
    { name: 'Dallas', coordinates: [-96.7970, 32.7767], population: '1.3M' },
    { name: 'Plano', coordinates: [-96.6989, 33.0198], population: '287K' },
    { name: 'Frisco', coordinates: [-96.8236, 33.1507], population: '200K' },
    { name: 'McKinney', coordinates: [-96.6153, 33.1972], population: '195K' },
    { name: 'Allen', coordinates: [-96.6706, 33.1031], population: '105K' },
    { name: 'Richardson', coordinates: [-96.7289, 32.9484], population: '120K' },
    { name: 'Fort Worth', coordinates: [-97.3308, 32.7555], population: '918K' },
    { name: 'Arlington', coordinates: [-97.1081, 32.7357], population: '394K' },
    { name: 'Grand Prairie', coordinates: [-96.9978, 32.7460], population: '196K' },
    { name: 'Irving', coordinates: [-96.9489, 32.8140], population: '256K' },
    { name: 'Garland', coordinates: [-96.6389, 32.9126], population: '238K' },
    { name: 'Mesquite', coordinates: [-96.5992, 32.7668], population: '150K' }
  ]

  useEffect(() => {
    if (!mapboxToken) {
      setMapError(true)
      return
    }

    // Load Mapbox GL JS dynamically
    const loadMapbox = async () => {
      try {
        // Load Mapbox GL JS library
        const mapboxgl = await import('mapbox-gl')
        
        // Set access token
        mapboxgl.default.accessToken = mapboxToken

        // Initialize map
        const map = new mapboxgl.default.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/dark-v11',
          center: [-96.7970, 32.7767], // Dallas center
          zoom: 9,
          pitch: 0,
          bearing: 0
        })

        // Add navigation controls
        map.addControl(new mapboxgl.default.NavigationControl(), 'top-right')

        map.on('load', () => {
          setMapLoaded(true)
          
          // Add service area markers
          serviceAreas.forEach((area) => {
            // Create custom marker element
            const markerElement = document.createElement('div')
            markerElement.className = 'service-marker'
            markerElement.innerHTML = `
              <div class="marker-content">
                <div class="marker-icon">🏠</div>
                <div class="marker-label">${area.name}</div>
              </div>
            `

            // Create popup
            const popup = new mapboxgl.default.Popup({ 
              offset: 25,
              closeButton: true,
              closeOnClick: false
            }).setHTML(`
              <div class="map-popup">
                <h3>${area.name}, TX</h3>
                <p>Population: ${area.population}</p>
                <p>✅ Full service area</p>
                <div class="popup-actions">
                  <a href="/contact" class="popup-btn">Get Free Estimate</a>
                </div>
              </div>
            `)

            // Add marker to map
            new mapboxgl.default.Marker(markerElement)
              .setLngLat(area.coordinates)
              .setPopup(popup)
              .addTo(map)
          })

          // Add service area boundary (approximate DFW metroplex)
          map.addSource('service-boundary', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                  [-97.8, 33.3],
                  [-96.3, 33.3],
                  [-96.3, 32.4],
                  [-97.8, 32.4],
                  [-97.8, 33.3]
                ]]
              }
            }
          })

          map.addLayer({
            'id': 'service-boundary-fill',
            'type': 'fill',
            'source': 'service-boundary',
            'paint': {
              'fill-color': '#00f0ff',
              'fill-opacity': 0.1
            }
          })

          map.addLayer({
            'id': 'service-boundary-line',
            'type': 'line',
            'source': 'service-boundary',
            'paint': {
              'line-color': '#00f0ff',
              'line-width': 2,
              'line-opacity': 0.6
            }
          })
        })

        mapRef.current = map

        return () => {
          map.remove()
        }
      } catch (error) {
        console.error('Error loading Mapbox:', error)
        setMapError(true)
      }
    }

    loadMapbox()
  }, [mapboxToken])

  if (mapError || !mapboxToken) {
    return (
      <div className="map-placeholder">
        <div className="placeholder-content">
          <h4>DFW Service Area Map</h4>
          <p>Interactive map showing all cities and zip codes we serve</p>
          <div className="map-icon">🗺️</div>
        </div>
      </div>
    )
  }

  return (
    <div className="interactive-map-container">
      <div 
        ref={mapContainerRef} 
        className="mapbox-map"
        style={{ width: '100%', height: '400px' }}
      />
      {!mapLoaded && (
        <div className="map-loading">
          <div className="loading-spinner"></div>
          <p>Loading interactive map...</p>
        </div>
      )}
    </div>
  )
}