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
        origin: character.origin,
      })
    );
    main.append(...characterElements);
    nextPage = characters.info.next?.match(/\d+/)[0];
    loadMoreBtn.disabled = !characters.info.next;
    lastName = name;
  }
  const searchBar = Search({
    onchange: (value) => {
      main.innerHTML = "";
      loadCharacters(value);
    },
  });

  loadCharacters();
  const container = createElement("div", {
    className: "container",
    children: [header, searchBar, main, loadMoreBtn],
  });

  //infiniteScroll
  window.addEventListener("scroll", () => {
    const offsetY =
      loadMoreBtn.offsetParent.offsetHeight - window.innerHeight - 100;
    if (offsetY < window.pageYOffset) {
      loadMoreBtn.click();
    }
  });
  return container;
}

export default App;
