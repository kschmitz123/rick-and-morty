import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";
import { getCharacterByID } from "./utils/api";
import { getAllCharacters } from "./utils/api";

function App() {
  const header = Header();

  const main = createElement("main", {
    className: "main",
  });

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(getRandomNumber(1, 671));

  async function loadCharacters() {
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
  loadCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
