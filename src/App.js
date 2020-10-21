import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";
// import { getCharacterByID } from "./utils/api";
import { getAllCharacters } from "./utils/api";

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  // function getRandomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }
  // console.log(getRandomNumber(1, 671));

  async function loadCharacters(name) {
    // for (let i = 1; i <= 10; i++) {
    const characters = await getAllCharacters(name);
    const characterElements = characters.map((character) =>
      createCharacter({
        name: character.name,
        imgSrc: character.image,
        status: character.status,
        species: character.species,
      })
    );
    // }
    main.innerHTML = "";
    main.append(...characterElements);
  }
  const searchBar = createElement("input", {
    onkeydown: (event) => loadCharacters(event.target.value),
  });

  loadCharacters();
  const container = createElement("div", {
    children: [header, searchBar, main],
  });
  return container;
}

export default App;
