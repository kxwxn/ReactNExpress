// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const reponse = await axios.post("http://localhost:4000/api/login", {
//         userEmail,
//         userPassword,
//       });
//       navigate("/mypage");
//     } catch (error) {
//       throw error;
//     }
//   };

//   const getEmail = (e) => {
//     return setUserEmail(e.target.value);
//   };

//   const getPassword = (e) => {
//     return setUserPassword(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="email"
//           type="email"
//           value={userEmail}
//           onChange={getEmail}
//         />
//         <input
//           placeholder="password "
//           type="password"
//           value={userPassword}
//           onChange={getPassword}
//         />
//         <button type="submit">Sign-In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { signInWith, createUserWith } from "../apis/auth";

const SignIn = () => {
  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");
  const [upEmail, setUpEmail] = useState("");
  const [upPassword, setUpPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const signInHandling = async (e) => {
    e.preventDefault();
    await signInWith(inEmail, inPassword);
  };

  const signUpHandling = async (e) => {
    e.preventDefault();
    await createUserWith(upEmail, upPassword);
  };
  return (
    <div className={styles.sign}>
      <form onSubmit={signInHandling}>
        <input
          type="email"
          placeholder="email"
          value={inEmail}
          onChange={(e) => setInEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={inPassword}
          onChange={(e) => setInPassword(e.target.value)}
        />
        <p>
          <button type="submit">SIGN IN</button>
        </p>
      </form>
      <form onSubmit={signUpHandling}>
        <input
          type="email"
          placeholder="email"
          value={upEmail}
          onChange={(e) => setUpEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={upPassword}
          onChange={(e) => setUpPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p>
          <button type="submit">SIGN UP</button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

// input 으로 사용자가 입력한 id, password 를 받아온다
// 그후에 그 데이터를 axios.post 로 서버로 보내준다
// 서버에서 데이터를 검증후 토큰을 발행해준다.
// 그리고 그 토큰을 사용해서
