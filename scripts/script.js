/******************************/
/* menu openen de MENU button */
/******************************/

/* Stap 1: zoek de menu-button op en sla die op in een variabele */
var openButton = document.querySelector("header > nav:first-of-type button:nth-of-type(1)");

/* Stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit */
openButton.onclick = openMenu;

/* Stap 3: voeg in de functie een class toe aan de tweede nav */
function openMenu() {
  var deNav = document.querySelector("header > nav:last-of-type"); // Selecteer de laatste nav (hamburgermenu)
  deNav.classList.add("toonMenu");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* Stap 1: zoek de sluit-knop in de tweede nav */
var sluitButton = document.querySelector("header > nav:last-of-type button");

/* Stap 2: laat die button luisteren naar kliks */
sluitButton.onclick = sluitMenu;

/* Stap 3: in de functie verwijder de class van de tweede nav */
function sluitMenu() {
  var deNav = document.querySelector("header > nav:last-of-type"); // Selecteer de laatste nav (hamburgermenu)
  deNav.classList.remove("toonMenu");
}
