import { createEl } from "./helpers";

const Button = (classes, text) => {
    const button = createEl('button', {className: `btn ${classes}`});
    button.textContent = text;
    return button
}

export default Button;