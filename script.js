let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

//function for enter
function pressEnter(event){
    if(event.keyCode === 13) {

        let newItem = document.createElement("li")
        newItem.innerHTML = inputBox.value;

        listContainer.appendChild(newItem);
        inputBox.value = "";

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newItem.appendChild(span);
    }
}

//function for onclick
function addTask() {
    if (inputBox.value === "") {
        alert("No input");
    }
    else {
        let newItem = document.createElement("li");
        newItem.innerHTML = inputBox.value;

        listContainer.appendChild(newItem);
        inputBox.value = "";

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newItem.appendChild(span);
    }
}

listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

inputBox.addEventListener("keyup", pressEnter);
