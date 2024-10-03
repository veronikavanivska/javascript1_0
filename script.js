//First task
const btn = document.querySelector("#ex1_button");
(function () {
    btn.onclick = function() {
        const content = document.querySelector("#ex1_content");
        content.textContent = Array.from({length: 10}, (_, i) => i).join(', ');
    }
})();

//Second task
const inputField = document.querySelector("#ex2_text");
const content = document.querySelector("#ex2_content");

inputField.addEventListener('input', function() {
    const value = inputField.value;

    if (/[a-zA-Z]/.test(value)) {
        content.textContent = "The number cannot contain letters";
    }
    else if (/[^0-9]/.test(value)) {
        content.textContent = "The number cannot contain special characters";
    }
    else if (value.length !== 9) {
        content.textContent = "Length of the number have to be equal 9";
    }
    else {
        content.textContent = "The number is correct";
    }
});

//Third and fourth task
const draggableElement = document.querySelector("#ex3_element");
const dropZoneOne = document.querySelector("#ex3_one");
const dropZoneTwo = document.querySelector("#ex3_two");


draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const elementId = event.dataTransfer.getData('text');
    const draggable = document.getElementById(elementId);
    event.target.appendChild(draggable);
}


dropZoneOne.addEventListener('dragover', allowDrop);
dropZoneTwo.addEventListener('dragover', allowDrop);

//If you want to drag from second container to first uncomment the line below
//dropZoneOne.addEventListener('drop',handleDrop);
dropZoneTwo.addEventListener('drop', handleDrop);

