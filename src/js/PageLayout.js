import newGame from "./game";
import { giveUp } from "./game";
import { createLeaderBoard } from "./resultes";
import { NewGameButton, LeaderboardButton } from "./Buttons";
import { TestSection } from "./testSection";
import { createEl } from "./helpers";

const Header = ({onNewGame, onShowLeaderboard}) => {
    const header = createEl('header', { className: 'header container' });
    header.append(NewGameButton(onNewGame), LeaderboardButton(onShowLeaderboard));

    return header;
};

const main = createEl('main', { className: 'container' });
const render = (view) => main.replaceChildren(view);

export default () => {
    const actions = {
        newGame: () => render(newGame(actions.newGame)),
        giveUp: () => render(giveUp()),
    };

    actions.newGame();

    return [
        Header({
            onNewGame: actions.newGame,
            onShowLeaderboard: createLeaderBoard,
        }),
        main,
        TestSection(actions.giveUp),
    ];

};

// del for test only
export const startNewGame = () => {
    render(newGame());
};


