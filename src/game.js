import { Player } from "./gameObjects";

// game flow logic here

export let commodoreOne = null;
let commodoreTwo = null; // two being human or computer


export function initializeApp() {
    console.log('App initialized with core logic.');
    // render the page with a DOM function here
    // Any additional logic initialization here
    startGame();
  }

export async function startGame() {
  commodoreOne = new Player();

  shipPlacements(commodoreOne,"BattleShip",4,"X"); // get all those properties from DOM logic
}


export function shipPlacements(commodore,shipType,length,direction) {

  const ship = shipType;
  const playersBoard = commodore.playersBoard;

  function generateCoordinates() {
    let coordinates = [];
    coordinates.push(Math.floor(Math.random() * 8) + 1);
    coordinates.push(Math.floor(Math.random() * 8) + 1);

    return coordinates;
  }
  let generatedCoordinates = generateCoordinates();

  console.log(playersBoard.placedShips);

  while (checkShipPlacement(playersBoard.placedShips,length,direction,generatedCoordinates) === false) {
    generatedCoordinates = generateCoordinates();
  }

  // the while statement returning final returned valid coordinates
  // commodore.playersBoard.placeShip(shipType,length,direction,generatedCoordinates);

  console.log(generatedCoordinates);
  return true;

  // console.log(commodore.playersBoard);
  // return commodore.playersBoard.placedShips;
}

export function checkShipPlacement(playersShips,length,direction,coordinates) {

    let testedCoordinates = [];
    testedCoordinates.push(coordinates[0]);
    testedCoordinates.push(coordinates[1]);

    // check for already placed Ships
    if (direction == "X") {
      for (let i=0;i<length;i++) {
        if (checkForPlacedShips(playersShips,testedCoordinates) == true) {
          return false;
        }
        testedCoordinates[0] = testedCoordinates[0] + 1;
      }
    } else if (direction == "Y") {
      for (let i=0;i<length;i++) {
        if (checkForPlacedShips(playersShips,testedCoordinates) == true) {
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

//Pure Function decoupled away from shipPlacements()
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