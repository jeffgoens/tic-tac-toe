function createElement(parentEl, tag, text, className, idName, cellIndexName, styleName) {

    let element = document.createElement(tag)                    // creates element based on tag input, example 'div' creates a div element
    element.innerText = text                                     // Takes value of text and places it in innerText of the element being created

    if (className) {                                             // If className exists
        element.setAttribute('class', className);                // Set class attribute of element = className
    }

    if (idName) {                                                // If idName exists
        element.setAttribute('id', idName);                      // Set id attribute of element = idName
    }

    if (cellIndexName) {
        element.setAttribute('cellIndex', cellIndexName);
    }

    if (styleName) {
        element.setAttribute('style', styleName);
    }


    parentEl.appendChild(element)                                 // parentEl = parent element, places the element being created inside parentEl
}

const mainContainer = document.getElementById('main')             // Main container div



function boardLayout() {                                            // function that creates the needed HTML elements

    createElement(mainContainer, 'h1', 'Tic Tac Toe', '', '', '', '',);                 // header
    createElement(mainContainer, 'div', '', 'card', 'mainCard', '', '',);               // card
    createElement(mainCard, 'div', '', 'row', 'rowOne', '', 'height: 150px',);          // row 1
    createElement(rowOne, 'div', '', 'col', 'columnOneA', '', '',);                     // column
    createElement(columnOneA, 'div', '', 'cell', '', '0', 'height: 125px',);            // cell or placeholder for X and o based on cellIndex which returns position of a cell
    createElement(rowOne, 'div', '', 'col', 'columnOneB', '', '',);
    createElement(columnOneB, 'div', '', 'cell', '', '1', 'height: 125px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneC', '', '',);
    createElement(columnOneC, 'div', '', 'cell', '', '2', 'height: 125px',);

    createElement(mainCard, 'div', '', 'row', 'rowTwo', '', 'height: 150px',);          // row 2
    createElement(rowTwo, 'div', '', 'col', 'columnTwoA', '', '',);                     
    createElement(columnTwoA, 'div', '', 'cell', '', '3', 'height: 125px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoB', '', '',);
    createElement(columnTwoB, 'div', '', 'cell', '', '4', 'height: 125px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoC', '', '',);
    createElement(columnTwoC, 'div', '', 'cell', '', '5', 'height: 125px',);

    createElement(mainCard, 'div', '', 'row', 'rowThree', '', 'height: 150px',);        // row 3
    createElement(rowThree, 'div', '', 'col', 'columnThreeA', '', '',);
    createElement(columnThreeA, 'div', '', 'cell', '', '6', 'height: 125px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeB', '', '',);
    createElement(columnThreeB, 'div', '', 'cell', '', '7', 'height: 125px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeC', '', '',);
    createElement(columnThreeC, 'div', '', 'cell', '', '8', 'height: 125px',);

    createElement(mainContainer, 'h2', '', '', 'statusText', '', '',);                  // h2 that renders game status text, i.e., who's turn, etc
    createElement(mainContainer, 'button', 'Restart', 'btn btn-outline-dark btn-lg', 'restartBtn', '', '',);   // button

}

boardLayout();                                                                          // call function for board layout

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; // winning combinations
let boardPlaceholder = ["", "", "", "", "", "", "", "", ""];                                                    // places empty value into each playing cell
let currentPlayer = "X";
let gameRunning = false;

intializeGame();                                                        // function that initializes game and creates event listeners                                                              

function intializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.innerText = `Player ${currentPlayer} starts the game.`;               
    gameRunning = true;
   
}

function cellClicked() {                                            // function that updates cell and checks for winner
    const cellIndex = this.getAttribute("cellIndex");               // gets attribute of cellIndex

    if (boardPlaceholder[cellIndex] != "" || !gameRunning) {        
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    boardPlaceholder[index] = currentPlayer;
    cell.innerText = currentPlayer;                               
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";             // if condition is true, executes first expression
    statusText.innerText = `Player ${currentPlayer}'s turn`;             
}

function checkWinner() {
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++) {                          // iterates over the winConditions array
        const cellValue = winConditions[i];     
        const cellA = boardPlaceholder[cellValue[0]];
        const cellB = boardPlaceholder[cellValue[1]];
        const cellC = boardPlaceholder[cellValue[2]];

        if(cellA == "" || cellB == "" || cellC == "") {                     // game continues if cell value has an empty string
            continue;
        }
        if(cellA == cellB && cellB == cellC) {                              // if cell values match, game is won, if loop breaks
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        statusText.innerText = `Player ${currentPlayer} wins!`;                      
        gameRunning = false;
    }
    else if(!boardPlaceholder.includes("")) {                               // game is a draw if there are no empty strings
        statusText.innerText = 'Game is a draw!';                       
        gameRunning = false;
    }
    else {
        changePlayer();
    }
}

function restartGame() {                                                    
    currentPlayer = "X";
    boardPlaceholder = ["", "", "", "", "", "", "", "", ""];
    statusText.innerText = `Player ${currentPlayer} starts the game.`;                     
    cells.forEach(cell => cell.innerText = "");                           
    gameRunning = true;
}
