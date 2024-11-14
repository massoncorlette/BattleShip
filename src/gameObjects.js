// ship, gameboard, player objects go here (along with possibly other objects)


const Ship = function(shipType,length,direction,coordinates) {
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
      return (shipType + " has been Destroyed.");
    }
    return false;
  }

  return {
    hit:hit,
    isSunk:isSunk,
    shipType:shipType,
    length:length,
    direction:direction,
    coordinates:coordinates,
  }
}


const Gameboard = function(computer) {

  const board = []; // [x][y] //keep track of missed attacks, storing attacks here

  const placedShips = [
    [
      [3,4], [4,4], [5,4]
    ],
    [
      [7,2], [7,3], [7,4], [7,5]
    ]
  ];   // adjacency list of placed ships

  function placeShip(shipType,length,direction,coordinates) {

    if (arguments.length < 3) {
      throw new Error('need all ship properties');
    }

    const newShip = Ship(shipType,length,direction,coordinates);
    placedShips.push(newShip);
  }

  function receiveAttack(shipType, attackCoordinates) {

    if (arguments.length < 2) {
      throw new Error('missing ship details');
    }

  }
  return {
    placeShip:placeShip,
    receiveAttack:receiveAttack,
    board:board,
    placedShips:placedShips,
  }
}


export const Player = function(computer) {
  const playersBoard = Gameboard();

  return {
    playersBoard:playersBoard,
  }

}



