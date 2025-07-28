import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
if ('_getIconUrl' in L.Icon.Default.prototype) {
  delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
}
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: string;
  className?: string;
  markerTitle?: string;
  popupContent?: string;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  zoom = 15,
  height = '320px',
  className = '',
  markerTitle = 'Pizza da Praça',
  popupContent = 'Pizza da Praça - Matozinhos, MG',
}) => {
  const position: [number, number] = [latitude, longitude];

  // Custom pizza icon
  const pizzaIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="14" fill="#dc2626" stroke="white" stroke-width="2"/>
        <circle cx="12" cy="12" r="2" fill="#fbbf24"/>
        <circle cx="20" cy="14" r="1.5" fill="#10b981"/>
        <circle cx="14" cy="20" r="1.5" fill="#f59e0b"/>
        <circle cx="20" cy="20" r="1" fill="#ef4444"/>
      </svg>
    `),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-soft ${className}`} style={{ height }}>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pizzaIcon} title={markerTitle}>
          <Popup>
            <div className="text-center">
              <strong className="text-pizza-red">{popupContent}</strong>
              <br />
              <span className="text-sm text-gray-600">Clique para ver no Google Maps</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};