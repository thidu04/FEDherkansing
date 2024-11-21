/******************************/
/* menu openen de MENU button 
Bron: Codepen oefening 2 van FED 24-25 - Blok 1 - Oefening JS 3-stap
/******************************/

/* Stap 1: zoek de menu-button op en sla die op in een variabele */
let openButton = document.querySelector("header > nav:first-of-type button:nth-of-type(1)");

/* Stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit */
openButton.onclick = openMenu;

/* Stap 3: voeg in de functie een class toe aan de tweede nav */
function openMenu() {
  let deNav = document.querySelector("header > nav:last-of-type"); // Selecteer de laatste nav (hamburgermenu)
  deNav.classList.add("toonMenu");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* Stap 1: zoek de sluit-knop in de tweede nav */
let sluitButton = document.querySelector("header > nav:last-of-type button");

/* Stap 2: laat die button luisteren naar kliks */
sluitButton.onclick = sluitMenu;

/* Stap 3: in de functie verwijder de class van de tweede nav */
function sluitMenu() {
  let deNav = document.querySelector("header > nav:last-of-type"); // Selecteer de laatste nav (hamburgermenu)
  deNav.classList.remove("toonMenu");
}

/************************************/
/* WINKELWAGEN
Bronnen: Mijn oude code van Inleiding programmeren voor de score telling (Hier is het voor de cartCount)
en de audio toevoeging.

ChatGPT voor de button verandering na een klik.
/************************************/

/*Teller die aantallen bijhoudt in winkelmandje */
let cartCount = 0;

const cartSound = new Audio('/audio/buysound.mp3');


/* Alle aantallen updaten in het winkelmandje */
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;
}


const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function () {
    console.log('Button clicked');
    /* Voor puntenteller omhoog en speel geluid af  */
    cartCount++;
    updateCartCount();

    cartSound.currentTime = 0;
    cartSound.play();

    // Verander tijdelijk de knopkleur
    button.classList.add('clicked'); // Voeg de tijdelijke stijl toe

    // Zet de knop terug naar de oorspronkelijke kleur na 1 seconde (1000 ms)
    setTimeout(() => {
      button.classList.remove('clicked'); // Verwijder de tijdelijke stijl
    }, 1000); // Tijd in milliseconden
  });

  const likeButton = document.querySelector('.like-button');

// Voeg een klik event toe aan de like-button
likeButton.addEventListener('click', function () {
  // Toggle de 'clicked' class om de kleur van het hart te veranderen
  this.classList.toggle('clicked');
});
});

