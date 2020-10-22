import { createElement } from "../utils/elements";
import "./button.css";

function Button(props) {
  const loadMoreBtn = createElement("button", {
    className: "button",
    ...props,
  });
  return loadMoreBtn;
}
export default Button;
