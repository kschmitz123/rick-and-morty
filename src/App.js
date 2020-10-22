import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";
// import { getCharacterByID } from "./utils/api";
import { getAllCharacters } from "./utils/api";
import Search from "./components/Search";
import Button from "./components/button";

function App() {
  let nextPage = null;
  let lastName = null;

  const header = Header();

  const main = createElement("main", {
    className: "main",
  });
  const loadMoreBtn = Button({
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });

  async function loadCharacters(name, page) {
    const characters = await getAllCharacters(name, page);
    const characterElements = characters.results.map((character) =>
      createCharacter({
        name: character.name,
        imgSrc: character.image,
        status: character.status,
        species: character.species,
      })
    );
    main.append(...characterElements);
    loadMoreBtn.disabled = !characters.info.next;
    nextPage = characters.info.next?.match(/\d+/)[0];
  }
  const searchBar = Search({
    onchange: (value) => {
      main.innerHTML = "";
      loadCharacters(value);
    },
  });

  loadCharacters();
  const container = createElement("div", {
    children: [header, searchBar, main, loadMoreBtn],
  });
  return container;
}

export default App;
