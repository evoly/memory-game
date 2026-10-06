import { createEl } from "./helpers";

export const MovesCounter = () => {
    const counter = createEl('div', { className: 'moves-counter' });
    const conunterText = createEl('span', { className: 'moves-counter-text' });
    conunterText.textContent =  'Moves: '
    const conunterData = createEl('span', { className: 'moves-counter-data' });
    conunterData.textContent = '0';
    counter.append(conunterText, conunterData);

    return {counter, conunterData};
};

export const OpenPairsCounter = () => {
    const counter = createEl('div', { className: 'pairs-counter' });
    const conunterText = createEl('span', { className: 'pairs-counter-text' });
    conunterText.textContent = 'Pairs open: '
    const conunterData = createEl('span', { className: 'pairs-counter-data' });
    conunterData.textContent = '0';
    counter.append(conunterText, conunterData);

    return { counter, conunterData };
};

export const GameCounters = (...counters) => {
    const container = createEl('div', { className: 'counter' });

    container.append(...counters);

    return container;
};
