let button = document.getElementById("addBtn");
let list = document.getElementById("list");

button.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;

    let div = document.createElement("div");

    div.innerHTML = "<h3>" + name + "</h3>" +
                    "<p>" + date + "</p>";

    list.appendChild(div);
});

