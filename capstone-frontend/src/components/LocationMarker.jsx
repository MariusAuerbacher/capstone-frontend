import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

function LocationMarker(props) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      console.log([e.latlng.lng, e.latlng.lat]);
      props.setBeneficiary({
        ...props.beneficiary,
        location: {
          ...props.beneficiary.location,
          coordinates: [e.latlng.lng, e.latlng.lat],
        },
      });
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
