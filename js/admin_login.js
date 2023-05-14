

document.getElementById("admin_login_btn").addEventListener("click", adminloginbtn);

function adminloginbtn(){
    let adminname = document.getElementById("name").value;
    let adminpass = document.getElementById("password").value;
    if(adminname == "admin" && adminpass == "admin"){
        window.location.href = "admin/pages/dashboard.html"
    }
    else{
        alert("wrong Username or Password ")
        location.reload();
    }
    console.log(adminname, adminpass);
}





