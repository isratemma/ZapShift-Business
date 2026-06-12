import React, { useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import L from 'leaflet';

// Fix default marker icons broken by webpack/vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const defaultPosition = [23.685, 90.3563];

const Coverage = () => {
  const warehouses = useLoaderData();
  const [mapCenter, setMapCenter] = useState(defaultPosition);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWarehouses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return warehouses;
    return warehouses.filter(
      (w) =>
        w.district.toLowerCase().includes(query) ||
        w.city.toLowerCase().includes(query) ||
        w.region.toLowerCase().includes(query) ||
        w.covered_area.some((area) => area.toLowerCase().includes(query))
    );
  }, [searchQuery, warehouses]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.location.value.trim().toLowerCase();
    setSearchQuery(query);

    const match = warehouses.find(
      (w) =>
        w.district.toLowerCase().includes(query) ||
        w.city.toLowerCase().includes(query) ||
        w.covered_area.some((area) => area.toLowerCase().includes(query))
    );

    if (match) {
      setMapCenter([match.latitude, match.longitude]);
    } else if (query) {
      alert('No district found with that name.');
    } else {
      setMapCenter(defaultPosition);
    }
  };

  return (
    <section className="px-6 py-12 md:px-10 lg:px-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl mb-2">
        We are available in 64 districts
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Search any district, city, or area to find coverage near you.
      </p>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <label className="input flex items-center gap-2 flex-1 max-w-sm border border-gray-300 rounded-xl px-4 py-2">
          <svg
            className="h-4 w-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input
            type="search"
            name="location"
            placeholder="Search district or area..."
            className="outline-none bg-transparent w-full text-sm"
          />
        </label>
        <button
          type="submit"
          className="bg-[#CAEB66] hover:bg-[#b5dc2a] text-black font-semibold px-5 py-2 rounded-xl text-sm transition-all duration-200"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" style={{ height: '500px' }}>
        <MapContainer
          center={mapCenter}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredWarehouses.map((w, index) => (
            <Marker key={index} position={[w.latitude, w.longitude]}>
              <Popup>
                <strong>{w.district}</strong>
                <br />
                Region: {w.region}
                <br />
                Areas: {w.covered_area.join(', ')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* District list */}
      <div className="mt-10">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          {filteredWarehouses.length} district{filteredWarehouses.length !== 1 ? 's' : ''} found
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredWarehouses.map((w, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] border border-gray-100 rounded-xl px-4 py-3 text-sm hover:border-[#CAEB66] hover:bg-[#f7fde8] transition-all duration-200 cursor-pointer"
              onClick={() => setMapCenter([w.latitude, w.longitude])}
            >
              <p className="font-semibold text-gray-800">{w.district}</p>
              <p className="text-gray-400 text-xs mt-0.5">{w.region}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
