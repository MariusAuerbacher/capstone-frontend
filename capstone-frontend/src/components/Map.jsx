import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../css/Map.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import icon from "leaflet/dist/images/marker-icon.png";
import  { Icon } from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

//L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  const getBeneficiaries = async () => {
    const res = await axios.get("/beneficiaries");
    setBeneficiaries(res.data)
  };

  useEffect(() => {
    getBeneficiaries();
  }, []);

  return (
    <>
      <Container
        id="#login"
        className="d-flex justify-content-center mb-5 map-container"
      >
        <Row>
          <Col xs={12} md={12}>
            <div id="map">
              <MapContainer
                 center={[20.85, 31.38]}
                 zoom={2}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {beneficiaries.map((beneficiary, index) => {
                 
                  return beneficiary.location.coordinates.length === 2 ? (
                    <Marker

                      key={beneficiary._id}
                      icon={DefaultIcon}
                      position={[
                        beneficiary.location.coordinates[1],
                        beneficiary.location.coordinates[0],
                      ]}
                    >
                      <Popup>{beneficiary.name + ", " + beneficiary.category} </Popup>
                  
                    </Marker>
                  ) : null;
                })}
              </MapContainer>
            </div>
          
          </Col>
       
        </Row>
      </Container>

    </>
  );
};

export default Map;
