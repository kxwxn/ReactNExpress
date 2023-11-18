import React from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Photograph from "./pages/Photograph";
import Se from "./pages/Se";
import ThreeD from "./pages/ThreeD";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Photograph />} path="/photograph" />
        <Route element={<Se />} path="/softwareengineering" />
        <Route element={<ThreeD />} path="/3d" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Landing />} path="/signinup" />
      </Routes>
    </div>
  );
}

export default App;
