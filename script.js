const Gameboard = (() => {
  const positions = []

  const postionPiece = (() => {
    const positions = document.querySelectorAll('.column');
    positions.forEach(position => {
      position.addEventListener('click', event => {
        console.log(player.choice, position.dataset.location);
        placeInPosition(player.choice, position.dataset.location);
      })
    })
  })();

  const placeInPosition = function(symbol, selectedPositon) {
    if(positions[selectedPositon] === undefined) {
    positions[selectedPositon] = symbol;
    console.log(symbol + ' has been placed on ' + selectedPositon);
    const placement = document.querySelector(`[data-location="${selectedPositon}"]`);
    placement.textContent = symbol;
    } else {
      console.log(`There is a ${this.positions[selectedPositon]} already there!` );
    }
  }
})();

const Game = (() => {
  checkEndofGame = function() {
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
    } else if(player.choice === positions[0] && player.choice === positions[1] && player.choice === positions[2] || 
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
});

const players = (() => {
  const Player = (turnAvailable, choice) => {
    let turnAvailable = turnAvailable;
    let choice = choice;
  }

  let currentPlayer = 'playerOne';
  const playerOne = Player('x');
  const playerTwo = Player('o');

  const switchTurns = () => {
    if(currentPlayer === 'playerOne') {
      currentPlayer = 'playerTwo'
    } else {
      currentPlayer = 'playerOne'
    }
  }
})();