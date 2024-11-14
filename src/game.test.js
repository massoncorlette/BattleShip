import { checkForOutOfBounds, shipPlacements, startGame,commodoreOne } from "./game";
import { Player } from "./gameObjects";


//test('null', async () => {
    //await startGame();
    //const n = checkForOutOfBounds(commodoreOne.playersBoard.placedShips[0]);
   // expect(n).toBeFalsy();
//});

test('null', () => {
  const testCommodoreOne = new Player();
  testCommodoreOne.playersBoard.placedShips = [
    [
      [3,4], [4,4], [5,4]
    ],
    [
      [7,2], [7,3], [7,4], [7,5]
    ],
    [
      [3,9], [3,8], [3,7], [3,6]
    ],
    [
      [2,2], [3,2], [4,2], [5,2]
    ]
  ]
  const tested = shipPlacements(testCommodoreOne, "test", 5,"Y");

  expect(tested).toBeTruthy();
})

