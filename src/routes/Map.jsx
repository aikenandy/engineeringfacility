import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  ZoomControl,
  ScaleControl,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import knustGeoJson from "./buildingstogeojson.json";
import boundaryGeoJson from "./boundary.json"; // Ensure you have this file in the src directory
import SearchControl from "./SearchControl";
import "./Popup.css";

const { BaseLayer, Overlay } = LayersControl;

const geoJsonStyle = {
  color: "red",
  weight: 2,
  opacity: 5,
  fillOpacity: 0.7,
  fillColor: "pink",
};

const boundaryStyle = {
  color: "black",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.1,
};

const customIcon = new L.Icon({
  iconUrl:
    "https://media.istockphoto.com/id/1182235539/photo/red-map-pointer-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=a5SpK4y2N7LSrNv1RckRKFpcBROSgFqG72oLzCW4WKE=", // Example icon URL
  iconSize: [25, 25],
});

const KNUSTMap = () => {
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.name}</b>`);
      layer.on({
        click: (e) => {
          const popup = e.target.getPopup();
          popup
            .setLatLng(e.latlng)
            .setContent(`<b>${feature.properties.name}</b>`)
            .openOn(e.target._map);
        },
      });
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 right-0 h-16 bg-red-50 flex items-center justify-between px-2 z-10">
        <button
          onClick={handleExit}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Exit
        </button>
      </div>

      <MapContainer
        center={[6.6709880274310045, -1.566423052310049]}
        zoom={18}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <SearchControl setSearchResult={setSearchResult} />
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap" />
          <BaseLayer name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              zoom={22}
            />
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.opentopomap.org/copyright">OpenStreetMap</a> contributors'
              zoom={22}
            />
          </BaseLayer>
          <Overlay name="OpenTopoMap"></Overlay>
          <Overlay name="Esri Satellite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/en-us/home">Esri</a> contributors'
              opacity={1}
              zoom={22}
            />
          </Overlay>
        </LayersControl>
        <GeoJSON
          data={knustGeoJson}
          style={geoJsonStyle}
          onEachFeature={onEachFeature}
        />
        {searchResult && (
          <Marker
            position={[searchResult.lat, searchResult.lng]}
            icon={customIcon}
          >
            <Popup>
              <b>{searchResult.name}</b>
            </Popup>
          </Marker>
        )}
        <GeoJSON data={boundaryGeoJson} style={boundaryStyle} />
        <Marker position={[6.6742, -1.5714]} icon={customIcon}>
          <Popup>
            <b> Main Campus </b>
          </Popup>
        </Marker>
        <ZoomControl position="topright" />
        <ScaleControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default KNUSTMap;
