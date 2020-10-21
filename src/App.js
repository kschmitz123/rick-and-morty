import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";
import { getCharacterByID } from "./utils/api";

function App() {
  const header = Header();

  const character = createCharacter({
    name: "Rick Sanchez",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  });

  const main = createElement("main", {
    className: "main",
    children: [character],
  });

  async function getCharacters() {
    const character = await getCharacterByID(3);
    main.append(
      createCharacter({
        name: character.name,
        imgSrc: character.image,
      })
    );
  }
  getCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
