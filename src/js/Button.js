import { createEl } from "./helpers";

const Button = ({classes, text, onClick}) => {
    const button = createEl('button', {className: `btn ${classes}`});
    button.textContent = text;
    console.log('onClick', onClick)
    button.addEventListener('click', onClick);
    return button
}

export default Button;

export const NewGameButton = (onNewGame) => 
    Button({ classes: 'btn-lg', text: 'New Game', onClick: onNewGame });

export const LeaderboardButton = (onSwowModal) => 
    Button({ classes: 'btn-lg', text: 'Best results', onClick: onSwowModal });

export const CloseButton = (onClose) => 
    Button({ classes: 'btn-close', text: 'Close', onClick: onClose });

