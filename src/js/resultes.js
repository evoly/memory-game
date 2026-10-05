import createModal from "./Modal";
import createTable from "./ResultTable";
import { createEl } from "./helpers";
import { createFireworks } from './fireworks';

export const createLeaderBoard = () => {
    const bestGames = JSON.parse(localStorage.getItem('bestgames')) ?? null;
    console.log('bestGames', bestGames)

    if (!bestGames) {
        const emptyTableText = createEl('div');
        emptyTableText.textContent = 'Nothing here yet';
        console.log('hello')
        return createModal([emptyTableText]);
    }

    bestGames.forEach(game => {
        game.date = new Date(game.date).toLocaleDateString('ru');
    });

    return createModal(createTable(bestGames));
};

export const createWinModal = (moves, onNewGame) => {
    console.log('onNewGame win', onNewGame);
    
    const header = createEl('h2');
    header.textContent = 'Congratulations!';

    const text = createEl('p');
    text.textContent = `You did it in ${moves} ${moves === 1 ? 'move' : 'moves'}!`;

    const canvas = createEl('canvas', { className: 'fireworks' });

    const modal = createModal([canvas, header, text], onNewGame);
    const stop = createFireworks(canvas);
    modal.addEventListener('close', stop);

    return modal;
}
