const cardGridSquares = document.querySelectorAll(".card-grid-square");
const cardGridSquareIcons = document.querySelectorAll(".card-grid-square-icon");
const quackingText = document.querySelector(".quacking-text");
const btnQuackAgain = document.querySelector(".btn-quack-again");

function reset() {
    cardGridSquareIcons.forEach(icon => {
        icon.classList.remove("reveal");
        icon.classList.remove("bounce");
        icon.classList.remove("faster");
    });
    cardGridSquares.forEach(square => {
        square.classList.remove("border-dark");
    });
    quackingText.classList.remove("reveal");
    quackingText.classList.remove("bounce");
    quackingText.classList.remove("faster");
    
    btnQuackAgain.classList.remove("reveal");
    btnQuackAgain.classList.remove("bounce");
    btnQuackAgain.classList.remove("bounce-small");
}

function revealAndBounceIcon(icon) {
    icon.classList.add("reveal");
    icon.classList.add("bounce");
}

function intensifyQuacking() {
    setTimeout(() => {
        btnQuackAgain.classList.add("reveal");
        btnQuackAgain.classList.add("bounce");
        btnQuackAgain.classList.add("bounce-small");
    }, 800);
    cardGridSquareIcons.forEach(icon => {
        icon.classList.add("faster");
    });
    cardGridSquares.forEach(square => {
        square.classList.add("border-dark");
    });
    quackingText.classList.add("reveal");
    quackingText.classList.add("bounce");
    quackingText.classList.add("faster");
}

cardGridSquareIcons.forEach(icon => {
    icon.addEventListener("click", event => {
        if (!icon.classList.contains("reveal")) {
            revealAndBounceIcon(icon);
        }

        const numIconsRevealed = document.querySelectorAll(".card-grid-square-icon.reveal").length;
        if (numIconsRevealed === cardGridSquareIcons.length) {
            intensifyQuacking();
        }
    });
});

btnQuackAgain.addEventListener("click", event => {
    reset();
});