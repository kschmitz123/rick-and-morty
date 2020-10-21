import { createElement } from "../utils/elements";
import "./search.css";

function Search({ onchange }) {
  const input = createElement("input", {
    placeholder: "Search character",
  });
  const button = createElement("button", {
    innerText: "🔍",
  });
  const container = createElement("form", {
    className: "searchbar",
    children: [input, button],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
    },
  });
  return container;
}
export default Search;
