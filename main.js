function generateRandom(max) {
    return Math.floor(Math.random() * max);
}

const body = document.body;
const noButton = body.querySelector(".no");

noButton.addEventListener("click", function () {
    noButton.style.right = `${generateRandom(60)}dvw`;
    noButton.style.bottom = `${generateRandom(80)}dvh`;
});
