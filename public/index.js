"use strict";
let form = document.querySelector(".form");
form.addEventListener("click", onSubmit);
let img = document.getElementsByTagName("img");
function onSubmit(e) {
    e.preventDefault();
    let newTask = document.querySelector("#newtask");
    if (newTask.value != "") {
        let ul = document.querySelector("ul");
        let newdiv = document.createElement("div");
        let newli = document.createElement("li");
        let newimg = document.createElement("img");
        newimg.setAttribute("src", "./images/1.webp");
        newli.textContent = newTask.value;
        newli.appendChild(newimg);
        newdiv.appendChild(newli);
        ul.appendChild(newdiv);
        for (let i = 0; i < img.length; i++) {
            img[i].addEventListener("click", () => {
                let parent = img[i].parentElement;
                parent.style.display = "none";
            });
        }
        newTask.value = "";
    }
}
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        console.log("asdasdasdasd");
        let parent = img[i].parentElement;
        parent.style.display = "none";
    });
}
// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle("checked");
    }
}, false);
