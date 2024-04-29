function freeTrail(){
    var name=document.getElementById("name").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var outputDiv = document.getElementById("output");
    var userDiv = document.getElementById("user");
  

    if (name.length < 4 || name.trim() === '') {
        alert("Username should contain at least four characters.");
        return;
    }
    else if (password.length < 6 || password.length > 16|| password.trim() === '') {
        alert("Password should be 6-12 characters long.");
        return;
    }
    else if(password.uppercase===1 ||password.lowercase===1||password.trim()===''){
    alert("atleast contains one uppercase or lowercase");
return;
}
    else if(password  !== name){
        alert("name and password is same");
        return;
    }
    
}
















    