import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDyKMgaPX3rlfpRhMjtUsqa09aNVNbVGFU",
  authDomain: "party-bec63.firebaseapp.com",
  projectId: "party-bec63",
  storageBucket: "party-bec63.appspot.com",
  messagingSenderId: "300313507906",
  appId: "1:300313507906:web:568c95f2579325ecf715db"
  };


 const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const auth = getAuth();

  const storage = getStorage(app);

  
  export { db, auth, storage}
   