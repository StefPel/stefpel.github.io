const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments du Document Object Model (DOM)
let dots = document.querySelector(".dots"); // Sélectionne le conteneur des points de navigation
const arrowRight = document.querySelector(".arrow_right"); // Sélectionne la flèche droite
const arrowLeft = document.querySelector(".arrow_left"); // Sélectionne la flèche gauche
const img = document.querySelector(".banner-img"); // Sélectionne l'image du carrousel

// Fonction pour passer à l'image suivante
function next() {
    if (img.dataset.index < slides.length - 1) { // Si ce n'est pas la dernière image
        img.dataset.index++; // Passe à l'image suivante
        // Met à jour les points de navigation
        document.querySelector(".dot_selected").nextElementSibling.classList.add("dot_selected");
        document.querySelector(".dot_selected").classList.remove("dot_selected");
        // Change l'image et le texte
        img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
        img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;
    } else { // Si c'est la dernière image
        img.dataset.index = 0; // Retourne à la première image
        // Réinitialise les points de navigation et l'image
        img.setAttribute("src", "./assets/images/slideshow/" + slides[0].image);
        img.nextElementSibling.innerHTML = slides[0].tagLine;
        dots.firstElementChild.classList.add("dot_selected");
        dots.lastElementChild.classList.remove("dot_selected");
    }
}

// Fonction pour revenir à l'image précédente
function previous() {
    if (img.dataset.index > 0) { // Si ce n'est pas la première image
        img.dataset.index--; // Retourne à l'image précédente
        // Met à jour les points de navigation
        document.querySelector(".dot_selected").previousElementSibling.classList.add("dot_selected");
        document.querySelector(".dot_selected").classList.remove("dot_selected");
        // Change l'image et le texte
        img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
        img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;
    } else { // Si c'est la première image
        img.dataset.index = slides.length - 1; // Va à la dernière image
        // Réinitialise les points de navigation et l'image
        img.setAttribute("src", "./assets/images/slideshow/" + slides[slides.length - 1].image);
        img.nextElementSibling.innerHTML = slides[slides.length - 1].tagLine;
        dots.lastElementChild.classList.add("dot_selected");
        dots.firstElementChild.classList.remove("dot_selected");
    }
}

// Initialisation du carrousel
for (let i = 0; i < slides.length; i++) {
    const content = document.createElement("span");
    content.classList.add("dot");
    dots.appendChild(content);
}
dots.firstElementChild.classList.add("dot_selected");

// Gestion des événements de clic sur les flèches
arrowRight.addEventListener("click", function () {
    console.log("suivant");
    next();
});

arrowLeft.addEventListener("click", function () {
    console.log("précédent");
    previous();
});
