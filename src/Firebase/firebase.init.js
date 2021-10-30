import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializeAuthentication = () => {
    initializeApp(firebaseConfig);;
}

export default firebaseInitializeAuthentication