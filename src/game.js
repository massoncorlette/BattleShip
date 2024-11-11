import { Player } from "./gameObjects";

// game flow logic here

let commodoreOne = null;
let commodoreTwo = null; // two being human or computer


export function initializeApp() {
    console.log('App initialized with core logic.');
    // render the page with a DOM function here
    // Any additional logic initialization here
    startGame();
  }

function startGame() {
  commodoreOne = new Player();
  commodoreTwo = new Player();

  shipPlacements(commodoreOne);
  shipPlacements(commodoreTwo);
}


function shipPlacements(commodore) {
  const direction = "X";
  const coordinates = [3,4];
  const shipType = 'BattleShip';

  commodore.playersBoard.placeShip(shipType,4,direction,coordinates);

  console.log(commodore);
  return commodore;
}


function testShipPlacement() {


}