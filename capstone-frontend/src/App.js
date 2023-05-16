import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import MainSlides from "./components/MainSlides";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cards from "./components/Cards";
import Messaging from "./components/Messaging";
import Footer from "./components/Footer";
import Country from "./pages/Country";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_ROLE, SET_USER } from "./redux/actions";
import InstitutionsRegister from "./pages/InstitutionsRegister";
import InstitutionsLogin from "./pages/InstitutionsLogin";
import Beneficiaries from "./pages/Beneficiaries";
import InstitutionBeneficiaries from "./pages/InstitutionBeneficiaries";
import EditBeneficiary from "./pages/EditBeneficiary";
import Payment from "./pages/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
//import { Toaster } from 'react-hot-toast';
import "./css/App.css";
import UserLanding from "./components/UserLanding";
import ResetPassword from "./pages/ResetPassword";
import AddBeneficiary from "./pages/AddBeneficiary";
import Sidebar from "./components/Sidebar";
import PageUnderConstruction from "./pages/PageUnderConstruction";


function App() {
  const dispatch = useDispatch();
    const location = useLocation()
  const getProfile = async () => {
    try {
      const res = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: SET_USER,
        payload: res.data.user,
      });
      dispatch({
        type: SET_ROLE,
        payload: res.data.role,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    window.scrollTo({
      top: 0
    })
  }, [location.pathname])
  /*const getIProfile = async () => {
    try {
      const res = await axios.get("/institutions/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: SET_INSTITUTION,
        payload: res.data
      })
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getIProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/
  return (
    <>
      <Topbar />
     
      <Routes>

        <Route path="/" element={<MainSlides />} />
        <Route path="/test" element={ <UserLanding/>}/>
        <Route path="/test" element={<Messaging />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ilogin" element={<InstitutionsLogin />} />
        <Route path="/iregister" element={<InstitutionsRegister />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/beneficiaries" element={<Beneficiaries />} />
        <Route
          path="/institutionbeneficiaries"
          element={<InstitutionBeneficiaries />}
        />
        <Route path="/edit-beneficiary" element={<EditBeneficiary />} />
        <Route path="/add-beneficiary" element={<AddBeneficiary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/user-logged-in" element={<Sidebar />} />
        <Route path="/page-under-construction" element={<PageUnderConstruction />} />
      </Routes>
      <Cards />
   
      <Footer />
      {/*<Toaster/>*/}
    </>
  );
}

export default App;
