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
    Game.switchTurn();
    } else {
      console.log(`There is a ${this.positions[location]} already there!` );
    };
  };

  return {
    placeInPosition: placeInPosition
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
      if(playerOne.choice === positions[0] && playerOne.choice === positions[1] && playerOne.choice === positions[2] || 
        playerOne.choice === positions[0] && playerOne.choice === positions[4] && playerOne.choice === positions[8] || 
        playerOne.choice === positions[0] && playerOne.choice === positions[3] && playerOne.choice === positions[6] || 
        playerOne.choice === positions[1] && playerOne.choice === positions[4] && playerOne.choice === positions[7] || 
        playerOne.choice === positions[2] && playerOne.choice === positions[4] && playerOne.choice === positions[6] || 
        playerOne.choice === positions[2] && playerOne.choice === positions[5] && playerOne.choice === positions[8] || 
        playerOne.choice === positions[3] && playerOne.choice === positions[4] && playerOne.choice === positions[5] || 
        playerOne.choice === positions[6] && playerOne.choice === positions[7] && playerOne.choice === positions[8]) {
        console.log('you win');
      }
      else if(Gameboard.positions.length === 9) {
        console.log('you tied');
      } else if(playerTwo.choice === positions[0] && PlayerTwo.choice === positions[1] && PlayerTwo.choice === positions[2] || 
        playerTwo.choice === positions[0] && playerTwo.choice === positions[4] && playerTwo.choice === positions[8] || 
        playerTwo.choice === positions[0] && playerTwo.choice === positions[3] && playerTwo.choice === positions[6] || 
        playerTwo.choice === positions[1] && playerTwo.choice === positions[4] && playerTwo.choice === positions[7] || 
        playerTwo.choice === positions[2] && playerTwo.choice === positions[4] && playerTwo.choice === positions[6] || 
        playerTwo.choice === positions[2] && playerTwo.choice === positions[5] && playerTwo.choice === positions[8] || 
        playerTwo.choice === positions[3] && playerTwo.choice === positions[4] && playerTwo.choice === positions[5] || 
        playerTwo.choice === positions[6] && playerTwo.choice === positions[7] && playerTwo.choice === positions[8]) {
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