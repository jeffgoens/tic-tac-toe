## Sprint 3 - Build Project: Tic-Tac-Toe
### Project Description:
Create a webpage that recreates the childhood classic game, tic-tac-toe, using JavaScript, HTML, and the Bootstrap CSS framework (minimal custom CSS). For this project, we will be using JavaScript to dynamically render elements, keep track of board status, display win conditions, and manage state.

If you are unfamiliar with the game, see https://en.wikipedia.org/wiki/Tic-tac-toe for more information.

### Objective:
Learn how to use state and events, as well as dynamic rendering, to create a Javascript based TicTacToe game.

### Wireframes:
Use the wireframes provided to recreate the User Interface.  Try to deliver the solution as close to the design as possible.

Tic Tac Toe Wireframe: https://drive.google.com/file/d/1eHwwH_b9VLZCISCSn1M5zH8pfVtkQslz/view

### Requirements:
To complete the assignment, you must complete the following:
- The game should let the players know who's turn it is.
- Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
- The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
- There should be a Restart Game button that does not refresh the page (set state).
- Use the symbols X and O.
- On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
- The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
- Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file).