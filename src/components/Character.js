import { createElement } from "../utils/elements";

function createCharacter({ name, imgSrc }) {
  const title = createElement("div", {
    innerText: name,
  });

  const avatar = createElement("img", {
    src: imgSrc,
    alt: name,
  });

  const characterElement = createElement("div", {
    children: [title, avatar],
  });
  return characterElement;
}
export default createCharacter;
