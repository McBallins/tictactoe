const Gameboard = {
  positions: [],
  placeInPosition: function(player, location) {
    this.positions[location] = player;
    console.log(player + ' has been placed on ' + location);
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
};