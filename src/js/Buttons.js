import { createEl } from "./helpers";

const Button = ({classes, text, onClick}) => {
    const button = createEl('button', {className: `btn ${classes}`, type: 'button'});
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button
}

export default Button;

export const NewGameButton = (onNewGame) => 
    Button({ classes: 'btn-lg', text: 'New Game', onClick: onNewGame });

export const LeaderboardButton = (onSwowModal) => 
    Button({ classes: 'btn-lg', text: 'Best results', onClick: onSwowModal });

export const CloseButton = (onClose) => 
    Button({ classes: 'btn-lg', text: 'Close', onClick: onClose });

