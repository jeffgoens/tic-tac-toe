function createElement(parentEl, tag, text, className, idName, cellIndexName, styleName) {

    let element = document.createElement(tag)                    // creates element based on tag input    Example 'div' creates a div element
    element.innerText = text                                     // Takes value of text and places it in innerText of   the element being created

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


    parentEl.appendChild(element)                                 // parentEl = parent element    places the element being created inside parentEl
}

const mainContainer = document.getElementById('main')            // Main container div



function boardLayout() {

    createElement(mainContainer, 'h1', 'Tic Tac Toe', '', '', '', '',);
    createElement(mainContainer, 'div', '', 'card', 'mainCard', '', '',);
    createElement(mainCard, 'div', '', 'row', 'rowOne', '', 'height: 150px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneA', '', '',);
    createElement(columnOneA, 'div', '', 'cell', '', '0', 'height: 125px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneB', '', '',);
    createElement(columnOneB, 'div', '', 'cell', '', '1', 'height: 125px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneC', '', '',);
    createElement(columnOneC, 'div', '', 'cell', '', '2', 'height: 125px',);

    createElement(mainCard, 'div', '', 'row', 'rowTwo', '', 'height: 150px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoA', '', '',);
    createElement(columnTwoA, 'div', '', 'cell', '', '3', 'height: 125px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoB', '', '',);
    createElement(columnTwoB, 'div', '', 'cell', '', '4', 'height: 125px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoC', '', '',);
    createElement(columnTwoC, 'div', '', 'cell', '', '5', 'height: 125px',);

    createElement(mainCard, 'div', '', 'row', 'rowThree', '', 'height: 150px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeA', '', '',);
    createElement(columnThreeA, 'div', '', 'cell', '', '6', 'height: 125px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeB', '', '',);
    createElement(columnThreeB, 'div', '', 'cell', '', '7', 'height: 125px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeC', '', '',);
    createElement(columnThreeC, 'div', 'x', 'cell', '', '8', 'height: 125px',);

    createElement(mainContainer, 'h2', 'What goes here', '', 'statusText','', '',);
    createElement(mainContainer, 'button', 'Restart', 'btn btn-primary btn-lg', 'restartBtn', '', '',);

}

boardLayout();

