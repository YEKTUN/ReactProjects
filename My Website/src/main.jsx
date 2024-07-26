import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./css/Navbar.css";
import "./css/Sidebar.css";
import "./css/Footer.css";
import "./css/Products.css"
import { Provider } from "react-redux";
import {store} from "./Redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Basket.css"
import "./css/Register.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
