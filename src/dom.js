// render objects in DOM here

import { startGame } from "./game";
import { Player } from "./gameObjects";

import Carrier from '../images/Carrier.png';




export function loadScreen() {
  
  const startDiv = document.getElementById('startBtnDiv');
  const startBtn = document.getElementById('startBtn');

  startBtn.addEventListener('mouseenter', () => {
    startBtn.innerHTML = '&#9654 BOOT';
  })

  startBtn.addEventListener('mouseleave', () => {
    startBtn.innerHTML = 'BOOT';
  })

  const onePBtn = document.createElement('button');
  onePBtn.classList.add('modeBtn');
  onePBtn.innerHTML = '1P';
  const twoPBtn = document.createElement('button');
  twoPBtn.classList.add('modeBtn');
  twoPBtn.innerHTML = '2P';


  startBtn.addEventListener('click', () => {
    startDiv.removeChild(startBtn);
    startDiv.id ='startBtnDivOpt';
    startDiv.appendChild(onePBtn);
    startDiv.appendChild(twoPBtn);
  })

  onePBtn.addEventListener('mouseenter', () => {
    onePBtn.innerHTML = '&#9654 1P';
  })

  onePBtn.addEventListener('mouseleave', () => {
    onePBtn.innerHTML = '1P';
  })

  onePBtn.addEventListener('click', (loadGame));

  twoPBtn.addEventListener('mouseenter', () => {
    twoPBtn.innerHTML = '&#9654 2P';
  })

  twoPBtn.addEventListener('mouseleave', () => {
    twoPBtn.innerHTML = '2P';
  })
}

function loadGame() {
  const main = document.getElementById('main');
  const board = document.createElement('div');
  const shipsContainer = document.createElement('div');
  shipsContainer.id = 'shipsContainer';
  board.id = 'gameBoardOne';
  const boardTwo = document.createElement('div');
  boardTwo.id = 'gameBoardTwo';
  board.classList.add('gameBoard');
  boardTwo.classList.add('gameBoard');

  main.innerHTML = '';
  main.appendChild(board);
  main.appendChild(boardTwo);
  main.appendChild(shipsContainer);
  loadBoard(board);
  loadBoard(boardTwo);
  loadShips();
  getCoordinates();
}

function loadBoard(board) {

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

function loadShips() {

  function divImages(image, id) {
    const shipContainer = document.getElementById('shipsContainer');
    const divElement = document.createElement('div');
    const img = document.createElement('image');
    img.src = image;
    divElement.id = id;
    divElement.appendChild(img);

    shipContainer.appendChild(divElement);
  }

  divImages(Carrier,'carrier');

}



  function getCoordinates() {

    let cells = document.querySelectorAll('.gridCells');

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        console.log(cell.id);
      });
    });

  }


  