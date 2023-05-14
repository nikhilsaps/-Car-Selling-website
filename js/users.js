// Open the database
var request = indexedDB.open("userlogin", 1);
// Create the object store
request.onupgradeneeded = function (event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
  objectStore.createIndex("username", "username", { unique: true });
  objectStore.createIndex("useremail", "useremail", { unique: false });
  objectStore.createIndex("password", "password", { unique: false });
};
// Insert a user
function addUser(username, useremail, password) {
  var request = indexedDB.open("userlogin", 1);
  request.onsuccess = function (event) {
    var db = event.target.result;
    var transaction = db.transaction(["users"], "readwrite");
    var objectStore = transaction.objectStore("users");
    var user = { username: username, useremail: useremail, password: password };
    var request = objectStore.add(user);
    request.onsuccess = function (event) {
      console.log("User added to the database");
      alert("User added to database ");
      location.reload();
    };
    request.onerror = function (event) {
      console.log("Error adding user to the database");
    };
  };
}

document.getElementById("Signinevent").addEventListener("click", fungetdata);
//  taking data form the page using get element by ID 
function fungetdata() {
  let username = document.getElementById("Signinname").value
  let useremail = document.getElementById("Signinemail").value
  let userpass = document.getElementById("Signinpass").value
  console.log(document.getElementById("Signinname").value, document.getElementById("Signinemail").value, document.getElementById("Signinpass").value)
  addUser(username, useremail, userpass);
}

//  retrieving data from the login page for successfull login 

var getUserByUsername = function (username, callback) {
  var request = indexedDB.open("userlogin", 1);
  request.onsuccess = function (event) {
    var db = event.target.result;
    var transaction = db.transaction(["users"], "readonly");
    var objectStore = transaction.objectStore("users");
    var index = objectStore.index("username");
    var request = index.get(username);
    request.onsuccess = function (event) {
      var user = event.target.result;
      if (user) {
        callback(user);
      } else {
        callback(null);
      }
    }
  };
  request.onerror = function (event) {
    console.error("Error retrieving user:", event.target.error);
    callback(null);
  };
};

/*
getUserByUsername("Nikil", function (user) {
  if (user) {
    console.log("Found user:", user);
  } else {
    console.log("User not found");
    alert("user not found");
  }
});
*/

document.getElementById("loginevent").addEventListener("click", checkforlogin);
function checkforlogin() {
  let userloginemail = document.getElementById("logemail").value
  let userloginpass= document.getElementById("logpass").value
  getUserByUsername(userloginemail, function (user) {
    if (user) {
      console.log("Found user:", user);
      if (user.password == userloginpass) {
        const cusername = user.username;
        localStorage.setItem("currentusername", cusername);
        window.location.href = "carshop.html"
      }
      else{
        alert("Please enter correct Username and password")
      }

    }
    else {
      console.log("User not found");
      alert("Incorect data ");
      location.reload();
    }
  });
}

document.getElementById("continueWO").addEventListener("click", withoutLogin);
function withoutLogin(){
  window.location.href = "carshop.html"
  localStorage.setItem("currentusername", "guest");

}
//const myString = "Gajab chutiya ho be";
//localStorage.setItem("myString", myString);

document.getElementById("adminLogin").addEventListener("click", adminLoginpage);
function adminLoginpage(){
  window.location.href = "admin_login.html"
}
