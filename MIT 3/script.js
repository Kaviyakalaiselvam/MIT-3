function freeTrail(){
    var name=document.getElementById("name").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
  

    if (name.length < 4 || name.trim() === '') {
        alert("Username should contain at least four characters.");
        return;
    }
    if (password.length < 6 || password.length > 16|| password.trim() === '') {
        alert("Password should be 6-16 characters long.");
        return;
    }
    if(!/[A-Z]/.test(password)){
    alert(" Password atleast contains one uppercase");
    return;
    }
    if(!/[a-z]/.test(password)){
        alert("password atleast contain one lowercase");
        return;
    }
    if(!/\d/.test(password)) {
        alert("Password must contain at least one number.");
        return;
    }
    if(!/[^A-Za-z0-9]/.test(password)){
        alert("password must contains at least one special character");
        return;
    }
    if(name===password){
        alert("username and password not same");
        return;
    }
    return "validation successful!";
    
}




















    






    
