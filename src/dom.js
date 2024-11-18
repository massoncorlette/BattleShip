// render objects in DOM here

import { startGame } from "./game";
import { Player } from "./gameObjects";



export function setupDOM() {
  
    const startBtn = document.getElementById('startBtn');

    startBtn.addEventListener('click', loadGame)
  }

  function loadGame() {
    const main = document.getElementById('main');
    const board = document.createElement('div');
    board.id = 'gameBoard';

    main.innerHTML = '';
    main.appendChild(board);
    loadBoard();

  }

  function loadBoard() {

    let board = document.querySelector('#gameBoard');

    for (let i=0;i<10;i++) {
      const row = document.createElement('div');
      row.classList.add('gridRows');
      board.appendChild(row);
  
      for (let j=0;j<10;j++) {
        const cell = document.createElement('div');
        cell.classList.add('gridCells');
        cell.id = [i + 1,j + 1];
        row.appendChild(cell);
      } 
      board.appendChild(row);
    }
  }


  