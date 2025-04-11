"use client";

import React, { useEffect, useState } from "react";
// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

const LocationMarker = (props) => {
  const { location } = props
  // MAP CONTEXT
  const map = useMapEvents({})
  // STATE POSITION
  const [position, setPosition] = useState({
    lat: location.lat,
    lng: location.lng
  })

  useEffect(() => {
    setPosition({
      lat: location.lat,
      lng: location.lng
    })
    map.flyTo([location.lat, location.lng])
  }, [location.lat, location.lng, map])

  return position === null ? null : (
    <Marker position={position}>
      <Popup>User is here!</Popup>
    </Marker>
  )
}

const Map = (props) => {
  const { latitude, longitude } = props

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={50}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: 200,
        border: 0
      }}
      className="!rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        location={{
          lat: latitude,
          lng: longitude
        }}
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default React.memo(Map)