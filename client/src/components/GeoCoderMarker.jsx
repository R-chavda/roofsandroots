import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from "esri-leaflet-geocoder";

let DefaulIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // Explicitly set the icon size (width, height)
  iconAnchor: [12, 41], // Anchor at the bottom center of the icon [half_width, full_height]
  popupAnchor: [1, -34], // A little adjustment for popup position relative to the icon
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaulIcon;

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 19]);

  useEffect(() => {
    ELG.geocode()
      .text(address)
      .run((err, results, response) => {
        if (results?.results?.length > 0) {
          const { lat, lng } = results?.results[0].latlng;
          setPosition([lat, lng]);
          map.flyTo([lat, lng], 6);
        }
      });
  }, [address]);

  return (
    <Marker position={position} icon={DefaulIcon}>
      <Tooltip direction="bottom" offset={[0, 10]} className="address-tooltip">
        {address}
      </Tooltip>
    </Marker>
  );
};

export default GeoCoderMarker;
