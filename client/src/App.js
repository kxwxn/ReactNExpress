// import React from "react";
// import styles from "./App.module.css";
// import { Routes, Route } from "react-router-dom";
// import Photograph from "./pages/Photograph";
// import Se from "./pages/Se";
// import ThreeD from "./pages/ThreeD";
// import Landing from "./pages/Landing";
// import Cart from "./pages/Cart";
// import SignIn from "./components/SignIn";
// import MyPage from "./pages/MyPage";
// import firebaseConfig from "./firebase/firebaseConfig";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import "./index.css";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// initializeApp(firebaseConfig);

// function App() {
//   return (
//     <div className={styles.container}>
//       <Routes>
//         <Route element={<Landing />} path="/" />
//         <Route element={<Photograph />} path="/photograph" />
//         <Route element={<Se />} path="/softwareengineering" />
//         <Route element={<ThreeD />} path="/3d" />
//         <Route element={<Cart />} path="/cart" />
//         <Route element={<SignIn />} path="/signin" />
//         <Route element={<MyPage />} path="/mypage" />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Photograph from "./pages/Photograph";
import Se from "./pages/Se";
import ThreeD from "./pages/ThreeD";
import Landing from "./pages/Landing";
import Cart from "./pages/Cart";
import SignIn from "./components/SignIn";
import MyPage from "./pages/MyPage";
import fireApp from "./firebase/firebaseConfig";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Photograph />} path="/photograph" />
        <Route element={<Se />} path="/softwareengineering" />
        <Route element={<ThreeD />} path="/3d" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<MyPage />} path="/mypage" />
      </Routes>
    </div>
  );
}

export default App;
