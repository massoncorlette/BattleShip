import { testShipPlacement,startGame,commodoreOne } from "./game";


test('null', async () => {
    await startGame();
    const n = testShipPlacement(commodoreOne);
    expect(n).toBeTruthy();
});