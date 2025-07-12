import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "./GeoCoderMarker";
const Map = ({ address, city, country, style }) => {
  return (
    <MapContainer
      center={[53.35, 18.8]}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
        ...style,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
