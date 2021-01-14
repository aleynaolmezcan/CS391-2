    
function addToLocal(){
    var user = {
        name : document.getElementById("name").value,
        surname : document.getElementById("surname").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }

    if(localStorage){
        localStorage.setItem(user.email,JSON.stringify(user));
    }
    else{
        alert("WHAT YEAR ARE YOU IN ? 1920 ? GET A NEW BROWSER DUDE!")
    }

}

