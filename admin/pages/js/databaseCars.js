var parent = document.getElementById("databasecarstable");
parent.innerHTML = "";

var dataCar;
let request = indexedDB.open("databaseCars");

request.addEventListener("success", handleSuccess);
request.addEventListener("error", handleError);

function handleSuccess(event) {
    let db = event.target.result;
    let transaction = db.transaction("Cars", "readonly");
    let objectStore = transaction.objectStore("Cars");

    let request = objectStore.getAll();

    request.addEventListener("success", handleData);

    function handleData(event) {
        dataCar = event.target.result;
        console.log(dataCar, "line 29");
        db.close();
    }
}
function handleError(event) {
    console.error("Failed to open database:", event.target.error);
}


document.getElementById("loadcarsdata").addEventListener("click", loadCarsdata);
function loadCarsdata() {


    parent.innerHTML = "";




    for (var i = 0; i < dataCar.length; i++) {


        console.log("html");
        var row = document.createElement("tr");
        row.innerHTML = '<td>        <div class="d-flex px-2 py-1">            <div> <img src="../../Cars/'+dataCar[i].CarImage +'" class="avatar avatar-sm me-3 border-radius-lg" alt="user1"> </div>            <div class="d-flex flex-column justify-content-center">                <h6 class="mb-0 text-sm">' + dataCar[i].CarName  + ' </h6>                <p class="text-xs text-secondary mb-0">' + dataCar[i].CarEngine + '</p>            </div>        </div>    </td>    <td>        <p class="text-xs font-weight-bold mb-0">'+dataCar[i].CarMileage + '</p>    </td>    <td class="align-middle text-center text-sm"> <span class="badge badge-sm bg-gradient-success">' +dataCar[i].CarKMs + '</span> </td>    <td class="align-middle text-center"> <span class="text-secondary text-xs font-weight-bold">' + dataCar[i].CarPrice + '</span> </td>    <td class="align-middle"> <a href="javascript:;" class="text-secondary font-weight-bold text-xs"            data-toggle="tooltip" data-original-title="Edit user"> A </a> </td>';
        parent.appendChild(row);

    }
}