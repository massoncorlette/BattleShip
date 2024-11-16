// ship, gameboard, player objects go here (along with possibly other objects)


const Ship = function(shipType,length,direction,coordinates) {
  const hitDetection = 0;
  const allCoordinates = []; // once ship is placed valid, it's coordinates here
  let status = true;

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

  function getAllShipCoordinates() {
    if (direction == "X"){
      for (let i=0;i<length;i++) {
        allCoordinates.push([coordinates[0] + i,coordinates[1]])
      }
    } else if (direction == "Y"){
        for (let i=0;i<length;i++) {
          allCoordinates.push([coordinates[0],coordinates[1] + i])
        }
    }
    console.log(allCoordinates);
    return allCoordinates;
  };
  return {
    hit:hit,
    isSunk:isSunk,
    getAllShipCoordinates:getAllShipCoordinates,
    shipType:shipType,
    length:length,
    direction:direction,
    coordinates:coordinates,
    allCoordinates,
  }
}


export const Gameboard = function(computer) {

  const attacks = []; // [x][y] //keep track of missed attacks, storing attacks here?

  const ships = [];
  ships.push(new Ship("Carrier", 5), new Ship("Battleship", 4), new Ship("Cruiser", 3), new Ship("Submarine", 3), new Ship("Destroyer", 2));

  const placedShips = [];   

  const listOfShipsCoordinates = []; //adjacency list of coordinates for all placed ships


  function placeShip(shipType,length,direction,coordinates) {

    if (arguments.length < 3) {
      throw new Error('need all ship properties');
    }

    const newShip = Ship(shipType,length,direction,coordinates);

    const allShipCoordinates = newShip.getAllShipCoordinates(); // returning and initiating function
    listOfShipsCoordinates.push(allShipCoordinates);

    placedShips.push(newShip);
  }

  function shipStatus() {
    for (let i=0;i<placedShips;i++) {
      if (placedShips.status === true) {
        return true;
      }
    }
    return false;
  }

  function receiveAttack(attackCoordinates) {

    if (arguments.length < 1) {
      throw new Error('missing coordinates');
    }
    for (let i=0;i<placedShips.length;i++) {
      for (let j=0;j<placedShips[i].length;j++) {
        if (placedShips[i].coordinates[j][0] == attackCoordinates[0] && placedShips[i].coordinates[j][1] == attackCoordinates[0]) {
          attacks.push(coordinates);

          if (shipStatus() === false) {
            true;
          } else {
            return placedShips[i];
          }
        }
      }
    }
    attacks.push(coordinates);
    return false;
  }
  return {
    ships:ships,
    placeShip:placeShip,
    receiveAttack:receiveAttack,
    attacks:attacks,
    placedShips:placedShips,
    listOfShipsCoordinates:listOfShipsCoordinates,
  }
}


export const Player = function(computer) {
  const playersBoard = Gameboard();

  return {
    playersBoard:playersBoard,
  }

}



