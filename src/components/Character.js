import "./character.css";
import { createElement } from "../utils/elements";
import FaveActive from "../assets/star-active.svg";
import FaveInactive from "../assets/star-inactive.svg";

function createCharacter({ ...props }) {
  const favoriteImg = createElement("img", {
    src: props.isFavorite ? FaveActive : FaveInactive,
  });
  const favoriteBtn = createElement("button", {
    className: "faveBtn",

    onclick: () => {
      let currentFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      const isFavorite = currentFavorites.includes(props.name);
      if (isFavorite) {
        currentFavorites = currentFavorites.filter(
          (favorite) => favorite !== props.name
        );
      } else {
        currentFavorites.push(props.name);
      }
      localStorage.setItem("favorites", JSON.stringify(currentFavorites));
      favoriteImg.src = !isFavorite ? FaveActive : FaveInactive;
    },
    children: [favoriteImg],
  });

  const title = createElement("p", {
    className: "character__name",
    innerText: "Name: " + props.name,
    children: [favoriteBtn],
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
  const container = createElement("div", {
    className: "container",
    children: [title, flipcard],
  });
  return container;
}
export default createCharacter;
