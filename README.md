# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Thi Du

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://koreanskincare.nl/nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepage van Korean Skincare:  
  <img src="readme-images/home-koreanskincare.png" width="100px" alt="De home pagina van de Korean Skincare website">

  #### Screenshot(s) van de tweede pagina (small screen):
  Een product pagina van Korean skincare:
  <img src="readme-images/product-koreanskincare.png" width="100px" alt="De product pagina van de Anua foaming cleanser">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - Er wordt netjes aangegeven waar je je bevindt, zoals in de navigatiebalk of in de footer.
  - Ze hebben veel list items gemaakt in de website en voor de titels veel level 3 headings
  - Linkjes bij images, buttons en tekst.
  -  Wanneer je in een toolbar bent waar de producten worden weergegeven leest hij een hele tekst voor wat nogal verwarrend is.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/Korean-Skincare-Home-page1-Breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/Korean-Skincare-Product-page2-Breakdownschets.jpg" width="375px" alt="breakdown van een dynamisch deel">

</details>




## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  In deze week ging ik vooral de website bekijken die ik ga namaken en verbeteren (koreanskincare.nl). 


Tijdens de less

  Mijn vragen:
  - Zou ik alles moeten maken van de gekozen pagina's?
  - Hoe zou ik de h2 titels met een streep moeten maken?
  - Hoe zorg je ervoor dat wanneer je over een product plaatje hovered dat die verandert naar een ander product plaatje?

  ### Agenda voor meeting
  Donderdag 19-09-2024
Diya:
- Hoe maak je de rating?
- Verschillende tabs openen op dezelfde pagina, filter?

Thi:
 - Zou ik alles moeten maken van de gekozen pagina's?
  - Hoe zou ik de h2 titels met een streep moeten maken?
  - Hoe zorg je ervoor dat wanneer je over een product plaatje hovered dat die verandert naar een ander product plaatje?

Giulietta:
- Hoe laat je bubbels komen uit de cursor?
- Kun je nu nog veranderen van focus? van responsive naar surface plane?

Keysha:
- Hoe maak je verschillende tabs die je kunt openen op dezelfde pagina?
- Hoe voeg je een tabel samen in carroussel?

  ### Verslag van meeting
  Hier na afloop snel de uitkomsten van de meeting vastleggen:

  -  Maak verschillende dingen van de pagina, herhalende dingen kan je weglaten.- Met h2::before{}. h2::after{} kun je de strepen maken voor de kopjes/titels.
  - Hover image, transition, opacity- en animatie toevoegen.
  - Zoeken naar bubbels animaties op internet om toe te voegen aan de cursor.
  - Je kunt nog van focus veranderen, wel graag doorgeven.
  - Hover werkt niet op telefoon, alleen met cursor.
  - Grid maken voor je lijst of in je lijst
  - Voor de carroussel kun je de site: gebruiken. (Student assistente keurt het goed)

  We hebben het nagevraagd aan Sanne of we die carroussel konden gebruiken, maar die gebruikt wel een andere javascript library. Dit werd niet goedgekeurd door Sanne dus konden we die carroussel toch niet gebruiken.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken

 Als eerst wilde ik beginnen aan de navigatie:

<img src="readme-images/Nav-voorbeeld.png" width="200px" alt="Nav van Korean Skincare site ">

Ik verzamelde eerst alle iconen. Daarna ging ik de iconen op de goede grootte maken in css. Toen ging ik met flexbox werken om het naast elkaar te krijgen en te laten centreren. De Logo heb ik als h1 gemaakt. Ik had wel wat moeite met in de juiste volgorde zetten. Doordat ik de logo als h1 heb gemaakt, begint hij als eerst op de pagina maar hij moet in het midden staan van de nav iconen, dus dit was even uitvogelen.

In de les heb ik ook geleerd dat je het met order de volgorde kunt veranderen, dit heb ik toegepast op de iconen en uiteindelijk is het gelukt.

<img src="readme-images/Nav-oplossing.png" width="200px" alt="Nav oplossing css ">
<img src="readme-images/Nav-eigen-site.png" width="400px" alt="Nav op eigen site ">

Daarna ging ik verder met het hamburger menu. Wanneer je op de hamburger menu klikt schuift er een scherm uit met allemaal content waar je naartoe kunt navigeren. Ook zijn er soort filter buttons bovenaan. 

<img src="readme-images/Hamburger-menu-content-voorbeeld.png" width="200px" alt="Voorbeeld van hamburger menu ">

Het hamburger menu heb ik al eerder gemaakt in FED 24-25 Blok 1 Oefening JS 3-stap oefening 2 in de les. Dit heb ik ook meegenomen voor mijn site. Die oefening ging ook wel goed, dus kon ik makkelijk toepassen in mijn site. 

Ik had een probleem dat de andere elementen in. mijn main overlappen met de schuifscherm van de hamburger menu. Dit heb ik in de les nagevraagd aan mijn medestudent Diya, zij heeft geleerd van de studentenassistent dat je het kan fixen door de z-index hoog te zetten bijv hier op 1000. Het probleem is toen opgelost.

<img src="readme-images/Hamburger-menu-content.png" width="200px" alt="Hamburger menu op mijn site">
<img>


  ### Agenda voor meeting
Diya:
- Hoe maak je de carroussel?
- Ik heb wat problemen met nth-of-child, hoe fix ik dit?

Thi:
- Hoe zet ik de navigatie buttons op de juiste plek?
- Hoe zet ik het kruisje helemaal naar rechts?
- Mijn img nav icons die willen niet goed op size hoe fix ik dit?

Giulietta:
- Hoe krijg ik de video goed in de achtergrond?
- Ik heb veen classes en id's, mag dat?
- Hoe maak je de nav sticky?

Keysha:
- Hoe verander je de kleur van een svg?
- Hoe krijg ik de tweede nav balk?
- Waarom is er aan de boven kant van mijn site een kleine pijl te zien?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

- Kijk goed wat een link of button moet zijn op de site
- Maak 2 navs, 1 voor hamburger menu en 1 voor de zoekbutton, login, winkelmand etc.
- Gebruik justify-self: end; om de cross te verplaatsen op het einde (staat bij grid oefening 2)
- Svg met filter:invert(1); om wit of zwart te krijgen voor een icoon
- nth-of-type ipv nth of child hij telt dan beter op volgorde.
- Probeer in inspect site met pijltool te kijken of er padding of margin zit om die onnodige witruimtes te verwijderen.
- Haal de classes en ID's eruit, gebruik echt pseudoclasses.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  Diya: 
  -  Hoe moet ik de tweede menu toevoegen
  - Hoe moet ik de buttons stijlen
  - Hoe haal ik de achtergrond eruit 

Thi:
- Tekst bij mijn plaatjes mag dat? of alles zelf maken?
- Hoe maak ik de filter tabs in mijn hamburgernav en op mijn pagina's
- De images in mijn collage bewegen mee wanneer je responsive 
- Surface plane, mijn website heeft al veel animaties tellen die mee voor surface plane als ik die namaak of moet ik weer nieuwe toevoegen?

Giulietta:
- Hoe maak ik de producten netjes met prijs button en tekst?
- Hoe laat ik die tekst springen naar beneden?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Je mag geen tekst op de plaatjes, je moet ze zelf maken per plaatje. Handig als je goed bent in Photoshop om alle tekst weg te halen.
  - Sybren zal codepen sturen voor de filterfunctie.
  - De animaties die je namaakt van de originele site tellen mee voor de surface plane, zelf kun je altijd wat meer toevoegen om alle 5 dingen van de surfaceplane af te strepen.
  - Gebruik display flex en flex wrap
  - Afbeelding grijze filter over heen-> ::before (even video zoeken)
  - order -1 gebruiken 
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.


Footer plus en min toevoegen bij het uitklapmenu:


  1. chatgpt.com:
<img src="readme-images/ChatGPT-uitklapmenu-vraag.png" width="375px" alt="uitklapmenu footer vraag ">
<img src="readme-images/ChatGPT-uitklapmenu-uitleg.png" width="375px" alt="uitklapmenu footer vraag ">
<img src="readme-images/ChatGPT-uitklapmenu-antw.png" width="375px" alt="uitklapmenu footer vraag ">

  2. bron 2
  3. ..

</details>
