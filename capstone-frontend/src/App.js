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

function App() {
  return (
    <>
      <Topbar />
      <MainSlides />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
      <Vision />
      <Cards />
      <Messaging />
      <Footer />
    </>
  );
}

export default App;
