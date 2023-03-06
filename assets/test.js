const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



//déclaration de la constante des flèches 
const next = document.querySelector('#arrow_right');
const previous = document.querySelector('#arrow_left');

//déclaration de la constante du texte de la bannière
const text = document.querySelector('#banner p');
//const image = document.querySelector('.banner-img');
const dot = document.querySelector('.dot');

//création d'une variable pour le découpage de l'url d'une image pour ne garder que le nom + extension du fichier
//let current = image.src.split('/').pop();



/*for (const element of slides) {
 
	console.log(element.image);

	//comparer le nom de l'image affichée courante à l'image du tableau (index)
	if (element.image === current) {
		console.log('OK');
	};

	
}

//calcul nombre d'images dans tableau

console.log(text);

console.log(image);

console.log(current);

//ajout évènement au clic
next.addEventListener('click', function () {
	console.log('next works');

});
previous.addEventListener('click', function(){
	console.log('previous slide');
});	
//repère dans le tableau et aller sur slide suivante

*/
// variable utilises
let image, dest, i, nb = slides.length;
// recuperation du conteneur
dest = document.getElementById('banner-img');
for( i = 0; i < nb; i++){
  // creation de l'element image
  image = document.createElement('img');
  // affectation du nom de l'image
  image.src = slides[i];
  // ajout d'un ID pour recuperation ulterieure
  image.id = 'image' +i;
  // ajout au conteneur
  dest.appendChild(image);
}