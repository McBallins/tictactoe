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

  function gameState(boolean) {
    this.gameOver = boolean;
  }

    const gameOver = new gameState(true);

    const checkEndofGame = () => {
      console.log('checking...')
      if(Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[1] && Players.playerOne.choice === Gameboard.positions[2] || 
        Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[8] || 
        Players.playerOne.choice === Gameboard.positions[0] && Players.playerOne.choice === Gameboard.positions[3] && Players.playerOne.choice === Gameboard.positions[6] || 
        Players.playerOne.choice === Gameboard.positions[1] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[7] || 
        Players.playerOne.choice === Gameboard.positions[2] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[6] || 
        Players.playerOne.choice === Gameboard.positions[2] && Players.playerOne.choice === Gameboard.positions[5] && Players.playerOne.choice === Gameboard.positions[8] || 
        Players.playerOne.choice === Gameboard.positions[3] && Players.playerOne.choice === Gameboard.positions[4] && Players.playerOne.choice === Gameboard.positions[5] || 
        Players.playerOne.choice === Gameboard.positions[6] && Players.playerOne.choice === Gameboard.positions[7] && Players.playerOne.choice === Gameboard.positions[8]) {
        Players.playerOne.winner = true;
        gameOver.gameOver = true;
      }
      else if(Gameboard.positions[0] !== undefined && Gameboard.positions[1] !== undefined && Gameboard.positions[2] !== undefined && Gameboard.positions[3] !== undefined 
        && Gameboard.positions[5] !== undefined && Gameboard.positions[6] !== undefined && Gameboard.positions[7] !== undefined && Gameboard.positions[8] !== undefined) {
          gameOver.gameOver = true;
      } else if(Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[1] && Players.playerTwo.choice === Gameboard.positions[2] || 
        Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[8] || 
        Players.playerTwo.choice === Gameboard.positions[0] && Players.playerTwo.choice === Gameboard.positions[3] && Players.playerTwo.choice === Gameboard.positions[6] || 
        Players.playerTwo.choice === Gameboard.positions[1] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[7] || 
        Players.playerTwo.choice === Gameboard.positions[2] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[6] || 
        Players.playerTwo.choice === Gameboard.positions[2] && Players.playerTwo.choice === Gameboard.positions[5] && Players.playerTwo.choice === Gameboard.positions[8] || 
        Players.playerTwo.choice === Gameboard.positions[3] && Players.playerTwo.choice === Gameboard.positions[4] && Players.playerTwo.choice === Gameboard.positions[5] || 
        Players.playerTwo.choice === Gameboard.positions[6] && Players.playerTwo.choice === Gameboard.positions[7] && Players.playerTwo.choice === Gameboard.positions[8]) {
        Players.playerTwo.winner = true;
        gameOver.gameOver = true;
      }

      if(gameOver.gameOver) {
        endGame();
        console.log(gameOver.gameOver)
      } else {
        switchTurn();
        console.log(gameOver.gameOver)
      }
    }

    const endGame = function() {
      if(Players.playerOne.winner === true) {
        InfoBoard.print(`${Players.playerOne.name} wins!`, true);
      } else if(Players.playerTwo.winner === true) {
        InfoBoard.print(`${Players.playerTwo.name} wins!`, true);
      } else {
        InfoBoard.print('The game ends in a tie!', true);
      };
      gameOver.gameOver = true;
      console.log(gameOver.gameOver);
    }
    
    return {
      checkEndofGame: checkEndofGame,
      gameOver : gameOver,
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

  const reset = () => {
  playerOne.winner = false;
  playerTwo.winner = false;
  playerOne.name = '';
  playerTwo.name = '';
  playerOne.choice = '';
  playerTwo.choice = '';
  }

  return {
    playerOne: playerOne,
    playerTwo: playerTwo,
    getUserData: getUserData,
    reset: reset,
  }

})();

const InfoBoard = (() => {

  const infoBoard = document.getElementById('infoboard');

  const makeForms = () => {
    const myForms = [
      ['', '', 'P', 'Player one name'],
      ['TEXT', 'playeronename', 'INPUT', ''],
      ['', '', 'P', 'Player two name'],
      ['TEXT', 'playertwoname', 'INPUT', ''],
      ['', '', 'P', 'Which player is going first?'],
      ['RADIO', 'radioplayer', 'INPUT', 'Player One'],
      ['RADIO', 'radioplayer', 'INPUT', 'Player Two'],
      ['', 'submit', 'BUTTON', 'Begin Game'],
    ]
    let i = 0;
    myForms.forEach(form => {
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
    });
  };

  const print = (string, absolute) => {
    const newParagraph = document.createElement('P');
    newParagraph.textContent = string;
    if(absolute === true) {
      newParagraph.id = 'absolute';
    };
    infoBoard.appendChild(newParagraph);
  };

  const deleteForms = () => {
    while (infoBoard.lastChild) {
      infoBoard.removeChild(infoBoard.lastChild);
    }
    if(Players.playerOne.isCurrentPlayer) {
      print(Players.playerOne.name + ' will start.');
    } else {
      print(Players.playerTwo.name + ' will start.');
    }
    placeResetButton();
  }

  const reset = () => {
    while (infoBoard.lastChild) {
      infoBoard.removeChild(infoBoard.lastChild);
    }
    Gameboard.reset();
    makeForms();
    Players.reset();
    Game.gameOver.gameOver = true;
  }

  const placeResetButton = () => {
    const newbutton = document.createElement('BUTTON');
    newbutton.id = 'reset';
    newbutton.textContent = 'New Game';
    infoBoard.appendChild(newbutton);
    newbutton.addEventListener('click', event => {
      reset();
    })
  }

  const init = (() => {
    makeForms();
  })();

  return {
    deleteForms: deleteForms,
    print: print,
  }
})();

const aiPlayer = (() => {

})();

const Gameboard = (() => {
  let positions = [];

  const squares = document.querySelectorAll('.column');
  const addSquareListeners = () => {
    squares.forEach(square => {
      square.addEventListener('click', event => {
        if(Game.gameOver.gameOver === false) {
        const location = square.dataset.location;
        placeInPosition(location);
        }
      })
    })
  };

  const addSubmitListener = () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', event =>{
      Players.getUserData();
      InfoBoard.deleteForms();
      Game.gameOver.gameOver = false;
      console.log(Game.gameOver.gameOver)
    })
  };

  const placeInPosition = function(location) {
    if(1 === 1) {
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
        console.log(Game.gameOver.gameOver);
      } else {
        InfoBoard.print(`There is already a ${positions[location].toUpperCase()} there!`)
      };
  } else {
    InfoBoard.print(`You need start a game first!`);
  }
}

  const reset = () => {
    positions = [];
    squares.forEach(square => {
      square.textContent = '';
    })
    Game.gameOver.gameOver = true;
  }
  
  const init = (() => {
    addSubmitListener();
    addSquareListeners();
  })();

  return {
    placeInPosition: placeInPosition,
    positions : positions,
    reset: reset,
    addSubmitListener: addSubmitListener,
  };

})();

  // ai
  // reset button
  // pvp/pve button