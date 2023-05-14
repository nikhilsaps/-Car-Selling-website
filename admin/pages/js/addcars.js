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
            alert("Car added to database ");
        };
        request.onerror = function (event) {
            console.log("Error adding car to the database");
        };
    };
}

document.getElementById("AddcarSubmitbtn").addEventListener("click", fungetcardata);
//  taking data form the page using get element by ID 
function fungetcardata() {
    let CarImage =document.getElementById("image").value.split("\\").pop();;
    let CarName =document.getElementById("name").value;
    let CarEngine =document.getElementById("engine").value;
    let CarMileage =document.getElementById("mileage").value;
    let CarKMs =document.getElementById("total_kms").value;
    let CarPrice =document.getElementById("price").value;
    
    
    console.log(CarImage, CarName, CarEngine, CarMileage, CarKMs, CarPrice);
    let addCarFastUpload = document.getElementById("addcarfastupload");
    addCarFastUpload.src= "../../../Carshop/Cars/" + CarImage;

    //addcar to database  when add is pressed 
    addCars(CarImage, CarName, CarEngine, CarMileage, CarKMs, CarPrice);
  

   

}
document.getElementById("reloadbtn").addEventListener("click",reloadpage);
function reloadpage(){
    location.reload();
}

function displayImage(file) {
    var reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById("addcarfastupload").src = event.target.result;
        data = event.target.result;
    };
    reader.readAsDataURL(file);
}
