
import Messaging from "./Messaging";
import Sidebar from "./Sidebar";
import { Col, Row } from "react-bootstrap";
import "../css/UserLanding.css"


const Profile = () => {
  


  return (
    <>
      {/*<Container>
        <Row>
          <Col xs={12} md={8}>
          </Col>
          <Col xs={12} md={4}>
            <Sidebar />
          </Col>
        </Row>
        <Messaging/>
  </Container>*/}


      <div className="sidebar-container">

            <Sidebar />

        <Messaging/>
      </div>
    </>
  );
};

export default Profile;
