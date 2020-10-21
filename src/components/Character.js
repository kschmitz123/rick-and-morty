import "./character.css";
import { createElement } from "../utils/elements";

function createCharacter({ name, imgSrc, status, species }) {
  const title = createElement("p", {
    className: "character__name",
    innerText: "Name: " + name,
  });
  const lifestatus = createElement("p", {
    innerText: status,
  });
  const type = createElement("p", {
    innerText: species,
  });

  const lifestatusDef = createElement("p", {
    className: "character__status",
    innerText: "Status: ",
  });
  const typeDef = createElement("p", {
    className: "character__type",
    innerText: "Species: ",
  });

  const avatar = createElement("img", {
    className: "character__img",
    src: imgSrc,
    alt: name,
  });
  const flipcardFront = createElement("div", {
    className: "flipcard-front",
    children: [avatar],
  });
  const flipcardBack = createElement("div", {
    className: "flipcard-back",
    children: [title, lifestatusDef, lifestatus, typeDef, type],
  });
  const flipcardInner = createElement("div", {
    className: "flipcard-inner",
    children: [flipcardFront, flipcardBack],
  });

  const flipcard = createElement("div", {
    className: "flipcard",
    children: [flipcardInner],
  });
  return flipcard;
}
export default createCharacter;
