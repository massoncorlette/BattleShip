// render objects in DOM here

import { startGame,shipPlacements,commodoreOne,commodoreTwo } from "./game";
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
  startGame();
  loadShips('playerOne',commodoreOne);
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
      cell.id = `[${j + 1}][${10 - i}]`;
      row.appendChild(cell);
    } 
    board.appendChild(row);
  }
}

function loadShips(currentPlayer, playerObj) {
  const playerBoard = playerObj.playersBoard;

  function loadImages(image, id, length) {
    const shipContainer = document.getElementById('shipsContainer');
    const boardOne = document.getElementById('gameBoardOne');
    const boardTwo = document.getElementById('gameBoardTwo');
    let shipElement = document.createElement('div');
    const img = document.createElement('img');
    img.src = image;
    shipElement.classList.add('shipPNGs');
    shipElement.id = id;
    shipElement.appendChild(img);

    shipContainer.appendChild(shipElement);
    draggableImages().setDraggable(shipElement,length);
  }

  function draggableImages() {
    function setDraggable(ship,length) {
      ship.addEventListener('dragstart', function(event) {
        setDrop(ship,length);
      })
    }

    function setDrop(ship,length) {
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

      function dropListenerEvents(cells,rows,ship) {

        cells.forEach(cell => {

          cell.addEventListener('dragenter', function(event) { //function color overlaycells form ship length
            event.preventDefault();
            let coordinates = [parseInt(cell.id[1]), parseInt(cell.id[4])];
            let shipDetails = shipPlacementValidity(ship.id,coordinates,length);

            if (shipDetails.shipValidity === true) {
              highlightCells(parseInt(cell.id[1]), parseInt(cell.id[4]), length )
            } else if (shipDetails.shipValidity === false) {
              highlightCells(parseInt(cell.id[1]), parseInt(cell.id[4]), length, false )
            }
          })

          cell.addEventListener('dragover', function(event) {
            event.preventDefault();
          })
  
          cell.addEventListener('dragleave', function(event) {
            event.preventDefault();
            removeHighlightCells(parseInt(cell.id[1]), parseInt(cell.id[4]), length);
          })

          cell.addEventListener('drop', function(event) { //function color overlaycells form ship length
            event.preventDefault();
            let coordinates = [parseInt(cell.id[1]), parseInt(cell.id[4])];
            let shipDetails = shipPlacementValidity(ship.id,coordinates,length);

            if (shipDetails.shipValidity) {
              playerBoard.placeShip(ship.id,shipDetails.length,"X",coordinates);
              highlightCells(parseInt(cell.id[1]), parseInt(cell.id[4]), length );
            } else {
              removeHighlightCells(parseInt(cell.id[1]), parseInt(cell.id[4]), length);
              console.log("false");
            }

          });
        });
  
      };
      
      function highlightCells(cellColumnID, cellRowID, shipLength, valid) {
        for (let i = 1; i < shipLength; i++) {  
          const currentColumn = parseInt(cellColumnID, 10) + i - 1;
          const element = document.getElementById(`[${currentColumn}][${cellRowID}]`);
          if (element) {
            element.classList.add('gridCellsDragOver');
            if (valid === false) {
              element.classList.add('gridCellsInvalid');
            }
          }
        }
      }

      function removeHighlightCells(cellColumnID, cellRowID, shipLength) {
        for (let i = 1; i < shipLength; i++) {  
          const currentColumn = parseInt(cellColumnID, 10) + i - 1;
          const element = document.getElementById(`[${currentColumn}][${cellRowID}]`);
          if (element) {
            element.classList.remove('gridCellsDragOver');

            if(element.classList.contains('gridCellsInvalid')) {
              element.classList.remove('gridCellsInvalid')
            }
          }
        }
      }

      // using shipPlacements from game.js to check ship validity for player gameboard obj
      function shipPlacementValidity(shipType,coordinates) {
        let shipValidity = null;
        if (shipType === "carrier") {
          shipValidity = shipPlacements(playerBoard,"carrier",length,"X",coordinates);
        }

        if (shipType === "battleship") {
          shipValidity = shipPlacements(playerBoard,"battleship",length,"x",coordinates);
        }

        if (shipType === "cruiser") {
          shipValidity = shipPlacements(playerBoard,"cruiser",length,"x",coordinates);
        }

        if (shipType === "submarine") {
          shipValidity = shipPlacements(playerBoard,"submarine",length,"x",coordinates);
        }

        if (shipType === "destroyer") {
          shipValidity = shipPlacements(playerBoard,"destroyer",length,"x",coordinates);
        }
        return {
          shipValidity:shipValidity,
        }
      }
      console.log(playerObj);
    }

    return {
      setDraggable:setDraggable,
    }
  }

  loadImages(Carrier,'carrier', 5);
  loadImages(BattleShip,'battleship', 4);
  loadImages(Cruiser,'cruiser', 3);
  loadImages(Submarine,'submarine', 3);
  loadImages(Destroyer,'destroyer', 2);
}
  function getCoordinates() {

    let cells = document.querySelectorAll('.gridCells');

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        console.log(cell.id);
      });
    });

  }

  