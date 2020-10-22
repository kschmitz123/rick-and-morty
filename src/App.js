import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";
// import { getCharacterByID } from "./utils/api";
import { getAllCharacters } from "./utils/api";
import Search from "./components/Search";

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  async function loadCharacters(name) {
    const characters = await getAllCharacters(name);
    const characterElements = characters.map((character) =>
      createCharacter({
        name: character.name,
        imgSrc: character.image,
        status: character.status,
        species: character.species,
      })
    );
    main.innerHTML = "";
    main.append(...characterElements);
  }

  const searchBar = Search({
    onchange: (value) => loadCharacters(value),
  });

  loadCharacters();
  const container = createElement("div", {
    children: [header, searchBar, main],
  });
  return container;
}

export default App;
