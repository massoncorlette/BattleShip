// render objects in DOM here

import interact from 'interactjs'

import { startGame as commodoreOne,commodoreTwo } from "./game";
import { Player } from "./gameObjects";

import Carrier from '../images/Carrier.png';
import Submarine from '../images/Submarine.png';
import Cruiser from '../images/Cruiser.png';
import BattleShip from '../images/Battleship.png';
import Destroyer from '../images/Destroyer.png';




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

function loadGame(gameMode) {
  const main = document.getElementById('main');
  const board = document.createElement('div');
  const txtContainer = document.createElement('div');
  const txt = document.createElement('p');
  txt.id = 'txt';
  txt.innerText = 'TEST TEXT';
  txtContainer.id = 'txtContainer';
  txtContainer.appendChild(txt);
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
  main.appendChild(txtContainer);
  main.appendChild(shipsContainer);
  loadBoard(board);
  loadBoard(boardTwo);
  gamePlay();
  getCoordinates();
}

function gamePlay(gameMode) {

  const playerOne = new Player();
  const playerTwo = new Player();

  const playerOneBoard = document.querySelectorAll('#boardOne, .boardCells');
  const playerTwoBoard = document.querySelectorAll('#boardTwo, .boardCells');

  let currentPlayer = playerOne;
  let currentBoard = playerOneBoard;

  function switchPlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer === playerTwo;
      currentBoard === playerTwoBoard;
    } else {
      currentPlayer === playerOne;
      currentBoard === playerOneBoard;
    }
  }

  playerShips().loadAllShips();


}

function playerShips(currentPlayer) {

  function loadAllShips() {
    function loadShips(image, id) {
      const shipContainer = document.getElementById('shipsContainer');
      let shipElement = document.createElement('div');
      const img = document.createElement('img');
      img.src = image;
      shipElement.classList.add('shipPNGs');
      shipElement.id = id;
      shipElement.appendChild(img);

    shipContainer.appendChild(shipElement);
    draggableImages();
  }

  function draggableImages() {

    const selectAllShips = document.querySelectorAll('.shipPNGs');
    selectAllShips.forEach((ship) => ship.addEventListener('dragstart', dragStart))
  
    function dragStart(e) {
      console.log(e.target)
    }


    function setDrop(ship) {
      const boardOneCells = document.querySelectorAll('#gameBoardOne .gridCells');
      const boardTwoCells = document.querySelectorAll('#gameBoardTwo .gridCells');

      const boardOneRows = document.querySelectorAll('#gameBoardOne .gridRows');
      const boardTwoRows = document.querySelectorAll('#gameBoardOne .gridRows');

      if (currentPlayer === 'playerOne') {
        const selectAllCells = boardOneCells;
        const selectAllRows = boardOneRows;
        dropListenerEvents(selectAllCells,selectAllRows,ship);
      } else if (currentPlayer === 'playerTwo') {
        const selectAllCells = boardTwoCells;
        const selectAllRows = boardTwoRows;
        dropListenerEvents(selectAllCells,selectAllRows,ship);
      }


      function handleCellDragOver(event) {
        event.preventDefault();
        event.target.classList.add('gridCellsDragOver');
      }

      function handleCellDragLeave(event) {
        event.preventDefault();
        event.target.classList.remove('gridCellsDragOver');
      }

      function handleRowDragOver(event) {
        event.preventDefault();
      }

      function handleRowDrop(event, ship) {
        event.preventDefault();

        ship.classList.remove('shipPNGs');
        ship.classList.add('shipPNGsAlt');

        event.target.append(ship);

        ship.draggable = false;
        
      }

      function dropListenerEvents(cells, rows, ship) {

        cells.forEach(cell => {
          cell.addEventListener('dragover', handleCellDragOver);
          cell.addEventListener('dragleave', handleCellDragLeave);
        });

        rows.forEach(row => {
          row.addEventListener('dragover', handleRowDragOver);
          row.addEventListener('drop', event => handleRowDrop(event, ship));
        });
      }
    };
    function highlightCells(cellID, shipLength) {

    }
  };

    loadShips(Carrier,'carrier');
    loadShips(BattleShip,'battleship');
    loadShips(Cruiser,'cruiser');
    loadShips(Submarine,'submarine');
    loadShips(Destroyer,'destroyer');
    }
  return {
    loadAllShips:loadAllShips,
  }
}


  //adding Drag and Drop to the pngs with these immediate function calls

  function getCoordinates() {

    let cells = document.querySelectorAll('.gridCells');

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        console.log(cell.id);
      });
    });

  }

  