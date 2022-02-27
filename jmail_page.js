
//firebase links
const firebaseConfig = {
    apiKey: "AIzaSyDCxq8ldjptxrVUOJdec2Nr03495CAhuDc",
    authDomain: "lets-chat-webapp-bcbf8.firebaseapp.com",
    databaseURL: "https://lets-chat-webapp-bcbf8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-webapp-bcbf8",
    storageBucket: "lets-chat-webapp-bcbf8.appspot.com",
    messagingSenderId: "175609804745",
    appId: "1:175609804745:web:a58e8375e9fb1730d59a18",
    measurementId: "G-EPVQVVJY24"
  };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("username");

  console.log("room name"+room_name);
  console.log("user name"+user_name);

  function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
  }

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").value = "";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       firebase_message_id = childKey;
       message_data = childData;
      //Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         
      //End code
      });});}
getData();

  
