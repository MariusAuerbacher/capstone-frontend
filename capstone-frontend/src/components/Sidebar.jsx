import { Button, Modal } from "react-bootstrap";
import "../css/Sidebar.css";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [user, setUser] = useState([]);
  //const [users, setAllUsers] = useState([]);
  //const navigate = useNavigate();
  /*const onRohingyaHandler = () => {
    navigate("/country/rohingya"); };
    
    const getAllUsers = async () => {
      const res = await axios.get("/me");
       
      setAllUsers(res.data);
    };
 */
  const getAllBeneficiaries = async () => {
    const res = await axios.get("/beneficiaries/");

    setBeneficiaries(res.data);
  };
  const getUser = async () => {
    const res = await axios.get("/users/");

    setUser(res.data);
  };
  useEffect(() => {
    getAllBeneficiaries();
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  let i = 0;
  return (
    <>
      <div className="d-flex justify-content-end my-4">
        <div className="container-sidebar">
          {user.map((u) => {
            return (
              <h6>
                Welcome back <strong>{u.name}</strong>
              </h6>
            );
          })}

          <hr />
          <h6>Edit Profile</h6>
          <hr />
          <h6>Urgent Appeals</h6>
          <Modal.Dialog>
            {beneficiaries.map((beneficiary) => {
              return (
                <Modal.Body>
                  <p className="d-flex">
                    <img
                      className="sidebar-images mr-3 ml-2"
                      src={beneficiary.image}
                      alt="avatar"
                    />
                    <div>
                      <h6 className="sidebar-name">{beneficiary.name}</h6>
                      <p className="sidebar-title">{beneficiary.category}</p>
                    </div>
                  </p>

                  <Button
                    variant="outline-secondary rounded-pill "
                    className="sidebar-button d-flex ml-5"
                  >
                    <span className="ml-1 sidebar-connect">Donate</span>
                  </Button>
                </Modal.Body>
              );
            })}
          </Modal.Dialog>
          <hr />
          {/*<h6>Recommendations</h6>
      <Modal.Dialog>
      {beneficiaries.map((beneficiary) => {
        return(
            <Modal.Body>
              <p className="d-flex">
                <img
                  className="sidebar-images mr-3 ml-2"
                  src={beneficiary.image}
                  alt="avatar"
                />
                <div>
                  <h6 className="sidebar-name">
                  {beneficiary.name}
                  </h6>
                  <p className="sidebar-title">{beneficiary.category}</p>
                </div>
              </p>

              <Button
                variant="outline-secondary rounded-pill "
                className="sidebar-button d-flex "
              >
                <span className="ml-1 sidebar-connect">Donate</span>
              </Button>
            </Modal.Body>
        )
      })
      }
      </Modal.Dialog>
    <hr/>*/}
          <h6>Ads</h6>
          <p>
            A random Ad will <br /> be shown here
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
