import gameBoard from "./GameBoard";
import Button from "./Button";
import { createEl } from "./helpers";

const Header = () => {
    const header = createEl('header', { className: 'header container' });
    const newGame = Button('btn-lg', 'New Game');
    const leaderboard = Button('btn-lg', 'Best results');
    header.append(newGame, leaderboard);

    return header;
}

export default () => {
    const main = createEl('main', { className: 'container' });
    const content = gameBoard();
    main.append(content)
    return [Header(), main];
}


