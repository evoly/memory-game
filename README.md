# Memory Game

A small memory matching game built with Vite and JavaScript.

[Live Demo](https://evoly.github.io/memory-game/)

## Features

- 8 pairs (16 cards) from 10 animals, reshuffled each game
- Animated card flipping
- Move counter
- Board locked while mismatched cards flip back
- Win modal with fireworks
- Top-10 leaderboard in `localStorage`, sorted by moves
- New game anytime

## How to Play

Flip two cards per move. Matches stay open; mismatches flip back after a short delay. Find all 8 pairs in as few moves as possible.

## Tech Stack

- JavaScript
- CSS
- Vite
- GitHub Actions + GitHub Pages

## Getting Started

### Clone the repository

```bash
git clone -b memory-game https://github.com/evoly/memory-game.git
cd memory-game
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start the local development server and open the project in the browser.

## Deployment

Deployment to GitHub Pages is automated via GitHub Actions. The workflow triggers on pushes to the memory-game branch.

## Testing Section

The current project includes a small testing/demo section with controls for development:

- **Show all** reveals all cards and adds a test result to `localStorage`.
- **Show modal** opens the win modal without requiring a full game to be completed.

These controls make it easier to test the leaderboard, game completion state, and modal UI during development.