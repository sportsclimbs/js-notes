let newItemCounter = 1;

let ourList = document.getElementById("our-list")

let ourButton = document.getElementById("our-button");

let ourHeadline = document.getElementById('our-headline')

let listItems = document.getElementById("our-list").getElementsByTagName("li")

// first for loop

for (i=0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', activateItem);
}

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
    this.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something New" + " " + newItemCounter + "</li>";
    newItemCounter ++;
}