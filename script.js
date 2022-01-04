const Game = (() => {

  const switchTurn = function() {
    if(Players.playerOne.isCurrentPlayer) {
      Players.playerTwo.isCurrentPlayer = true;
      Players.playerOne.isCurrentPlayer = false;
      InfoBoard.print(`It is ${Players.playerTwo.name}'s turn.`);
    } else {
      Players.playerOne.isCurrentPlayer = true;
      Players.playerTwo.isCurrentPlayer = false;
      InfoBoard.print(`It is ${Players.playerOne.name}'s turn.`)
    }
  }
    //this is broken
    const checkEndofGame = () => {
      if(Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[1] && Players.playerOne.choice === Gameboard.positions[2] || 
        Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[8] || 
        Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[3] && Players.playerOne.choice === Gameboard.positions[6] || 
        Players.playerOne.choice === Gameboard.positions[1] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[7] || 
        Players.playerOne.choice === Gameboard.positions[2] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[6] || 
        Players.playerOne.choice === Gameboard.positions[2] && Players.playerOne.choice === Gameboard.positions[5] && Players.playerOne.choice === Gameboard.positions[8] || 
        Players.playerOne.choice === Gameboard.positions[3] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[5] || 
        Players.playerOne.choice === Gameboard.positions[6] && Players.playerOne.choice === Gameboard.positions[7] && Players.playerOne.choice === Gameboard.positions[8]) {
        InfoBoard.print(`${Players.playerOne.name} wins!`);
      }
      else if(Gameboard.positions[0] !== undefined && Gameboard.positions[1] !== undefined && Gameboard.positions[2] !== undefined && Gameboard.positions[3] !== undefined 
        && Gameboard.positions[5] !== undefined && Gameboard.positions[6] !== undefined && Gameboard.positions[7] !== undefined && Gameboard.positions[8] !== undefined) {
        InfoBoard.print('The game ends in a tie!');
      } else if(Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[1] && Players.playerTwo.choice === Gameboard.positions[2] || 
        Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[8] || 
        Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[3] && Players.playerTwo.choice === Gameboard.positions[6] || 
        Players.playerTwo.choice === Gameboard.positions[1] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[7] || 
        Players.playerTwo.choice === Gameboard.positions[2] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[6] || 
        Players.playerTwo.choice === Gameboard.positions[2] && Players.playerTwo.choice === Gameboard.positions[5] && Players.playerTwo.choice === Gameboard.positions[8] || 
        Players.playerTwo.choice === Gameboard.positions[3] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[5] || 
        Players.playerTwo.choice === Gameboard.positions[6] && Players.playerTwo.choice === Gameboard.positions[7] && Players.playerTwo.choice === Gameboard.positions[8]) {
        InfoBoard.print(`${Players.playerTwo.name} wins!`);
      }
    }

      return {
        switchTurn : switchTurn,
        checkEndofGame : checkEndofGame
      }

})();

const Players = (function() {

  function Player(choice) {
    this.choice = choice;
    this.isCurrentPlayer = '';
  }
  
  const playerOne = new Player('');
  const playerTwo = new Player('');

  const getUserData = () => {
    const playerOneName = document.getElementById('playeronename');
    const playerTwoName = document.getElementById('playertwoname');
    xAssignment = document.getElementById('radioplayer');
    playerOne.name = playerOneName.value;
    playerTwo.name = playerTwoName.value;
    if(xAssignment.checked === true) {
      playerOne.choice = 'x';
      playerTwo.choice = 'o'
      playerOne.isCurrentPlayer = true;
      playerTwo.isCurrentPlayer = false;
    } else {
      playerOne.choice = 'o';
      playerTwo.choice = 'x'
      playerOne.isCurrentPlayer = false;
      playerTwo.isCurrentPlayer = true;
    }
  }

  return {
    playerOne: playerOne,
    playerTwo: playerTwo,
    getUserData: getUserData,
  }

})();

const InfoBoard = (() => {

  const infoBoard = document.getElementById('infoboard');

  const makeForms = (() => {
    const myForms = [
      ['TEXT', 'playeronename', 'INPUT', ''],
      ['TEXT', 'playertwoname', 'INPUT', ''],
      ['', '', 'P', 'Which Player is Going first?'],
      ['RADIO', 'radioplayer', 'INPUT', 'Player One'],
      ['RADIO', 'radioplayer', 'INPUT', 'Player Two'],
      ['', 'submit', 'BUTTON', 'Begin Game'],
    ]
    let i = 0;
    myForms.forEach((form => {
      const newForm = document.createElement(myForms[i][2]);
      newForm.classList = 'form';
      newForm.type = myForms[i][0];
      newForm.id = myForms[i][1];
      newForm.name = myForms[i][1];
      newForm.value = myForms[i][3];
      newForm.textContent = myForms[i][3];
      if(myForms[i][0] === 'RADIO') {
        const label = document.createElement('LABEL');
        label.textContent = myForms[i][3];
        infoBoard.appendChild(label);
      }
      infoBoard.appendChild(newForm);
      i += 1;
    }));
  })();

  const print = (string) => {
    const newParagraph = document.createElement('P');
    newParagraph.textContent = string;
    infoBoard.appendChild(newParagraph);
  }

  const deleteForms = () => {
    while (infoBoard.lastChild) {
      infoBoard.removeChild(infoBoard.lastChild);
    }
    if(Players.playerOne.isCurrentPlayer) {
      print(Players.playerOne.name + ' will start.');
    } else {
      print(Players.playerTwo.name + ' will start.');
    }
  }

  return {
    deleteForms: deleteForms,
    print: print,
  }
  // forms to take in player names and x or o selection
    // player selects player v player or player v ai
  // write events that happen in the game
    // win/lose/tie
    // what happens in the game
      // what player places what where
  // reset button
})();

const aiPlayer = (() => {

})();

const Gameboard = (() => {
  let positions = [];

  const addListeners = (() => {
    const squares = document.querySelectorAll('.column');
    squares.forEach(square => {
      square.addEventListener('click', event => {
        const location = square.dataset.location;
        placeInPosition(location);
      })
    })
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', event =>{
      Players.getUserData();
      InfoBoard.deleteForms();
    })
  })();

  const placeInPosition = function(location) {

    if(Players.playerOne.isCurrentPlayer) {
      choice = Players.playerOne.choice
    } else {
      choice = Players.playerTwo.choice
    }
    if(positions[location] === undefined) {
    positions[location] = choice;
    console.log(choice + ' has been placed on ' + location);
    const position = document.querySelector(`[data-location="${location}"]`);
    position.textContent = choice;
    Game.checkEndofGame();
    Game.switchTurn();
    } else {
      InfoBoard.print(`There is already a ${positions[location].toUpperCase()} there!`)
    };
  };

  return {
    placeInPosition: placeInPosition,
    positions : positions
  };
})();