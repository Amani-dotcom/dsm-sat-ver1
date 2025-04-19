
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const buildings = [
  { id: 1, name: 'Building A', lat: 25.316, lng: 51.531, co2: 122, energy: 480 },
  { id: 2, name: 'Building B', lat: 25.318, lng: 51.534, co2: 98, energy: 390 }
];

export default function App() {
  return (
    <div>
      <h1>DSM+SAT Pro Dashboard – Phase 1</h1>
      <div className="dashboard">
        <div className="sidebar">
          <h2>Personas</h2>
          {buildings.map((b) => (
            <div key={b.id}>
              <strong>{b.name}</strong><br />
              CO₂: {b.co2} kg<br />
              Energy: {b.energy} kWh
              <hr />
            </div>
          ))}
        </div>
        <div className="map">
          <MapContainer center={[25.317, 51.533]} zoom={16} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {buildings.map((b) => (
              <Marker key={b.id} position={[b.lat, b.lng]}>
                <Popup>
                  <strong>{b.name}</strong><br />
                  CO₂: {b.co2} kg<br />
                  Energy: {b.energy} kWh
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
