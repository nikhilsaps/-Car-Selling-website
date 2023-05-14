
/*
for (let i = 0; i < 5; i++) {
    var row = document.createElement("tr");
    row.innerHTML = '<td>                       <div class="d-flex px-2 py-1">                         <div>                           <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg"                             alt="user1">                         </div>                         <div class="d-flex flex-column justify-content-center">                           <h6 class="mb-0 text-sm">John Michael</h6>                           <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>                         </div>                       </div>                     </td>                     <td>                       <p class="text-xs font-weight-bold mb-0">Manager</p>                       <p class="text-xs text-secondary mb-0">Organization</p>                     </td>                     <td class="align-middle text-center text-sm">                       <span class="badge badge-sm bg-gradient-success">Online</span>                     </td>                     <td class="align-middle text-center">                       <span class="text-secondary text-xs font-weight-bold">23/04/18</span>                     </td>                     <td class="align-middle">                       <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip"                         data-original-title="Edit user">                         Edit                       </a>                     </td>';
    parent.appendChild(row);
}
*/
//////////////////
//pulling the data
var parent = document.getElementById("databaseusertable");
parent.innerHTML = "";

var data;
let request = indexedDB.open("userlogin");

request.addEventListener("success", handleSuccess);
request.addEventListener("error", handleError);

function handleSuccess(event) {
    let db = event.target.result;
    let transaction = db.transaction("users", "readonly");
    let objectStore = transaction.objectStore("users");

    let request = objectStore.getAll();

    request.addEventListener("success", handleData);

    function handleData(event) {
        data = event.target.result;
        console.log(data, "line 29");
        db.close();
    }
}
function handleError(event) {
    console.error("Failed to open database:", event.target.error);
}

document.getElementById("loaduserdata").addEventListener("click", loaduserdata);
function loaduserdata() {


    parent.innerHTML = "";




    for (var i = 0; i < data.length; i++) {


        console.log("html");
        var row = document.createElement("tr");
        row.innerHTML = '<td>        <div class="d-flex px-2 py-1">            <div> <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1"> </div>            <div class="d-flex flex-column justify-content-center">                <h6 class="mb-0 text-sm">' + data[i].username + ' </h6>                <p class="text-xs text-secondary mb-0">' + data[i].useremail + '</p>            </div>        </div>    </td>    <td>        <p class="text-xs font-weight-bold mb-0">Buyer</p>    </td>    <td class="align-middle text-center text-sm"> <span class="badge badge-sm bg-gradient-success">Normal User</span> </td>    <td class="align-middle text-center"> <span class="text-secondary text-xs font-weight-bold">' + data[i].password + '</span> </td>    <td class="align-middle"> <a href="javascript:;" class="text-secondary font-weight-bold text-xs"            data-toggle="tooltip" data-original-title="Edit user"> Send Email </a> </td>';
        parent.appendChild(row);

    }
}