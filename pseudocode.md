## Pseudocode for Tic Tac Toe

### MoSCoW:

#### Must Have
- Game spaces should only be clickable once, and if the game is over, the space should not be clickable at all.
- Display who wins the game, otherwise, the display should return a tie.
- Restart Game button that does not refresh the page.
- Use symbols X and O.

#### Should Have
- Only have a single div in your index.html file and create elements dynamically.
- Game should let the players know who's turn it is.
- Use Bootstrap exclusively for the styling.

#### Could Have
- Use Classes instead of functional code to build the game utilizing MVC design principles.
- Allow players to enter their names.
- Keep track of the number of games won by X and O.
- Add a link to rules, display in a modal.

#### Will Not Have
- An AI that can "learn" how to play to win.
- Turn the project into Connect Four.
- Recreate Go.

---

### Page Elements:
- Title header 
- Game board equals 3x3 grid
- Reset game button

---

### Process Flow:
1. START
2. INITALIZE 
    1. CREATE board layout
    1. DECLARE winning conditions
    1. ADD event listeners
    1. SET state
3. BEGIN 
    1. SET player turn
    1. DISPLAY current move X or O
    1. CHECK win condition
    1. UPDATE board state
4. END
    1. DISPLAY winner
    1. RESET board state

---

### Functions:
```
CREATE createElement ()
    - DETERMINE parent and child relationships
    - SET elements, tags and attributes

CREATE boardLayout ()
    - INITIALIZE element creation
    
CREATE initializeGame ()
    - ADD event listeners for each cell(9)
    - ADD event listener for restart button
    - DISPLAY current players turn
    
CREATE updateCell ()
   - GET cell values
   - UPDATE cell values
   - DETERMINE win condition

CREATE changePlayer ()
   - READ current player based on cell value
   - DISPLAY current player turn

CREATE checkWinner ()
   - CHECK cell values
   - DETERMINE win condition
   - DISPLAY win status
   - UPDATE player turn

CREATE restartGame ()
    - SET current player back to X
    - SET cell values to empty
    - DISPLAY players turn

```
 ### Start:
 ```
createElement ()
boardLayout ()
initializeGame ()
updateCell ()
changePlayer ()
checkWinner ()
 ```
  
 ### End:
 ```
 restartGame ()
 ```
