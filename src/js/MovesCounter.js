import { createEl } from "./helpers";

const MovesCounter = () => {
    const counter = createEl('div', { className: 'moves-counter' });
    counter.textContent = 'Moves: 0';

    return counter;
};

export default MovesCounter;