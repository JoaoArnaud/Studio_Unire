const slides = document.querySelectorAll(".slide");
const setaEsquerda = document.querySelector(".seta_esquerda");
const setaDireita = document.querySelector(".seta_direita");

let slideAtual = 0;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("slide_ativo");
        if (i === index) {
            slide.classList.add("slide_ativo");
        }
    });
}

setaDireita.addEventListener("click", () => {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
});

setaEsquerda.addEventListener("click", () => {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
});