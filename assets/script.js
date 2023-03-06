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

//test affichage nom de l'image dans la console (non fonctionnel)
let cetteImage = "image";


for (let i = 0; i < slides.length; i++) {
	console.log(slides[i]);
}

for (let image of slides) {
	console.log('image numéro ' + numeroImage);
	console.log(image);
}

/* DECLARATION DES CONSTANTES UTILISEES DANS LE DOM */


//déclaration de la constante des flèches dans le DOM
const next = document.querySelector('#arrow_right');
const previous = document.querySelector('#arrow_left');





/* AJOUT EVENEMENT AU CLIC SUR LES FLECHES */

//ajout évènement au clic sur flèche suivante (droite)
next.addEventListener('click', function () {


	//fonctions mise à jour : image, texte, bullet point
	nextSlide();//fonction principale qui détermine le numéro de changement d'image
	imageUpdate();
	textUpdate();
	updateDots();
	//fonction slide suivante
	//console.log pour tester au clic
	console.log('next arrow OK');


});

//ajout évènement au clic sur flèche précédente (gauche)

previous.addEventListener('click', function () {

	//console.log pour tester au clic
	console.log('previous arrow OK');
	prevSlide();//fonction principale qui détermine le numéro de changement d'image
	imageUpdate();
	textUpdate();
	updateDots();
	//fonction slide précédente
	console.log('fonction prevSlide');
	console.log('index courante =', numeroImage);


});


//fonction nextSlide : affiche slide suivante

function nextSlide() {
	// Si la position de l'image courante est inférieure à la longueur du tableau - 1 (soit 4-1 = position 3)
	if (numeroImage < slides.length - 1) {
		// Alors l'image suivante sera affichée
		numeroImage = numeroImage + 1;
	} else {
		// Sinon l'image courante = 0, on retourne à l'index 0 du tableau
		numeroImage = 0;
	}
	if (numeroImage === slides.length - 1) {
		alert('la dernière diapo arrive !');
	}
	console.log('fonction nextSlide');
	console.log('index diapo courante =', numeroImage);


}
//fonction prevSlide : affiche slide précédente
function prevSlide() {

	//si l'image courante est supérieure à l'index 0
	if (numeroImage > 0) {

		//on revient sur l'image précédente	
		numeroImage = numeroImage - 1; 
	} 	else {
		//sinon on recule d'une image dans le tableau
		numeroImage = slides.length - 1;
	}
	console.log('diapo courante =', numeroImage);
	console.log('fonction prevSide');
}





//fonction insertion de la nouvelle slide dans la bannière
function imageUpdate() {

	//déclaration de l'emplacement de l'image dans le DOM
	let imageInsertion = document.querySelector(".banner-img");

	//constante pour déterminer l'image actuellement affichée
	let currentImage = slides[numeroImage];

	//url de l'image + nom de l'image dans le tableau
	imageInsertion.src = "./assets/images/slideshow/" + currentImage.image;

	//texte alternatif de l'image dans le tableau
	imageInsertion.alt = currentImage.tagLine;

}

// fonction mise à jour des textes

function textUpdate() {
	//emplacement pour les textes dans le DOM
	let text = document.querySelector("#banner-txt");
	//texte actuellement affiché
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




/*
//session mentorat 27/02/2023
//création d'une variable pour le découpage de l'url d'une image pour ne garder que le nom + extension du fichier
let current = image.src.split('/').pop();



for (const element of slides) {
 
	console.log(element.image);

	//comparer le nom de l'image affichée courante à l'image du tableau (index)
	if (element.image === current) {
		console.log('OK');
	};

	
}



console.log(tagLine);

console.log(image);

console.log(current);
*/



