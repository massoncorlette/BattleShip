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

  shipPlacements(commodoreOne,"BattleShip",4,"X",[3,5]);
}


function shipPlacements(commodore,shipType,length,direction,coordinates) {

  commodore.playersBoard.placeShip(shipType,length,direction,coordinates);

  console.log(commodore.playersBoard);
  return commodore.playersBoard.placedShips;
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