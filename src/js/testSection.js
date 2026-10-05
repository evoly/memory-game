import Button from "./Button";
import { createWinModal } from "./resultes";

import { createEl } from "./helpers";

const toLocalStorage = () => {
    const moves = Math.floor(Math.random() * 10 + 10);
    const bestGames = JSON.parse(localStorage.getItem('bestgames')) ?? [];
    const date = Date.now();
    const newResult = { moves, date };
    const sorted = [...bestGames, newResult].sort((a, b) => a.moves - b.moves || a.date - b.date);
    const storageUpdated = sorted.slice(0, 10);
    localStorage.setItem('bestgames', JSON.stringify(storageUpdated));
};

const FinishGameButton = (openCards) =>
    Button({ classes: 'btn-lg', text: 'Show all', onClick: () => { openCards(); toLocalStorage()} });


const ShowModalButton = (showModal) => 
    Button({ classes: 'btn-lg', text: 'Show modal', onClick: showModal });

export const TestSection = (openCards) => {
    const container = createEl('div', { className: 'container test-section'});
    const h2 = createEl('h2');
    h2.textContent = 'Testing section';
    const buttons = createEl('div', { className: 'test-section-buttons' });
    buttons.append(FinishGameButton(openCards, toLocalStorage), ShowModalButton(() => createWinModal(7)))
    const description = createEl('div', { className: 'test-section-text' });
    const line1 = createEl('p', { className: '' });
    const line0 = createEl('p', { className: '' });
    line0.textContent = 'These buttons are for demo/testing purposes only.'
    line1.textContent = 'Show all — reveals all cards on the game board and saves a result to localStorage with a random number of moves (10–20) and the current date.'
    const line2 = createEl('p', { className: '' });
    line2.textContent = 'Show modal — displays the modal shown after the game is completed, so you don’t have to play through the game to test it :)';
    description.append(line0, line1, line2);
    container.append(h2, buttons, description);
    return container;
}

