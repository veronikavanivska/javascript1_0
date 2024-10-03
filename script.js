const btn = document.querySelector("#ex1_button");
(function () {
    btn.onclick = function() {
        const content = document.querySelector("#ex1_content");
        content.textContent = Array.from({length: 10}, (_, i) => i).join(', ');
    }
})();
