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

  shipPlacements(commodoreOne,"BattleShip",4,"X");
}


function shipPlacements(commodore,shipType,length,direction) {

  function generateCoordinates() {
    let coordinates = [];
    coordinates[0].push(Math.floor(Math.random() * 8) + 1);
    coordinates[1].push(Math.floor(Math.random() * 8) + 1);

    return coordinates;
  }
  let generatedCoordinates = generateCoordinates();

  while (checkShipPlacement(commodore.placedShips,length,direction,generatedCoordinates) === false) {
    generatedCoordinates = generateCoordinates();
  }

  // the while statement returning final returned valid coordinates
  commodore.playersBoard.placeShip(shipType,length,direction,generatedCoordinates);

  console.log(commodore.playersBoard);
  return commodore.playersBoard.placedShips;
}

function checkShipPlacement(playersShips,length,direction,coordinates) {

  for (let i=0;i<length;i++) {
    if (direction === "X") {
      if (checkForPlacedShips(playersShips,(coordinates[0]) + i) === true) {
        return false;
      }
    } else if (direction === "Y") {
      if (checkForPlacedShips(playersShips,(coordinates[1]) + i) === true) {
        return false;
      }
    }
  }
  return true;
}

function checkForPlacedShips(playersPlacedShips, coordinates) {
    for (let i = 0; i < playersPlacedShips[i].length; i++) {
        for (let j = 0; j < playersPlacedShips[i][j].length; j++) {
            if (playersPlacedShips[i][j][0] === coordinates[0] && playersPlacedShips[i][j][1] === coordinates[1]) {
                return true;  
            }
        }
    }
  return false;  
}

//Pure Function decoupled away from shipPlacements()
export function testShipPlacement(commodore) {
  console.log(commodore);

    if (commodore.direction === "X") {
      if (commodore.coordinates[1] + commodore.length > 8) {
        return false;
      }
    } else if (commodore.direction === "Y") {
      if (commodore.coordinates[0] + commodore.length > 8) {
        return false;
      }
    }
    return true;
}