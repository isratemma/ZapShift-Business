import React, { useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const defaultPosition = [23.685, 90.3563];

const Coverage = () => {
  const warehouses = useLoaderData();
  const [position, setPosition] = useState(defaultPosition);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWarehouses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return warehouses;

    return warehouses.filter(
      (warehouse) =>
        warehouse.name.toLowerCase().includes(query) ||
        warehouse.address.toLowerCase().includes(query) ||
        warehouse.service_area.toLowerCase().includes(query)
    );
  }, [searchQuery, warehouses]);

  const handleSearch = (event) => {
    event.preventDefault();

    const query = event.target.elements.location.value.trim().toLowerCase();
    setSearchQuery(query);

    const district = warehouses.find((warehouse) =>
      warehouse.service_area.toLowerCase().includes(query)
    );

    if (district) {
      setPosition([district.latitude, district.longitude]);
    } else if (query) {
      alert('No district found with that name.');
    } else {
      setPosition(defaultPosition);
    }
  };

  return (
    <section className="px-6 py-12 md:px-10 lg:px-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
        We are available in 64 districts
      </h2>
      <div className="mt-5">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              name="location"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

      <div className="mt-8 h-125 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-125"
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredWarehouses.map((warehouse, index) => (
            <Marker
              key={index}
              position={[warehouse.latitude, warehouse.longitude]}
            >
              <Popup>
                <strong>{warehouse.name}</strong>
                <br />
                Service Area: {warehouse.service_area}
                <br />
                {warehouse.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
