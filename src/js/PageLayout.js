import newGame from "./game";
import Button from "./Button";
import { createEl } from "./helpers";

const Header = (onNewGame) => {
    const header = createEl('header', { className: 'header container' });
    const newGameBtn = Button({ classes: 'btn-lg', text: 'New Game', onClick: onNewGame });
    const leaderboardBtn = Button('btn-lg', 'Best results'); // TODO
    header.append(newGameBtn, leaderboardBtn);

    return header;
}

const renderGame = (el) => el.replaceChildren(newGame());

export default () => {
    const main = createEl('main', { className: 'container' });
    renderGame(main);
    return [Header(() => renderGame(main)), main];
}


