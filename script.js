const Gameboard = {
  positions: [
    ,
  ],

  position: (function() {
    const positions = document.querySelectorAll('.column');
    positions.forEach(position => {
      position.addEventListener('click', event => {
        console.log('player.choice', position.dataset.location);
        Gameboard.placeInPosition('player.choice', position.dataset.location);
      })
    })
  })(),

  placeInPosition: function(symbol, selectedPositon) {
    if(Gameboard.positions[selectedPositon] === undefined) {
    Gameboard.positions[selectedPositon] = symbol;
    console.log(symbol + ' has been placed on ' + selectedPositon);
    console.log((`[data-location=’${selectedPositon}’]`));
    const placement = document.querySelector(`[data-location="${selectedPositon}"]`);
    console.log(placement);
    placement.textContent = symbol;
    } else {
      console.log(`There is a ${this.positions[selectedPositon]} already there!` );
    }
  },
  // we have 9 lactations
  // each position has three possible states- x, o, null
  // each position can be an Object
  // we take 2 inputs, position on the board and player(x or o)
  // check to see if the position is available
  // store an object that saves the new state of the position
  // write x or o into the corresponding position
  // when three xs or os are place in a row, one player wins
  // if the board is full and there is not a row of xs or os, tie
  // const check = console.log('gameboard accesible');
  // return 'check';
}

const Game = {
  checkEndofGame: function () {
    if(humanPlayer.choice === positions[0] && humanPlayer.choice === positions[1] && humanPlayer.choice === positions[2] || 
      humanPlayer.choice === positions[0] && humanPlayer.choice === positions[4] && humanPlayer.choice === positions[8] || 
      humanPlayer.choice === positions[0] && humanPlayer.choice === positions[3] && humanPlayer.choice === positions[6] || 
      humanPlayer.choice === positions[1] && humanPlayer.choice === positions[4] && humanPlayer.choice === positions[7] || 
      humanPlayer.choice === positions[2] && humanPlayer.choice === positions[4] && humanPlayer.choice === positions[6] || 
      humanPlayer.choice === positions[2] && humanPlayer.choice === positions[5] && humanPlayer.choice === positions[8] || 
      humanPlayer.choice === positions[3] && humanPlayer.choice === positions[4] && humanPlayer.choice === positions[5] || 
      humanPlayer.choice === positions[6] && humanPlayer.choice === positions[7] && humanPlayer.choice === positions[8]) {
      console.log('you win');
    }
    else if(Gameboard.positions.length === 9) {
      console.log('you tied');
    } else if(player.choice === positions[0] && player.choice === positions[1] && player.choice === positions[2] || 
      ai.choice === positions[0] && ai.choice === positions[4] && ai.choice === positions[8] || 
      ai.choice === positions[0] && ai.choice === positions[3] && ai.choice === positions[6] || 
      ai.choice === positions[1] && ai.choice === positions[4] && ai.choice === positions[7] || 
      ai.choice === positions[2] && ai.choice === positions[4] && ai.choice === positions[6] || 
      ai.choice === positions[2] && ai.choice === positions[5] && ai.choice === positions[8] || 
      ai.choice === positions[3] && ai.choice === positions[4] && ai.choice === positions[5] || 
      ai.choice === positions[6] && ai.choice === positions[7] && ai.choice === positions[8]) {
      console.log('you lose');
    }
  }
}