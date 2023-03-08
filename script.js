window.addEventListener("load", init);

function init() {
  var articleElem =
    document.querySelector("article"); /**Lista ha  querySelectorAll*/

  articleElem.innerHTML += "<button>Katt ide!</button>";

  /**Hogyan adunk meg eseménykezelőt javascriptben egy elemmhez */
  /**Létre kell hozni a button  Vegyük észre hogy ez megvanE HTML benvan ilyen button */
  /**JS ben érjük el */

  const gonbElem = document.querySelector("article button");
  gonbElem.addEventListener("click", function () {
    console.log("Kattintottál");
  });
  /**NÉVTELEN FÜGGVÉNY : általában eseménykezelőknél használjuk. */
  /**Ez a függvény csak egy meóriacím referencia a címre */

  gonbElem.addEventListener("click", () => {
    console.log("Kattintottál");
  });

  /**Helyezz el egy képet egy divben
   * ha a div fölé viszem az egeret, akkorírjon ki valamit a konzólra
   */

  articleElem.innerHTML +=
    '<div> <img src="kepek/witcher.jpg" width=200px></img> </div>';
  const kepElem = document.querySelector("article div img");

  kepElem.addEventListener("mouseenter", () => {
    console.log("A Kép fölött van az egér.");
    kepElem.style.border = "4px solid red";
    kepElem.style.borderRadius = "10px";
  });

  /**Amikor főlé viszem  az egeret akkor formázza meg */
  /**Pl szegély */
  /**de ha leviszem róla, akkor szedje le a szegélyt */
  kepElem.addEventListener("mouseout", function () {
    kepElem.style.border = "";
    kepElem.style.borderRadius = "";
  });

  articleElem.innerHTML +=
    '<div> <img class="masodik" src="kepek/dragon.png" width=200px></img> </div>';

  const cssFormazott = document.querySelector("article div .masodik");

  
  
  cssFormazott.addEventListener("mouseenter", () => {
    cssFormazott.classList.add("stiluslappalFormazott");
  });

  cssFormazott.addEventListener("mouseout", function () {
    cssFormazott.classList.remove("stiluslappalFormazott");
  });
}
