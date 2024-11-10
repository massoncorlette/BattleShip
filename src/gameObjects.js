// ship, gameboard, player objects go here (along with possibly other objects)


const Ship = function(length,direction,coordinates) {
  const hitDetection = 0;

  function hit(damage) {
    if (damage) {
      hitDetection++;
      return true;
    }
    return false;
  }

  function isSunk() {
    if (hitDetection >= length) {
      return true;
    }
    return false;
  }

  return {
    hit:hit,
    isSunk:isSunk,
    direction:direction,
    coordinates:coordinates,
  }
}


const Gameboard = function() {

  //keep track of missed attacks ?
  const board = [10][10]; // [x][y]

  // storing ship objects
  // depending on ships direction, hits will be on x or y axis
  const placedShips = [];

  function placeShip(length,direction,coordinates) {
    const newShip = Ship(length,direction,coordinates);

    
  }

  function receiveAttack(coordinates,ship) {

  }

}


const Player = function(computer) {
  const playersBoard = Gameboard();

}



