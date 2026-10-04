import { createEl } from "./helpers";

const Button = ({classes, text, onClick}) => {
    const button = createEl('button', {className: `btn ${classes}`});
    button.textContent = text;

    button.addEventListener('click', () => onClick());
    return button
}

export default Button;