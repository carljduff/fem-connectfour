let app = document.getElementById('app');

// RULES PAGE
let rulesDiv = createElement('div', app, 'rulesDiv', 'rulesDiv');
rulesDiv.hidden = true;
let rulesHeader = createElement('h1', rulesDiv, 'rulesHeader', 'rulesHeader');
rulesHeader.innerHTML = 'Rules';
let rulesSubtitle1 = createElement('h2', rulesDiv, 'rulesSubtitle1', 'rulesSubtitle1');
rulesSubtitle1.innerHTML = 'Objective';
let rulesText1 = createElement('p', rulesDiv, 'rulesText1', 'rulesText1');
rulesText1.innerHTML = 'Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).';
let rulesSubtitle2 = createElement('h2', rulesDiv, 'rulesSubtitle2', 'rulesSubtitle2');
rulesSubtitle2.innerHTML = 'How to play';
let rulesText2 = createElement('p', rulesDiv, 'rulesText2', 'rulesText2');
rulesText2.innerHTML = '1.) Red goes first in the first game. 2.) Players must alternate turns, and only one disc can be dropped in each turn. 3.) The game ends when there is a 4-in-a-row or a stalemate. 4.) The starter of the previous game goes second on the next game.';
let ruleButton = createElement('button', rulesDiv, 'ruleButton', 'ruleButton');
ruleButton.innerHTML = 'Back to Menu';
ruleButton.addEventListener('click', function() {
    rulesDiv.hidden = true;
    menuDiv.hidden = false;
});



function createElement(element, parent, id, className) {
    let varName = document.createElement(element);
    parent.appendChild(varName);
    varName.id = id;
    varName.className = className;
    return varName;
}
/*
Menu: Play vs Player
Game Rules
------------------------------
Rules 
Objective

  Be the first player to connect 4 of the same colored discs in a row (either 
  vertically, horizontally, or diagonally).

  How to play

  Red goes first in the first game.
  Players must alternate turns, and only one disc can be dropped in each turn. 
  The game ends when there is a 4-in-a-row or a stalemate.
  The starter of the previous game goes second on the next game.

*/

