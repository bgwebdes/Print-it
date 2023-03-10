const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

//déclaration du numéro de la première image déclarée à l'index 0 dans le tableau
let numeroImage = 0;




//déclaration des constantes "next" et "previous" des flèches dans le DOM
const next = document.querySelector('#arrow_right');
const previous = document.querySelector('#arrow_left');



/* CREATION DES FONCTIONS SUR LES FLECHES */


//fonction nextSlide : affiche slide suivante au clic sur la flèche de droite

function nextSlide() {
	// Si la position de l'image courante est inférieure à la longueur du tableau - 1 (>>> 4-1 = position 3)
	if (numeroImage < slides.length - 1) {
		// Alors l'image suivante sera affichée
		numeroImage = numeroImage + 1;
	} else {
		// Sinon l'image courante = 0, on retourne à l'index 0 du tableau
		numeroImage = 0;
	}

	console.log('fonction nextSlide');


}
//fonction prevSlide : affiche slide précédente au clic sur la flèche de gauche
function prevSlide() {

	//si l'image courante est supérieure à l'index 0
	if (numeroImage > 0) {

		//on revient sur l'image précédente	
		numeroImage = numeroImage - 1;
	} else {
		//sinon on affiche la dernière image du tableau
		numeroImage = slides.length - 1;
	}
	console.log('diapo courante =', numeroImage);
	console.log('fonction prevSide');
}



/* CREATION DES FONCTIONS DE MISE A JOUR DE LA BANNIERE */


//fonction insertion et mise à jour de la nouvelle slide dans la bannière
function imageUpdate() {

	//déclaration de l'emplacement de l'image dans le DOM sur la classe ".banner-img"
	let imageInsertion = document.querySelector(".banner-img");

	//déclaration d'une variable "currentImage" pour déterminer l'image actuellement affichée
	let currentImage = slides[numeroImage];

	//déclaration de l'url de l'image (source dans le dossier "assets") + nom de l'image dans le tableau
	imageInsertion.src = "./assets/images/slideshow/" + currentImage.image;

	//insertion du texte correspondant à l'image courante dans le tableau
	imageInsertion.alt = currentImage.tagLine;

}

// fonction mise à jour des textes avec sélection de l'id " #banner-txt " dans le DOM

function textUpdate() {
	//variable pour l'emplacement pour les textes dans le DOM
	let text = document.querySelector("#banner-txt");
	// variable pour le texte actuellement affiché
	let currentText = slides[numeroImage];
	//insertion du texte correspondant au tableau et à l'image courante
	text.innerHTML = currentText.tagLine;
}

// fonction mise à jour des bullet points
function updateDots() {

	// déclaration et séléction avec "querySelectorAll" de toutes les classes ".dot" du DOM
	const dots = document.querySelectorAll(".dot");

	//mise en place d'une boucle sur les classes ".dot"
	// 1) let i = 0 (correspond au compteur initialisé à la valeur 0 pour la boucle)
	// 2) i est inférieur à dots.length (nombre de bullet points)
	// 3) i + 1 >>> on ajoute 1 au compteur de la boucle

	for (let i = 0; i < dots.length; i++) {

		// Si i est strictement égal à l'image courante
		if (i === numeroImage) {

			// dots[i] = syntaxe pour accéder à l'élément du tableau dots
			// classlist.add ajoute une class dot_selected
			dots[i].classList.add("dot_selected");
		} else {

			// classlist.remove, on supprime la class dot_selected
			dots[i].classList.remove("dot_selected");
		}
	}
}

/* AJOUT FONCTIONS EXECUTEES AU CLIC SUR LES FLECHES */

//ajout des fonctions au clic sur flèche à droite
next.addEventListener('click', function () {


	//fonctions mise à jour : image, texte, bullet point
	nextSlide();//fonction principale qui détermine le numéro de changement d'image (à exécuter en premier)
	imageUpdate();
	textUpdate();
	updateDots();
	//fonction slide suivante
	//console.log pour tester au clic
	console.log('next arrow OK');


});

//ajout des fonctions au clic sur flèche à gauche



previous.addEventListener('click', function () {

	//console.log pour tester au clic
	console.log('previous arrow OK');
	prevSlide();//fonction principale qui détermine le numéro de changement d'image (à exécuter en premier)
	imageUpdate();
	textUpdate();
	updateDots();
	//fonction slide précédente
	console.log('fonction prevSlide');


});







