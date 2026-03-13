'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Waypoint {
  id: string
  name: string
  type: 'warehouse' | 'stop'
  lat: number
  lng: number
}

interface LeafletMapProps {
  waypoints: Waypoint[]
  routePath: [number, number][]
}

// Custom icon helper
function createCustomIcon(type: 'warehouse' | 'stop') {
  const html =
    type === 'warehouse'
      ? '<div style="background: white; border: 2px solid #3b82f6; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.2);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>'
      : '<div style="background: #ef4444; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></div>'

  return L.divIcon({
    html,
    className: '',
    iconSize: [32, 32],
    popupAnchor: [0, -16],
  })
}

export default function LeafletMap({ waypoints, routePath }: LeafletMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // Initialize map
    map.current = L.map(mapContainer.current).setView([32.39, -87.15], 10)

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current)

    // Draw route line
    if (routePath.length > 0) {
      L.polyline(routePath, {
        color: '#3b82f6',
        weight: 4,
        opacity: 0.8,
        dashArray: '5, 5',
      }).addTo(map.current)
    }

    // Add waypoint markers
    waypoints.forEach((waypoint, index) => {
      const marker = L.marker([waypoint.lat, waypoint.lng], {
        icon: createCustomIcon(waypoint.type),
      }).addTo(map.current!)

      // Add popup with waypoint info
      const popupContent = `
        <div style="font-size: 14px; color: #333;">
          <strong>${waypoint.name}</strong><br/>
          <small>${waypoint.type === 'warehouse' ? 'Warehouse' : 'Stop'} #${index}</small>
        </div>
      `
      marker.bindPopup(popupContent)
    })

    // Fit bounds
    if (routePath.length > 0) {
      const bounds = L.latLngBounds(routePath)
      map.current.fitBounds(bounds, { padding: [50, 50] })
    }

    return () => {
      // Cleanup is not needed here as we want the map to persist
    }
  }, [waypoints, routePath])

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ minHeight: '400px' }}
    />
  )
}
