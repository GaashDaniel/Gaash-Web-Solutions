const ticTacToe = document.querySelector('.tic-tac-toe');
const newGame = document.querySelector('.new-game');
const gameGrid = document.querySelector('.game-grid');
const turnIndicator = document.querySelector('.turn-indicator');

function refreshTurnIndicator(winner) {
    const playerName = state.currentPlayer.element.querySelector('.player-name').textContent;
    turnIndicator.textContent = function () {
        if (!winner) return `It's ${playerName} [${state.currentPlayer.symbol}] Turn.`;
        if (winner === 'draw') return `It's a draw!`
        return `${playerName} is the winner!`;
    }();
    ticTacToe.dataset.turn = state.currentPlayerKey;
};

const state = {
    currentPlayerKey: null,
    get currentPlayer() {
        return state[state.currentPlayerKey];
    },
    flipPlayerKey(playerKey) {
        if (playerKey === 'player1') return 'player2';
        if (playerKey === 'player2') return 'player1';
    },
    player1: {
        element: document.querySelector('.player-1'),
        symbol: null,
    },
    player2: {
        element: document.querySelector('.player-2'),
        symbol: null,
    },

    symbolToPlayerKey(symbol) {
        if (symbol === state.player1.symbol) return 'player1';
        if (symbol === state.player2.symbol) return 'player2';
    },
};

newGame.onclick = function () {
    if (state.currentPlayerKey) return location.reload();
    state.currentPlayerKey = `player${Math.floor(Math.random() * 2) + 1}`;
    let player = state[state.currentPlayerKey];
    player.symbol = 'X';
    player.element.querySelector('.symbol').textContent = player.symbol;
    player = state[state.flipPlayerKey(state.currentPlayerKey)];
    player.symbol = 'O';
    player.element.querySelector('.symbol').textContent = player.symbol;
    refreshTurnIndicator();
};

gameGrid.onclick = function (event) {
    if (!state.currentPlayerKey) return;
    const cell = event.target.closest('.cell');
    if (!cell) return;
    if (cell.textContent) return;
    cell.textContent = state.currentPlayer.symbol;
    const winner = checkWinner();
    if (!winner) {
        state.currentPlayerKey = state.flipPlayerKey(state.currentPlayerKey)
    } else {
        gameGrid.onclick = null;
    }
    refreshTurnIndicator(winner);
};

function checkWinner() {
    const cells = [...gameGrid.querySelectorAll('.cell')];
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const winCombination of winningCombinations) {
        const cellsInRow = winCombination.map(value => cells[value]);
        const symbols = winCombination.map(value => cells[value].textContent);
        if (!symbols[0]) continue;
        if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
            cellsInRow.forEach(cell => cell.style.backgroundColor = 'green');
            return state.symbolToPlayerKey(symbols[0]);
        };
    };
    const gameOver = !gameGrid.querySelector('.cell:empty');
    if (gameOver) return 'draw';
    return null;
};

void function main() {
    newGame.click();
}();