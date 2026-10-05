import newGame from "./game";
import { giveUp } from "./game";
import { leaderBoard } from "./resultes";
import { NewGameButton, LeaderboardButton } from "./Button";
// import { TestSection } from "./testSection";
import { createEl } from "./helpers";

const Header = ({onNewGame, onShowLeaderboard}) => {
    const header = createEl('header', { className: 'header container' });
    header.append(NewGameButton(onNewGame), LeaderboardButton(onShowLeaderboard));

    return header;
}

export default () => {
    const main = createEl('main', { className: 'container' });
    const render = (view) => {
        main.replaceChildren(view);
    };

    const actions = {
        newGame: () => render(newGame()),
        giveUp: () => render(giveUp()),
    };

    actions.newGame();

    return [
        Header({
            onNewGame: actions.newGame,
            onShowLeaderboard: leaderBoard,
        }),
        main,
        // TestSection(actions.giveUp),
    ];

};


