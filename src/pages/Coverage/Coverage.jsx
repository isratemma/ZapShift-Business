import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Coverage = () => {
  const position = [51.505, -0.09];

  return (
    <section className="px-6 py-12 md:px-10 lg:px-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
        We are available in 64 districts
      </h2>

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '420px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
