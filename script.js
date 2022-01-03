const Gameboard = (() => {
  const positions = [
    ,
  ]

  const postionPiece = (() => {
    const positions = document.querySelectorAll('.column');
    positions.forEach(position => {
      position.addEventListener('click', event => {
        console.log('player.choice', position.dataset.location);
        placeInPosition('player.choice', position.dataset.location);
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