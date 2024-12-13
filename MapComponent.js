// src/MapComponent.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Correct import for Google Maps


const MapComponent = ({ profile }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (profile && profile.location) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: profile.location }, (results, status) => {
        if (status === 'OK') {
          setLocation(results[0].geometry.location);
        } else {
          console.log('Geocode failed:', status);
        }
      });
    }
  }, [profile]);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={location || { lat: 0, lng: 0 }}
        zoom={10}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
