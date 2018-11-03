//Quote Machine

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
}
