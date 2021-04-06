// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD47D2k6qj7kjvPPjMM4_GPHy2yH-z5638",
    authDomain: "kwitter-project-1318b.firebaseapp.com",
    databaseURL: "https://kwitter-project-1318b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1318b",
    storageBucket: "kwitter-project-1318b.appspot.com",
    messagingSenderId: "786228157552",
    appId: "1:786228157552:web:a0a05ef666e4825c63e8b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room Name - "+ room_names);
      row = "<div class='room_name' id="+room_names+" onclick='redirctToRoomName(this.id)'>#"+room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirctToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}