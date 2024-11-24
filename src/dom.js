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
    getCoordinates();
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
        cell.id = [j + 1,10 - i];
        row.appendChild(cell);
      } 
      board.appendChild(row);
    }
  }

  function getCoordinates() {

    let cells = document.querySelectorAll('.gridCells');

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        console.log(cell.id);
      });
    });

  }


  