import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";
import { getCharacterByID } from "./utils/api";

function App() {
  const header = Header();

  // const character = createCharacter({
  //   name: "Rick Sanchez",
  //   imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  // });

  const main = createElement("main", {
    className: "main",
  });

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(getRandom(1, 671));

  async function getCharacters() {
    for (let i = 1; i <= 10; i++) {
      const character = await getCharacterByID(i);
      main.append(
        createCharacter({
          name: character.name,
          imgSrc: character.image,
        })
      );
    }
  }
  getCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
