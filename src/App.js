import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import createCharacter from "./components/Character";

function App() {
  const header = Header();

  const character = createCharacter({
    name: "Rick Sanchez",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  });

  const main = createElement("main", {
    children: [character],
  });

  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
