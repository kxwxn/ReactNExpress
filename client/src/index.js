import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
