// render objects in DOM here

import { startGame } from "./game";
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

function loadGame() {
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
    const boardOne = document.getElementById('gameBoardOne');
    const boardTwo = document.getElementById('gameBoardTwo');
    let divElement = document.createElement('div');
    const img = document.createElement('img');
    img.src = image;
    divElement.classList.add('shipPNGs');
    divElement.id = id;
    divElement.appendChild(img);

    draggableImages().setDraggable(divElement);
    draggableImages().setDrop(boardOne);
    draggableImages().setDrop(boardTwo);

    shipContainer.appendChild(divElement);
  }

  function draggableImages() {
    function setDraggable(div) {
      div.setAttribute('draggable', (true));
      div.addEventListener('dragstart', function(event) {
        drag(event);
      });
      setDrop(div);
    }

    function setDrop(div) {

      div.addEventListener('ondragover', function(event) {
        allowDrop(event);
      })

      div.addEventListener('ondrop', function(event) {
        drop(event);
      })
    }

    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }

    return {
      setDraggable:setDraggable,
      setDrop:setDrop,
    }
  }

  divImages(Carrier,'carrier');
  divImages(BattleShip,'battleship');
  divImages(Cruiser,'cruiser');
  divImages(Submarine,'submarine');
  divImages(Destroyer,'destroyer');
}



  function getCoordinates() {

    let cells = document.querySelectorAll('.gridCells');

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        console.log(cell.id);
      });
    });

  }


  