//import gameBoard from "./GameBoard";
import newGame from "./game";
import Button from "./Button";
import { createEl } from "./helpers";

const Header = () => {
    const header = createEl('header', { className: 'header container' });
    const newGameBtn = Button('btn-lg', 'New Game');
    const leaderboardBtn = Button('btn-lg', 'Best results');
    header.append(newGameBtn, leaderboardBtn);

    return header;
}

export default () => {
    const main = createEl('main', { className: 'container' });
    const content = newGame();
    main.append(content)
    return [Header(), main];
}


