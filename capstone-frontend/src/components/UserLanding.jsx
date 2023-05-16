
import Messaging from "./Messaging";
import Sidebar from "./Sidebar";
import "../css/UserLanding.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Profile = () => {
  const role = useSelector((state)=>state.userReducer.role)
  const navigate = useNavigate()
  useEffect(()=>{
    if(role !== "DONATOR"){
      navigate("/login", {replace: true})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

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
