const btn = document.querySelector("#ex1_button");
(function () {
    btn.onclick = function() {
        const content = document.querySelector("#ex1_content");
        content.textContent = Array.from({length: 10}, (_, i) => i).join(', ');
    }
})();

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

