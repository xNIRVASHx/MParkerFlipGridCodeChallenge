function ab(){

    event.preventDefault();/*prevent page from reloading */
    document.getElementById('help').innerText = "You have been registered for this awesome service. Please check your email listed below for instructions"; //replace paragraph
    
    document.getElementById('btn').innerText = "Sign In";
    
    var yah = document.getElementById("Email").value;
    document.getElementById("ee").innerHTML = yah;
    document.getElementById("dac").remove();

    var userName = document.getElementById("FirstName").value;
    document.getElementById("header").innerHTML = "Welcome<br>" + userName;
}