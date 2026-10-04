import gameBoard from "./GameBoard"

const PAIRS_IN_GAME = 8

const createInitialState = () => ({
    flippedCards: [],
    pairsToFind: PAIRS_IN_GAME,
    isGameStarted: false,
    moves: 0,
    isAnimated: false,
    timeOutId: null,
});

let state = createInitialState();

const resetState = () => { state = createInitialState(); };

export const handleCardFlip = (card, id ) => {
    if(state.isAnimated) return;

    card.classList.add('flipped');
    state.flippedCards.push({card, id});

    if (state.flippedCards.length < 2) return;
    
    state.moves += 1;

    const [firstCard, secondCard] = state.flippedCards;

    if(firstCard.id === secondCard.id) {
        state.matchedPairs += 1;
        state.pairsToFind -= 1;
        state.flippedCards = [];

        if (state.pairsToFind < 1) {
            console.log('congratz!');
            // call modal
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

const newGame = () => {
    clearTimeout(state.timeOutId);
    resetState();
    // state.isGameStarted = true;
    return gameBoard({
        pairsToFind: state.pairsToFind,
        onCardFlip: handleCardFlip,
    });
}

export default newGame;

