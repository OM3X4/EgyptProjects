/* eslint-disable */
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// const position = [30.0444, 31.2357]; // Example: Cairo, Egypt

function MapComponent({ position = [30.0444, 31.2357]}) {
    return (
        <MapContainer center={position} zoom={16} style={{ height: "400px", width: "100%" }}>
            {/* Satellite Tile Layer (Esri) */}
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
            {/* Marker */}
            <Marker position={position}>
                <Popup>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapComponent;
