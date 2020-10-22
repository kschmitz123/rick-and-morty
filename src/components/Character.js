import "./character.css";
import { createElement } from "../utils/elements";

function createCharacter({ ...props }) {
  const title = createElement("p", {
    className: "character__name",
    innerText: "Name: " + props.name,
  });
  const lifestatus = createElement("p", {
    innerText: props.status,
  });
  const type = createElement("p", {
    innerText: props.species,
  });
  const place = createElement("p", {
    innerText: props.origin.name,
  });

  const placeDef = createElement("p", {
    className: "character__origin",
    innerText: "Origin: ",
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
    src: props.imgSrc,
    alt: props.name,
  });
  const flipcardFront = createElement("div", {
    className: "flipcard-front",
    children: [avatar],
  });
  const flipcardBack = createElement("div", {
    className: "flipcard-back",
    children: [
      title,
      lifestatusDef,
      lifestatus,
      typeDef,
      type,
      placeDef,
      place,
    ],
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
