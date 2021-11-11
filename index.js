var config = {
  apiKey: "AIzaSyCBtf0h8UrLLVrk3VIv2d_Kx9SOWSPvWhs",
  authDomain: "absolutesingularity-ba380.firebaseapp.com",
  projectId: "absolutesingularity-ba380",
  storageBucket: "absolutesingularity-ba380.appspot.com",
  messagingSenderId: "164885287507",
  appId: "1:164885287507:web:28f5387e69b202cf40aca6",
  measurementId: "G-MP6EDSS42H"
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
