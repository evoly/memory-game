import backImg  from './BackCardImg';
import data from './cards.json';
import { createEl, shuffle } from "./helpers";

const gameCard = (cardData, onCardFlip) => {
    const card = createEl('div', { className: 'card'});
    const cardFront = createEl('img', { src: `${cardData.image}`, className: 'card-front', alt: 'card front image', });
    const cardBack = createEl('div', { className: 'card-back' });
    cardBack.append(backImg());

    card.append(cardBack, cardFront);

    card.addEventListener('click', () => {
        onCardFlip(card, cardData.id);
    });

    return card;
}

const gameBoard = ({ pairsToFind, onCardFlip }) => {
    const cardsCollection = shuffle([...data]).slice(0, pairsToFind);
    const container = createEl('div', { className: 'game-board' });
    const cards1 = cardsCollection.map((item) => gameCard(item, onCardFlip));
    const cards2 = cardsCollection.map((item) => gameCard(item, onCardFlip));
    const cards = shuffle([...cards1, ...cards2]);
    
    container.append(...cards);
    return container
}

export default gameBoard

