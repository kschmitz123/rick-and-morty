import "../../src/app.css";
import { createElement } from "../utils/elements";

function createCharacter({ name, imgSrc }) {
  const title = createElement("div", {
    className: "character__name",
    innerText: name,
  });

  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
  });

  const characterElement = createElement("div", {
    className: "character__card",
    children: [title, avatar],
  });
  return characterElement;
}
export default createCharacter;
