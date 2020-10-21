import "../../src/app.css";
import { createElement } from "../utils/elements";

function createCharacter({ name, imgSrc, status, species }) {
  const title = createElement("p", {
    className: "character__name",
    innerText: name,
  });
  const lifestatus = createElement("p", {
    className: "character__status",
    innerText: status,
  });
  const type = createElement("p", {
    className: "character__origin",
    innerText: species,
  });

  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
  });

  const characterElement = createElement("div", {
    className: "character__card",
    children: [title, lifestatus, type, avatar],
  });
  return characterElement;
}
export default createCharacter;
