import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../css/Map.css"
import { Col, Container, Row } from "react-bootstrap";
const Map = () => {

  return (
    <>
     <Container id="#login" className="d-flex justify-content-center my-5 login-container">
        <Row>
          <Col xs={12} md={12}>
  
    <MapContainer
    className="full-height-map"
    center={[38, 139.69222]}
    zoom={6}
    minZoom={3}
    maxZoom={19}
    maxBounds={[[-85.06, -180], [85.06, 180]]}
    scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://stadiamaps.com/%22%3EStadia Maps</a>, &copy; <a href="https://openmaptiles.org/%22%3EOpenMapTiles</a> &copy; <a href="https://openstreetmap.org%22%3Eopenstreetmap/</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/%7Bz%7D/%7Bx%7D/%7By%7D%7Br%7D.png"
    />
    {/* TODO: Add markers */}
  </MapContainer>
  </Col>
  </Row>
  </Container>
    <hr/>
  </>
  );
};

export default Map;