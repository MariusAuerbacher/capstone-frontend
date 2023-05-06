import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store} from "./redux/store/index";
import { BrowserRouter } from "react-router-dom";
import axios from "axios"
import "leaflet/dist/leaflet.css"
import "./css/Map.css"

axios.defaults.baseURL = process.env.REACT_APP_BE_URL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Provider store={store}>
     
        <App />

    </Provider>
  </BrowserRouter>
);

