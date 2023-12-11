import {
  fireApp,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../firebase/firebaseConfig";

const createUserWith = async (upEmail, upPassword) => {
  try {
    await auth.createUserWithEmailAndPassword(upEmail, upPassword);
  } catch (err) {
    console.log("error!:", err);
  }
};

const signInWith = async (inEmail, inPassword) => {
  try {
    await auth.signInWithEmailAndPassword(inEmail, inPassword);
  } catch (err) {
    console.log("error!:", err);
  }
};

export { signInWith, createUserWith };
