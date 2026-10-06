import Button from "./Buttons";
import { createWinModal } from "./resultes";
import { startNewGame } from "./PageLayout";

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
    const container = createEl('div', { className: 'container test-section' });

    // --- Accordion header ---
    const h2 = createEl('h2', { className: 'accordion-header' });
    h2.textContent = 'Testing section';

    // --- Accordion body (everything that collapses) ---
    const body = createEl('div', { className: 'accordion-body' });

    const buttons = createEl('div', { className: 'test-section-buttons' });
    buttons.append(
        FinishGameButton(openCards, toLocalStorage),
        ShowModalButton(() => createWinModal(7, startNewGame))
    );

    const description = createEl('div', { className: 'test-section-text' });
    const header = createEl('h3');
    const line1 = createEl('p');
    const line2 = createEl('p');
    header.textContent = 'These buttons are for demo/testing purposes only.';
    line1.textContent = 'Show all — reveals all cards on the game board and saves a result to localStorage with a random number of moves (10–20) and the current date.';
    line2.textContent = 'Show modal — displays the modal shown after the game is completed, so you don’t have to play through the game to test it :)';
    description.append(line1, line2);

    body.append(header, buttons, description);

    h2.addEventListener('click', () => {
        container.classList.toggle('open');
    });

    container.append(h2, body);
    return container;
};
