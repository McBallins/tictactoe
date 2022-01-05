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

  const gameOver = (() => {
    let gameOver = true
    const set = (boolean) => {
      gameOver = boolean;
    }
    const getGameOver = () => {
      return gameOver;
    }
    return {
      set : set,
      getGameOver : getGameOver,
    }
  })();

    const endGame = function() {
      if(Players.playerOne.winner === true) {
        InfoBoard.print(`${Players.playerOne.name} wins!`, true);
      } else if(Players.playerTwo.winner === true) {
        InfoBoard.print(`${Players.playerTwo.name} wins!`, true);
      } else {
        InfoBoard.print('The game ends in a tie!', true);
      };
      Game.gameOver.set(true);
    }

    const init = (() => {
      // gameOver();
    })();
    
    return {
      endGame: endGame,
      gameOver : gameOver,
      switchTurn : switchTurn,
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

  const addSubmitListener = () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', event =>{
      Players.getUserData();
      deleteForms();
      Game.gameOver.set(false);
    })
  };

  const reset = () => {
    while (infoBoard.lastChild) {
      infoBoard.removeChild(infoBoard.lastChild);
    }
    Gameboard.reset();
    makeForms();
    addSubmitListener();
    Players.reset();
    Game.gameOver.set(true);
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
    addSubmitListener();
  })();

  return {
    deleteForms: deleteForms,
    print: print,
  }
})();

const aiPlayer = (() => {

})();

const Gameboard = (() => {

  const myPositions = ((position, symbol) => {
    let a1 = '';
    let a2 = '';
    let a3 = '';
    let b1 = '';
    let b2 = '';
    let b3 = '';
    let c1 = '';
    let c2 = '';
    let c3 = '';

    const convertPosition = (position, choice) => {
      position = position*1;
      if(position === 0 && a1 !== 'o'&& a1 !== 'x') {
        myPositions.a1 = choice;
        console.log(myPositions.a1)
        place(position, choice);
      } else if(position === 1 && a2 !== 'o'&& a2 !== 'x') {
        myPositions.a2 = choice;
        place(position, choice);
      } else if(position === 2 && a3 !== 'o'&& a3 !== 'x') {
        myPositions.a3 = choice;
        place(position, choice);
      } else if(position === 3 && b1 !== 'o'&& b1 !== 'x') {
        myPositions.b1 = choice;
        place(position, choice);
      } else if(position === 4 && b2 !== 'o'&& b2 !== 'x') {
        myPositions.b2 = choice;
        place(position, choice);
      } else if(position === 5 && b3 !== 'o'&& b3 !== 'x') {
        myPositions.b3 = choice;
        place(position, choice);
      } else if(position === 6 && c1 !== 'o'&& c1 !== 'x') {
        myPositions.c1 = choice;
        place(position, choice);
      } else if(position === 7 && c2 !== 'o'&& c2 !== 'x') {
        myPositions.c2 = choice;
        place(position, choice);
      } else if(position === 8 && c3 !== 'o'&& c3 !== 'x') {
        myPositions.c3 = choice;
        place(position, choice);
      } else {
        InfoBoard.print(`There is already a ${choice.toUpperCase()} there!`);
      }
    };

    const getPos = (pos) => {
      console.log(myPositions,pos)
      newPos = myPositions.pos;
      return newPos;
      }

    const reset = () => {
      myPositions.a1 = '';
      myPositions.a2 = '';
      myPositions.a3 = '';
      myPositions.b1 = '';
      myPositions.b2 = '';
      myPositions.b3 = '';
      myPositions.c1 = '';
      myPositions.c2 = '';
      myPositions.c3 = '';
    }

    return {
      convertPosition : convertPosition,
      a1 : a1,
      getPos : getPos,
      reset : reset
    }
  })();

  const squares = document.querySelectorAll('.column');
  const addSquareListeners = () => {
    squares.forEach(square => {
      console.log('sqaure listeners placed')
      square.addEventListener('click', event => {
        console.log(Game.gameOver.getGameOver())
        if(Game.gameOver.getGameOver() === false) {
        const location = square.dataset.location;
        placeInPosition(location);
        }
      })
    })
  };

  const placeInPosition = function(location) {
    if(Game.gameOver.getGameOver() === false) {
      let choice;
      if(Players.playerOne.isCurrentPlayer) {
        choice = Players.playerOne.choice
      } else {
        choice = Players.playerTwo.choice
      }
      myPositions.convertPosition(location, choice);
    } else {
      InfoBoard.print(`You need start a game first!`);
    }
  }
  const place = (position, choice) => {
    console.log(position)
    const boardPosition = document.querySelector(`[data-location="${position}"]`);
    console.log(boardPosition)
    boardPosition.textContent = choice;
    checkEndofGame();
    };

    const checkEndofGame = () => {
      console.log('checking...')
      console.log(myPositions.getPos('a1'))
      if(Players.playerOne.choice === myPositions.a1 && Players.playerOne.choice === myPositions.a2 && Players.playerOne.choice === myPositions.a3 || 
        Players.playerOne.choice === myPositions.a1 && Players.playerOne.choice === myPositions.b2 && Players.playerOne.choice === myPositions.c3 || 
        Players.playerOne.choice === myPositions.a1 && Players.playerOne.choice === myPositions.b1 && Players.playerOne.choice === myPositions.c1 || 
        Players.playerOne.choice === myPositions.a2 && Players.playerOne.choice === myPositions.b2 && Players.playerOne.choice === myPositions.c2 || 
        Players.playerOne.choice === myPositions.a3 && Players.playerOne.choice === myPositions.b2 && Players.playerOne.choice === myPositions.c1 || 
        Players.playerOne.choice === myPositions.a3 && Players.playerOne.choice === myPositions.b3 && Players.playerOne.choice === myPositions.c3 || 
        Players.playerOne.choice === myPositions.b1 && Players.playerOne.choice === myPositions.b2 && Players.playerOne.choice === myPositions.b3 || 
        Players.playerOne.choice === myPositions.c1 && Players.playerOne.choice === myPositions.c2 && Players.playerOne.choice === myPositions.c3) {
        Players.playerOne.winner = true;
        Game.gameOver.set(true);
      }
      else if(myPositions.a1 !== '' && myPositions.a2 !== '' && myPositions.a3 !== '' && myPositions.b1 !== '' 
        && myPositions.b3 !== '' && myPositions.c1 !== '' && myPositions.c2 !== '' && myPositions.c3 !== undefined) {
          Game.gameOver.set(true);
      } else if(Players.playerTwo.choice === myPositions.a1 && Players.playerTwo.choice === myPositions.a2 && Players.playerTwo.choice === myPositions.a3 || 
        Players.playerTwo.choice === myPositions.a1 && Players.playerTwo.choice === myPositions.b2 && Players.playerTwo.choice === myPositions.c3 || 
        Players.playerTwo.choice === myPositions.a1 && Players.playerTwo.choice === myPositions.b1 && Players.playerTwo.choice === myPositions.c1 || 
        Players.playerTwo.choice === myPositions.a2 && Players.playerTwo.choice === myPositions.b2 && Players.playerTwo.choice === myPositions.c2 || 
        Players.playerTwo.choice === myPositions.a3 && Players.playerTwo.choice === myPositions.b2 && Players.playerTwo.choice === myPositions.c1 || 
        Players.playerTwo.choice === myPositions.a3 && Players.playerTwo.choice === myPositions.b3 && Players.playerTwo.choice === myPositions.c3 || 
        Players.playerTwo.choice === myPositions.b1 && Players.playerTwo.choice === myPositions.b2 && Players.playerTwo.choice === myPositions.b3 || 
        Players.playerTwo.choice === myPositions.c1 && Players.playerTwo.choice === myPositions.c2 && Players.playerTwo.choice === myPositions.c3) {
        Players.playerTwo.winner = true;
        Game.gameOver.set(true);
      }
      // console.log(Players.playerOne.winner)
      // console.log(Players.playerTwo.winner)
      if(Game.gameOver.getGameOver()) {
        Game.endGame();
      } else {
        Game.switchTurn();
      }
    }

  const reset = () => {
    myPositions.reset();
    squares.forEach(square => {
      square.textContent = '';
    })
    Game.gameOver.set(true);
  }
  
  const init = (() => {
    addSquareListeners();
    // myPositions();
  })();

  return {
    placeInPosition: placeInPosition,
    myPositions : myPositions,
    reset: reset,
  };

})();

  // ai
  // reset button
  // pvp/pve button