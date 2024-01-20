// const firebaseConfig = {
//   apiKey: "AIzaSyBlw9xuKDWr9OySkMbX9WxuN5ZntPEAap0",
//   authDomain: "shokhbari-a4288.firebaseapp.com",
//   projectId: "shokhbari-a4288",
//   storageBucket: "shokhbari-a4288.appspot.com",
//   messagingSenderId: "463865792649",
//   appId: "1:463865792649:web:95e870dcfc95c4a7b25e58",
//   measurementId: "G-PKNEFW3L1Y",
// };

// export default firebaseConfig;

import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBlw9xuKDWr9OySkMbX9WxuN5ZntPEAap0",
  authDomain: "shokhbari-a4288.firebaseapp.com",
  projectId: "shokhbari-a4288",
  storageBucket: "shokhbari-a4288.appspot.com",
  messagingSenderId: "463865792649",
  appId: "1:463865792649:web:95e870dcfc95c4a7b25e58",
  measurementId: "G-PKNEFW3L1Y",
});

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();
export default app;
