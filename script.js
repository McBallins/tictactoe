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
  })();


  const placeInPosition = function(location) {

    let symbol;
    console.log(Players.playerOne.isCurrentPlayer)
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
      console.log(`There is a ${this.positions[location]} already there!` );
    };
  };

  return {
    placeInPosition: placeInPosition,
    positions : positions
  };
})();

const Game = (() => {

  const switchTurn = function() {
    console.log('switching turns')
    if(Players.playerOne.isCurrentPlayer) {
      Players.playerTwo.isCurrentPlayer = true;
      Players.playerOne.isCurrentPlayer = false;
      console.log(Players.playerTwo.choice);
    } else {
      Players.playerOne.isCurrentPlayer = true;
      Players.playerTwo.isCurrentPlayer = false;
      console.log(Players.playerOne.choice);
    }
  }

    const checkEndofGame = () => {
      console.log('checking end of game');
      if(Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[1] && Players.playerOne.choice === Gameboard.positions[2] || 
        Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[8] || 
        Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[3] && Players.playerOne.choice === Gameboard.positions[6] || 
        Players.playerOne.choice === Gameboard.positions[1] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[7] || 
        Players.playerOne.choice === Gameboard.positions[2] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[6] || 
        Players.playerOne.choice === Gameboard.positions[2] && Players.playerOne.choice === Gameboard.positions[5] && Players.playerOne.choice === Gameboard.positions[8] || 
        Players.playerOne.choice === Gameboard.positions[3] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[5] || 
        Players.playerOne.choice === Gameboard.positions[6] && Players.playerOne.choice === Gameboard.positions[7] && Players.playerOne.choice === Gameboard.positions[8]) {
        console.log('you win');
      }
      else if(Gameboard.positions[0] !== undefined && Gameboard.positions[1] !== undefined && Gameboard.positions[2] !== undefined && Gameboard.positions[3] !== undefined 
        && Gameboard.positions[5] !== undefined && Gameboard.positions[6] !== undefined && Gameboard.positions[7] !== undefined && Gameboard.positions[8] !== undefined) {
        console.log(Gameboard.positions.length)
        console.log('you tied');
      } else if(Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[1] && Players.playerTwo.choice === Gameboard.positions[2] || 
        Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[8] || 
        Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[3] && Players.playerTwo.choice === Gameboard.positions[6] || 
        Players.playerTwo.choice === Gameboard.positions[1] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[7] || 
        Players.playerTwo.choice === Gameboard.positions[2] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[6] || 
        Players.playerTwo.choice === Gameboard.positions[2] && Players.playerTwo.choice === Gameboard.positions[5] && Players.playerTwo.choice === Gameboard.positions[8] || 
        Players.playerTwo.choice === Gameboard.positions[3] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[5] || 
        Players.playerTwo.choice === Gameboard.positions[6] && Players.playerTwo.choice === Gameboard.positions[7] && Players.playerTwo.choice === Gameboard.positions[8]) {
        console.log('you lose');
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
    this.isCurrentPlayer = true;
  }
  
  const playerOne = new Player('x');
  const playerTwo = new Player('o');
  playerTwo.isCurrentPlayer = false;

  return {
    playerOne: playerOne,
    playerTwo: playerTwo
  }

})();

const InfoBoard = (() => {
  const infoBoard = document.getElementById('infoboard');

  const makeForms = (() => {
    const myForms = [
      ['TEXT', 'playerOneName', 'INPUT'],
      ['TEXT', 'playerTwoName', 'INPUT'],
      ['', '', 'P', 'Which Player is Going first?'],
      ['RADIO', 'radioPlayerOne', 'INPUT', 'Palyer One'],
      ['RADIO', 'radioPlayerOne', 'INPUT', 'Player Two'],
    ]
    let i = 0;
    myForms.forEach((form => {
      const newForm = document.createElement(myForms[i][2]);
      console.log(myForms[i]);
      newForm.classList = 'form';
      newForm.type = myForms[i][0];
      newForm.id = myForms[i][1];
      newForm.name = myForms[i][1];
      newForm.textContent = myForms[i][3];
      if(myForms[i][0] === 'RADIO') {
        console.log('works')
        const label = document.createElement('LABEL');
        label.textContent = myForms[i][3];
        infoBoard.appendChild(label);
      }
      infoBoard.appendChild(newForm);
      i += 1;
    }));
  });

  return {
    makeForms: makeForms,
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