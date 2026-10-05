import data from './cards.json';
import gameBoard from "./GameBoard";
import { shuffle } from "./helpers";
import { createWinModal } from './resultes';
import MovesCounter from './MovesCounter';
import { createEl } from "./helpers";

const PAIRS_IN_GAME = 8;

const createInitialState = () => ({
    flippedCards: [],
    pairsToFind: PAIRS_IN_GAME,
    moves: 0,
    isAnimated: false,
    timeOutId: null,
    showAll: false,
    cards: [],
    onNewGame: null,
    movesCounter: null,
});

let state = createInitialState();
const resetState = () => state = createInitialState();

export const handleCardFlip = (card, id) => {
    if (state.isAnimated) return;

    card.classList.add('flipped');
    state.flippedCards.push({ card, id });

    if (state.flippedCards.length < 2) return;

    state.moves += 1;
    state.movesCounter.textContent = `Moves: ${state.moves}`;

    const [firstCard, secondCard] = state.flippedCards;

    if (firstCard.id === secondCard.id) {
        state.pairsToFind -= 1;
        state.flippedCards = [];

        if (state.pairsToFind < 1) {
            console.log('congratz!');
            const bestGames = JSON.parse(localStorage.getItem('bestgames')) ?? [];
            const date = Date.now();
            const newResult = { moves: state.moves, date };
            const sorted = [...bestGames, newResult].sort((a, b) => a.moves - b.moves || a.date - b.date);
            const storageUpdated = sorted.slice(0, 10);
            localStorage.setItem('bestgames', JSON.stringify(storageUpdated));
            setTimeout(() => {
                createWinModal(state.moves, state.onNewGame);
            }, 800);
            
        }
        return
    }

    state.isAnimated = true;
    state.timeOutId = setTimeout(() => {
        state.flippedCards.map(({ card }) => card.classList.remove('flipped'));
        state.flippedCards = [];
        state.isAnimated = false;
    }, 900)

    return
}

// data
const createGameCards = () => {
    const cards = shuffle([...data]).slice(0, state.pairsToFind);
    const selectedCards = shuffle([...cards, ...cards]).map((card, index) => ({ ...card, instanceId: index }));
    console.log('selectedCards', selectedCards);
    return selectedCards;
}

const newGame = () => {
    clearTimeout(state.timeOutId);
    resetState();

    state.cards = createGameCards();
    state.movesCounter = MovesCounter();

    const board = gameBoard({
        cardsData: state.cards,
        onCardFlip: handleCardFlip,
    });

    const game = createEl('div', { className: 'game' });
    game.append(state.movesCounter, board);

    return game;
};

export default newGame;

export const giveUp = () => {
    console.log('givUp')
    clearTimeout(state.timeOutId);
    state.showAll = true;
    state.pairsToFind = 0;

    return gameBoard({ cardsData: state.cards, onCardFlip: handleCardFlip, showAll: state.showAll });
}



