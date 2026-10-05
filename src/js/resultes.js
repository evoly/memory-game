import createModal from "./Modal";
import createTable from "./ResultTable";
import { createEl } from "./helpers";


export const leaderBoard = () => {
    const bestGames = JSON.parse(localStorage.getItem('bestgames')) ?? null;
    bestGames.forEach(game => {
        game.date = new Date(game.date).toLocaleDateString('ru');
    });

    if (bestGames) {
        return createModal(createTable(bestGames));
    }

    const emptyTableText = createEl('div');
    emptyTableText.textContent = 'Nothing here yet';
    console.log('hello')
    return createModal(emptyTableText);
};

export const finishGame = (moves) => {
    const header = createEl('h2');
    header.textContent = 'Congratulation!';

    const text = createEl('p');
    text.textContent = `You did it in ${moves} `;

    return createModal([header, text]);
}
