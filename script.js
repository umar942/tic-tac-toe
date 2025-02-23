
const board = document.getElementById("board");
const resetButton = document.getElementById("reset");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function createBoard() {
    board.innerHTML = "";
    gameBoard.forEach((cell, index) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.dataset.index = index;
        cellDiv.textContent = cell;
        cellDiv.addEventListener("click", makeMove);
        board.appendChild(cellDiv);
    });
}    
 

function makeMove(event) {
    const index = event.target.dataset.index;
    if (gameBoard[index] !== "") return;
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add("taken");
    if (checkWinner()) {
        alert(`${currentPlayer} Wins!`);
        highlightWinner();
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombos.some(combo => {
        if (gameBoard[combo[0]] && 
            gameBoard[combo[0]] === gameBoard[combo[1]] && 
            gameBoard[combo[0]] === gameBoard[combo[2]]) {
            combo.forEach(index => {
                document.querySelectorAll(".cell")[index].classList.add("winner");
            });
            return true;
        }
        return false;
    });
}

function highlightWinner() {
    document.querySelectorAll(".cell").forEach(cell => cell.removeEventListener("click", makeMove));
}

resetButton.addEventListener("click", () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    createBoard();
});

createBoard();
