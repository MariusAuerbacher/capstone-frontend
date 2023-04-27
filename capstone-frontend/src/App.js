import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import MainSlides from "./components/MainSlides";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vision from "./components/Vision";
import Cards from "./components/Cards";
import Messaging from "./components/Messaging";
import Footer from "./components/Footer";
import Country from "./pages/Country";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_USER } from "./redux/actions";
import InstitutionsRegister from "./pages/InstitutionsRegister";
import InstitutionsLogin from "./pages/InstitutionsLogin";
//import { Toaster } from 'react-hot-toast';

function App() {

  const dispatch = useDispatch()

  const getProfile = async () => {
    try {
      const res = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: SET_USER,
        payload: res.data
      })
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <MainSlides />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ilogin" element={<InstitutionsLogin />} />
        <Route path="/iregister" element={<InstitutionsRegister />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <Vision />
      <Cards />
      <Messaging />
      <Footer />
      {/*<Toaster/>*/}
    </>
  );
}

export default App;
