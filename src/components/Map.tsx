import React, { FC } from "react"
import { map } from "../constants/locations"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const Map: FC<map> = ({ cords }) => {
  // if (typeof window !== "undefined") {
  return (
    <MapContainer center={cords} zoom={4} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={cords}>
        <Popup>Designo Office</Popup>
      </Marker>
    </MapContainer>
  )
}
//   return null
// }

export default Map
