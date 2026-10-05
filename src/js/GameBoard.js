import backImg  from './BackCardImg';
import { createEl } from "./helpers";

const gameCard = (cardData, onCardFlip, show) => {
    const card = createEl('div', { className: `card${show? ' flipped' : ''}`});
    const cardFront = createEl('img', { src: `${cardData.image}`, className: 'card-front', alt: 'card front image', });
    const cardBack = createEl('div', { className: 'card-back' });
    cardBack.append(backImg());

    card.append(cardBack, cardFront);

    card.addEventListener('click', () => {
        onCardFlip(card, cardData.id);
    });

    return card;
}

const gameBoard = ({ cardsData, onCardFlip, showAll }) => {
    const cards = cardsData.map((item) => gameCard(item, onCardFlip, showAll));
    const container = createEl('div', { className: 'game-board' });

    container.append(...cards);
    return container
}

export default gameBoard

