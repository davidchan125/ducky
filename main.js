const cardGridSquareIcons = document.querySelectorAll(".card-grid-square-icon");

cardGridSquareIcons.forEach(icon => {
    icon.addEventListener("click", event => {
        if (!icon.classList.contains("reveal")) {
            icon.classList.add("reveal");
        }
    })
});