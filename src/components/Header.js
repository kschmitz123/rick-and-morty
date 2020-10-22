import "./header.css";
import headerpic from "../assets/rick_and_morty.png";
import { createElement } from "../utils/elements";

function Header() {
  const header = createElement("header", {
    className: "header",
    children: [
      createElement("h1", { innerText: "Rick and Morty" }),
      createElement("img", {
        src: headerpic,
        alt: "Rick and Morty",
      }),
    ],
  });

  return header;
}

export default Header;
