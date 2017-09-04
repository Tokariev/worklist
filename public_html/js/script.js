

function login(){
    var userName = document.getElementById("username").value;
    var div = document.getElementById("message");
    if(userName !== ""){
      div.innerHTML = "Hello " + userName;
      div.setAttribute("class", "padding5");  
    }
    else{
        div.innerHTML = "Please give a name!";
        div.setAttribute("class", "padding5");
    }
    
}


