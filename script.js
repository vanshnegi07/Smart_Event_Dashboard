let button = document.getElementById("addBtn");
let list = document.getElementById("list");

button.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;

    let div = document.createElement("div");

    list.addEventListener("click", function(e){
    if(e.target.classList.contains("remove")){
        e.target.parentElement.remove();
    }
});


    list.appendChild(div);
});

document.getElementById("name").value = "";
document.getElementById("date").value = "";
