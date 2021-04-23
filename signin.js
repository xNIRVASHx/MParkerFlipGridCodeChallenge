const password = document.getElementById("Password")
const name = document.getElementById("FirstName")
const form = document.getElementById("Form")
const errorElement = document.getElementById("error")
form.addEventListener("submit", (e) => {
    let messages = []

    if(password.value.length <=8){
        messages.push("Password must be longer than 8 characters")
    }

    if(password.value.length >= 20){
        messages.push("Password must be shorter than 20 characters")
    }

    if(password.value === "password"){
        messages.push("Password cannot be password")
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }

    if(messages.length < 1){
        event.preventDefault();/*prevent page from reloading */
        document.getElementById('instructions').innerText = "You have been registered for this awesome service. Please check your email listed below for instructions"; //replace paragraph
        
        document.getElementById('btn').innerText = "Sign In";
        
        const userName = document.getElementById("FirstName").value;
        document.getElementById("header").innerHTML = "Welcome<br>" + userName;
    
        var yah = document.getElementById("Email").value;
        document.getElementById("displayEmail").innerHTML = yah;
        document.getElementById("list").remove();
        document.getElementById("error").remove();

    }
})

/*function ab(){

    event.preventDefault();/*prevent page from reloading *//*
    document.getElementById('instructions').innerText = "You have been registered for this awesome service. Please check your email listed below for instructions"; //replace paragraph
    
    document.getElementById('btn').innerText = "Sign In";
    
    const userName = document.getElementById("FirstName").value;
    document.getElementById("header").innerHTML = "Welcome<br>" + userName;

    var yah = document.getElementById("Email").value;
    document.getElementById("displayEmail").innerHTML = yah;
    document.getElementById("list").remove();


}*/