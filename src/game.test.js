import { testShipPlacement,startGame,commodoreOne } from "./game";


test('null', async () => {
    await startGame();
    const n = testShipPlacement(commodoreOne.playersBoard.placedShips[0]);
    expect(n).toBeFalsy();
});