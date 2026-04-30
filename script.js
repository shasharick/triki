const board = document.getElementById("board");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let cells = Array(9).fill("");
let gameActive = true;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function createBoard() {
    board.innerHTML = "";
    cells.forEach((_, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => makeMove(index));
        board.appendChild(cell);
    });
}

function makeMove(index) {
    if (!gameActive || cells[index] !== "") return;

    cells[index] = currentPlayer;
    updateBoard();

    if (checkWinner()) {
        statusText.textContent = `Ganador: ${currentPlayer}`;
        gameActive = false;
        return;
    }

    if (!cells.includes("")) {
        statusText.textContent = "¡Empate!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Turno de: ${currentPlayer}`;
}

function updateBoard() {
    const cellElements = document.querySelectorAll(".cell");
    cellElements.forEach((cell, index) => {
        cell.textContent = cells[index];
    });
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => cells[index] === currentPlayer);
    });
}

function restartGame() {
    cells = Array(9).fill("");
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Turno de: X";
    createBoard();
}

createBoard();
