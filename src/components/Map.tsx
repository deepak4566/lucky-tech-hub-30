
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [78.430554, 17.484977], // Coordinates for Kukatpally, Hyderabad
      zoom: 15,
    });

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([78.430554, 17.484977])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [token]);

  return (
    <div className="space-y-4">
      {!token && (
        <div className="p-4 bg-orange-100 rounded-lg">
          <p className="text-sm text-orange-800">
            Please enter your Mapbox public token to view the map. You can get one from{' '}
            <a 
              href="https://www.mapbox.com" 
              target="_blank" 
              rel="noreferrer"
              className="underline"
            >
              Mapbox
            </a>
          </p>
          <input
            type="text"
            placeholder="Enter your Mapbox token"
            className="mt-2 w-full p-2 border rounded"
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
      )}
      <div ref={mapContainer} className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg" />
    </div>
  );
};

export default Map;
