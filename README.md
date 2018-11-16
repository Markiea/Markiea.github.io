# Markiea.github.io
repository HelloWorld22
Website Markiea.github.io

My name is Markie Chancellor 

My website is about a history museum in Louisana. I am hosting my website on Markiea.github.io, though github. My website has four simple Javascript components, alert box with new museum hours, a question about medievel history, and a slideshow which fades in and out. The slideshow allows the user to interact with the graphic by clicking each dot. In addition, I have included different CSS selectors regarding JavaScript componets, as well as additional designs for the site, and HTML. For my alert box, the answer is Joan or Joan of Arc.

The class(es) I created are:

.p lead: first-letter { font-Size: 200%;}


This class increases the size of the first letter. I thought that it would be a cool addition for a history website.

.table { cursor: pointer;}

This class changes cursor into a pointer.


The next classes are made to make my slideshow work and stylish.

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}


.mySlides {
	display: none;
}


.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}


.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}


.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}


.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}


.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}


.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 3.5s;
  animation-name: fade;
  animation-duration: 3.5s;
}

The javascripts functions I created are: 

Prompt on hours:
 alert("Welcome to Our Museum. Our new fall-winter hours are 1pm-7pm Wednesday -Saturday.");
 
 This function alerts vistors of our new hours
 
 Question:
 var answer = prompt ('Who is the most famous medieval female figure in European history?');
if( answer === 'Joan of Arc' || 'Joan') {document.write("That is Right!"); }
else{
  prompt ('Her name starts with J and she has Arc in it');
}

This if loop askes users a question. 

Quote Machine:

var quotes = [
    'Hildegard von Bingen: “When the words come, they are merely empty shells without the music. They live as they are sung,  the words are the body and the music the spirit.',

    'Taqî ad Dîn Aḥmad ibn Taymiyyah: “Don’t depend too much on anyone in this world because even your own shadow leaves you when you are  darkness.',
   'Isidore  Seville: “Letters are signs of things, symbols of words, whose power is so great that without a voice they speak to us the words of the absent; for they introduce words by the eye, not by the ear.',
    'Christine de Pizan: “If it were customary to send maidens to school and teach them the same subjects as are taught to boys, they would learn just as fully and would understand the subtleties of all arts and sciences.',

'The Saga of Grettir the Strong: “A tale is but half told when only one person tells it.',

'Ibn Sīnā (Avicenna): The world is divided into men who have wit and no religion and men who have religion and no wit.'

    ]
function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML =quotes[randomNumber];

This function generates random quotes.

Slideshow:
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

This function provides a slideshow. 

