import { Player } from "./gameObjects";

// game flow logic here

export let commodoreOne = null;
export let commodoreTwo = null; // two being human or computer


export function initializeApp() {
  console.log('App initialized with core logic.');
  // render the page with a DOM function here
  // Any additional logic initialization here
 
}

export async function startGame() {
  commodoreOne = new Player();
  commodoreTwo = new Player();
}

export function shipPlacements(playersBoard,shipType,length,direction,coordinates) {

  if (checkShipPlacement(playersBoard.listOfShipsCoordinates,length,direction,coordinates) === false) {
    return false;
  }
  // the while statement returning final returned valid coordinates
  playersBoard.placeShip(shipType,length,direction,coordinates);

  return true;
  // return commodore.playersBoard.placedShips;
}

// check for already placed Ships
export function checkShipPlacement(allShipCoordinates,length,direction,coordinates) {

  let testedCoordinates = [];
  testedCoordinates.push(coordinates[0]);
  testedCoordinates.push(coordinates[1]);

  if (direction == "X") {
    for (let i=0;i<length;i++) {
      if (checkForPlacedShips(allShipCoordinates,testedCoordinates) == true) {
        return false;
      }
      testedCoordinates[0] = testedCoordinates[0] + 1;
    }
  } else if (direction == "Y") {
    for (let i=0;i<length;i++) {
      if (checkForPlacedShips(allShipCoordinates,testedCoordinates) == true) {
        return false;
      }
      testedCoordinates[1] = testedCoordinates[1] + 1;
    }
  }
  // check for ship staying in bounds
  if (checkForOutOfBounds(coordinates,length,direction) == false) {
    return false;
  }
  return true;
}

export function checkForPlacedShips(playersPlacedShips, coordinates) {
  for (let i = 0; i < playersPlacedShips.length; i++) {
    for (let j = 0; j < playersPlacedShips[i].length; j++) {
      if (playersPlacedShips[i][j][0] === coordinates[0] && playersPlacedShips[i][j][1] === coordinates[1]) {
        return true;  
      }
    }
  }
  return false;  
}

export function checkForOutOfBounds(coordinates,length,direction) {

  if (direction === "X") {
    if ((coordinates[0] + length) > 11) {
      return false;
    }
  } else if (direction === "Y") {
    if ((coordinates[1] + length) > 11) {
      return false;
    }
  }
  return true;
}