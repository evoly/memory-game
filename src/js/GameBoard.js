import backImg  from './BackCardImg';
import data from './cards.json';
import { createEl, shuffle } from "./helpers";

const PAIRS_IN_GAME = 8

const gameCard = (imgPath) => {
    const card = createEl('div', { className: 'card'});
    const cardFront = createEl('img', { src: `${imgPath}`, className: 'card-front', alt: 'card front image', });
    const cardBack = createEl('div', { className: 'card-back' });
    cardBack.append(backImg());

    cardBack.addEventListener('click', ({ target }) => {
        console.log('target', target.nextSibling);
        target.closest('.card').classList.add('flipped')
    });

    card.append(cardBack, cardFront);
    return card;
}

const gameBoard = () => {
    const cardsCollection = shuffle([...data]).slice(0, PAIRS_IN_GAME);
    const container = createEl('div', { className: 'game-board' });
    const cards1 = cardsCollection.map(({ image }) => gameCard(image));
    const cards2 = cardsCollection.map(({ image }) => gameCard(image));
    const cards = shuffle([...cards1, ...cards2]);
    
    container.append(...cards);
    return container
}

export default gameBoard

