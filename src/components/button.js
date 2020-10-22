import { createElement } from "../utils/elements";
import "./button.css";

function Button(props) {
  const loadMoreBtn = createElement("button", {
    innerText: "Load more",
    className: "button",
    ...props,
  });
  return loadMoreBtn;
}
export default Button;
