
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDhaaqeXziqqWwmpGLpF9aU2Mn7rMisHE0",
      authDomain: "kwitter-61c62.firebaseapp.com",
      databaseURL: "https://kwitter-61c62-default-rtdb.firebaseio.com",
      projectId: "kwitter-61c62",
      storageBucket: "kwitter-61c62.appspot.com",
      messagingSenderId: "428338755099",
      appId: "1:428338755099:web:28fbbea6d2b585c2142abe",
      measurementId: "G-E3LESRERNS"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });});}
getData();
