let button = document.getElementById("addBtn");
let list = document.getElementById("list");

button.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let type = document.getElementById("type").value;
    let info = document.getElementById("info").value;

    if (name == "" || date == "") {
        alert("Please enter name and date");
        return;
    }

    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p>Date: " + date + "</p>" +
        "<p>Category: " + type + "</p>" +
        "<p>" + info + "</p>" +
        "<button class='done'>Done</button>" +
        "<button class='remove'>Delete</button>";

    list.appendChild(div);

    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("info").value = "";
});

list.addEventListener("click", function (e) {

    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("done")) {
        e.target.parentElement.classList.toggle("complete");
    }

});
