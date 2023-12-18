// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0iIbZcSjjzM_uCj0HZeR2i1yCSOnT5vg",
  authDomain: "auth-945da.firebaseapp.com",
  projectId: "auth-945da",
  storageBucket: "auth-945da.appspot.com",
  messagingSenderId: "691763889440",
  appId: "1:691763889440:web:207f522f052e3d306f8345",
  measurementId: "G-700Y3ZSH6Q",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Password strength validation function
const isPasswordStrong = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChar
  );
};

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!isPasswordStrong(password)) {
    alert(
      "Password does not meet the strength requirements. Please include at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return; // Stop the function if the password is not strong
  }

  // Firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // Send email verification link
      user
        .sendEmailVerification()
        .then(() => {
          // Email verification sent successfully
          alert("Email verification link sent. Please check your email.");
          // Redirect to sign-in page or another page, if necessary
          window.location.href = "signIn.html";
        })
        .catch((error) => {
          console.error(error);
          alert(error.message);
        });
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Firebase code for signing in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in successfully
      alert("You are Signed In");
      console.log(result);

      // Redirect to another page upon successful sign-in
      window.location.href = "ui.html";
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

      // Handle the error appropriately (e.g., display an error message to the user)
    });
};

// Function to redirect to a specific URL
const redirectToURL = (url) => {
  window.location.href = url;
};

// Redirect functions for specific URLs
const redirectToAvgTempSensorData = () => {
  redirectToURL("http://localhost:8080/api/avgTempsensorData");
};

const redirectToSensorData = () => {
  redirectToURL("http://localhost:8080/api/sensorData");
};

const redirectToAvgPressureSensorData = () => {
  redirectToURL("http://localhost:8080/api/avgPressureSensorData");
};

// Sign Out function
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      alert("You are Signed Out");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
