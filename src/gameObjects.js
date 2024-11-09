// ship, gameboard, player objects go here (along with possibly other objects)


const Ship = function() {
  const shipLength = null;
  const hitDetection = 0;

  function hit(damage) {
    if (damage) {
      hitDetection++;
      return true;
    }
    return false;
  }

  function isSunk() {
    if (hitDetection >= shipLength) {
      return true;
    }
    return false;
  }

  return {
    hit:hit,
    isSunk:isSunk
  }
}


const Gameboard = function() {

  //keep track of missed attacks ?

  function receiveAttack(coordinates,ship) {

  }

}


const Player = function() {
  const playersBoard = Gameboard();



}



