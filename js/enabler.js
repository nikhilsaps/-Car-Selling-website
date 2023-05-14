console.log("starting with User database and creating 5 user for this model ");
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
      location.reload();
    };
    request.onerror = function (event) {
      console.log("Error adding user to the database");
    };
  };
}
 addUser("aaron","aaron@gmail.com","aaron");
 addUser("armin","armin@gmail.com","123456");
 addUser("mikasa","mikasa@yahoo.com","mikasa");
 addUser("johndoe","john12@gmail.com","8765");
 addUser("integral","integral@gmail.com","university");



alert("all users have been added  to data base  you can read the data of the useres for navigation login or running the model ")

console.log("creating car table and database  adding info of the cars ");
alert("creating car table and database  adding info of the cars ");
// Open the database
var request = indexedDB.open("databaseCars", 1);
// Create the object store
request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("Cars", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("CarName", "CarName", { unique: true });
    objectStore.createIndex("CarMileage", "CarMileage", { unique: false });
    objectStore.createIndex("CarKMs", "CarKMs", { unique: false });
    objectStore.createIndex("CarPrice", "CarPrice", { unique: false });
    objectStore.createIndex("CarImage", "CarImage", { unique: false });
    objectStore.createIndex("CarEngine", "CarEngine", { unique: false });
};
// Insert a Car
function addCars(CarImage, CarName, CarEngine, CarMileage, CarKMs, CarPrice) {
    var request = indexedDB.open("databaseCars", 1);
    request.onsuccess = function (event) {
        var db = event.target.result;
        var transaction = db.transaction(["Cars"], "readwrite");
        var objectStore = transaction.objectStore("Cars");
        var Cars = { CarImage: CarImage, CarName: CarName, CarEngine: CarEngine, CarMileage: CarMileage, CarKMs: CarKMs, CarPrice: CarPrice };
        var request = objectStore.add(Cars);
        request.onsuccess = function (event) {
            console.log("Car added to the database");
        };
        request.onerror = function (event) {
            console.log("Error adding car to the database");
        };
    };
}
addCars("car-1.png", "Toyota Corolla", "1.8L 4-cylinder engine", "30 MPG city, 38 MPG highway", "20,000 KMs", "20,000");
addCars("car-2.png", "Honda Civic", "2.0L 4-cylinder engine", "30 MPG city, 38 MPG highway", "15,000 KMs", "22,000");
addCars("car-3.png", "Ford Mustang", "5.0L V8 engine", "16 MPG city, 25 MPG highway", "10,000 KMs", "35,000");
addCars("car-4.png", "Tesla Model S", "Electric motor", "102 MPGe city, 105 MPGe highway", "5,000 KMs", "80,000");
addCars("car-5.png", "Chevrolet Silverado", "5.3L V8 engine", "15 MPG city, 20 MPG highway", "25,000 KMs", "30,000");
addCars("car-6.png", "BMW X5", "3.0L 6-cylinder engine", "21 MPG city, 26 MPG highway", "8,000 KMs", "45,000");
addCars("car-7.png", "Audi A4", "2.0L 4-cylinder engine", "24 MPG city, 31 MPG highway", "12,000 KMs", "30,000");

 