document.addEventListener("DOMContentLoaded", function(){
    
    const div = document.getElementById("div");
    const btn = document.getElementById("button");

    div.addEventListener("click", ()=> {
        alert("Hola! Soy el div");
    });

    btn.addEventListener("click", function(event){
        alert("Hola!");
        event.stopPropagation();
    });
});