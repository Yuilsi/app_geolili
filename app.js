// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTpPcCd9YCfjQNJbDfoWg_RDHK-p8vzDA",
  authDomain: "geolili.firebaseapp.com",
  projectId: "geolili",
  storageBucket: "geolili.appspot.com",
  messagingSenderId: "788838106797",
  appId: "1:788838106797:web:795112e010c8086b1fa824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();                      //autentication password

const createUserForm= document.getElementById("createUserForm");
const loginForm= document.getElementById("loginForm");

createUserForm.addEventListener ("submit", e =>{
    e.preventDefault();

    const password = createUserForm.password.value;
    const email = createUserForm.email.value;

    createUser(password,email);

//console.log ("user created");
});


loginForm.addEventListener ("submit", e =>{
    e.preventDefault();

    const password = loginForm.password.value;
    const email = loginForm.email.value;

    createUser(password,email);

console.log ("login");
});


async function createUser (email,password){
    try {
        const {user}= await createUserWithEmailAndPassword(auth, email, password);  
    } catch (e) {
       if(e.code === "auth/weak-password"){
        alert("Tu contraseña debe contener al menos 6 caracteres")
       }
       if(e.code === "auth/email-already-in-user"){
        alert("Este correo ya se encuentra en uso")
       }


      console.log(e.code);  
    }
 
    
}

async function login (email,password) {
try {
    await signInWithEmailAndPassword(auth, email, password);
} catch (error) {
    
}
}