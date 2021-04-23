function ab(){

    event.preventDefault();/*prevent page from reloading */
    document.getElementById('instructions').innerText = "You have been registered for this awesome service. Please check your email listed below for instructions"; //replace paragraph
    
    document.getElementById('btn').innerText = "Sign In";
    
    const userName = document.getElementById("FirstName").value;
    document.getElementById("header").innerHTML = "Welcome<br>" + userName;

    var yah = document.getElementById("Email").value;
    document.getElementById("displayEmail").innerHTML = yah;
    document.getElementById("list").remove();


}