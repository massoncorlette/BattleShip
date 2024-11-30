/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadScreen: () => (/* binding */ loadScreen)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObjects */ "./src/gameObjects.js");
/* harmony import */ var _images_Carrier_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Carrier.png */ "./images/Carrier.png");
/* harmony import */ var _images_Submarine_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Submarine.png */ "./images/Submarine.png");
/* harmony import */ var _images_Cruiser_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Cruiser.png */ "./images/Cruiser.png");
/* harmony import */ var _images_Battleship_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Battleship.png */ "./images/Battleship.png");
/* harmony import */ var _images_Destroyer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Destroyer.png */ "./images/Destroyer.png");
// render objects in DOM here








function loadScreen() {
  var startDiv = document.getElementById('startBtnDiv');
  var startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('mouseenter', function () {
    startBtn.innerHTML = '&#9654 BOOT';
  });
  startBtn.addEventListener('mouseleave', function () {
    startBtn.innerHTML = 'BOOT';
  });
  var onePBtn = document.createElement('button');
  onePBtn.classList.add('modeBtn');
  onePBtn.innerHTML = '1P';
  var twoPBtn = document.createElement('button');
  twoPBtn.classList.add('modeBtn');
  twoPBtn.innerHTML = '2P';
  startBtn.addEventListener('click', function () {
    startDiv.removeChild(startBtn);
    startDiv.id = 'startBtnDivOpt';
    startDiv.appendChild(onePBtn);
    startDiv.appendChild(twoPBtn);
  });
  onePBtn.addEventListener('mouseenter', function () {
    onePBtn.innerHTML = '&#9654 1P';
  });
  onePBtn.addEventListener('mouseleave', function () {
    onePBtn.innerHTML = '1P';
  });
  onePBtn.addEventListener('click', loadGame);
  twoPBtn.addEventListener('mouseenter', function () {
    twoPBtn.innerHTML = '&#9654 2P';
  });
  twoPBtn.addEventListener('mouseleave', function () {
    twoPBtn.innerHTML = '2P';
  });
}
function loadGame(gameMode) {
  var main = document.getElementById('main');
  var board = document.createElement('div');
  var txtContainer = document.createElement('div');
  var txt = document.createElement('p');
  txt.id = 'txt';
  txt.innerText = 'TEST TEXT';
  txtContainer.id = 'txtContainer';
  txtContainer.appendChild(txt);
  var shipsContainer = document.createElement('div');
  shipsContainer.id = 'shipsContainer';
  board.id = 'gameBoardOne';
  var boardTwo = document.createElement('div');
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
  loadShips('playerOne');
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.startGame)();
  getCoordinates();
}
function loadBoard(board) {
  for (var i = 0; i < 10; i++) {
    var row = document.createElement('div');
    row.classList.add('gridRows');
    board.appendChild(row);
    for (var j = 0; j < 10; j++) {
      var cell = document.createElement('div');
      cell.classList.add('gridCells');
      cell.id = [j + 1, 10 - i];
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}
function loadShips(currentPlayer) {
  function divImages(image, id) {
    var shipContainer = document.getElementById('shipsContainer');
    var boardOne = document.getElementById('gameBoardOne');
    var boardTwo = document.getElementById('gameBoardTwo');
    var shipElement = document.createElement('div');
    var img = document.createElement('img');
    img.src = image;
    shipElement.classList.add('shipPNGs');
    shipElement.id = id;
    shipElement.appendChild(img);
    shipContainer.appendChild(shipElement);
    draggableImages().setDraggable(shipElement);
  }
  function draggableImages() {
    function setDraggable(ship) {
      ship.draggable = 'true';
      ship.addEventListener('dragstart', function (event) {
        console.log(event);
        setDrop(ship);
      });
    }
    function setDrop(ship) {
      var boardOneCells = document.querySelectorAll('#gameBoardOne .gridCells');
      var boardTwoCells = document.querySelectorAll('#gameBoardTwo .gridCells');
      var boardOneRows = document.querySelectorAll('#gameBoardOne .gridRows');
      var boardTwoRows = document.querySelectorAll('#gameBoardOne .gridRows');
      if (currentPlayer === 'playerOne') {
        var selectAllCells = boardOneCells;
        var selectAllRows = boardOneRows;
        dropListenerEvents(selectAllCells, selectAllRows);
      } else if (currentPlayer === 'playerTwo') {
        var _selectAllCells = boardTwoCells;
        var _selectAllRows = boardTwoRows;
        dropListenerEvents(_selectAllCells, _selectAllRows);
      }
      function dropListenerEvents(cells, rows) {
        cells.forEach(function (cell) {
          cell.addEventListener('dragover', function (event) {
            event.preventDefault();
            cell.classList.add('gridCellsDragOver');
          });
          cell.addEventListener('dragleave', function (event) {
            event.preventDefault();
            cell.classList.remove('gridCellsDragOver');
          });
        });
        rows.forEach(function (row) {
          row.addEventListener('dragover', function (event) {
            event.preventDefault();
          });
        });
        rows.forEach(function (row) {
          row.addEventListener('drop', function (event) {
            ship.style.position = 'absolute';
            row.append(ship);
            ship.draggable = false;
            ship.removeEventListener('dragstart', handleDragStart);
          });
        });
        function handleDragStart(event) {
          console.log(event);
          setDrop(ship);
        }
      }
      function highlightCells(cellID, shipLength) {}
    }
    return {
      setDraggable: setDraggable
    };
  }
  divImages(_images_Carrier_png__WEBPACK_IMPORTED_MODULE_2__, 'carrier');
  divImages(_images_Battleship_png__WEBPACK_IMPORTED_MODULE_5__, 'battleship');
  divImages(_images_Cruiser_png__WEBPACK_IMPORTED_MODULE_4__, 'cruiser');
  divImages(_images_Submarine_png__WEBPACK_IMPORTED_MODULE_3__, 'submarine');
  divImages(_images_Destroyer_png__WEBPACK_IMPORTED_MODULE_6__, 'destroyer');
}
function getCoordinates() {
  var cells = document.querySelectorAll('.gridCells');
  cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
      console.log(cell.id);
    });
  });
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkForOutOfBounds: () => (/* binding */ checkForOutOfBounds),
/* harmony export */   checkForPlacedShips: () => (/* binding */ checkForPlacedShips),
/* harmony export */   checkShipPlacement: () => (/* binding */ checkShipPlacement),
/* harmony export */   commodoreOne: () => (/* binding */ commodoreOne),
/* harmony export */   commodoreTwo: () => (/* binding */ commodoreTwo),
/* harmony export */   initializeApp: () => (/* binding */ initializeApp),
/* harmony export */   placeAllShips: () => (/* binding */ placeAllShips),
/* harmony export */   shipPlacements: () => (/* binding */ shipPlacements),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObjects */ "./src/gameObjects.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


// game flow logic here

var commodoreOne = null;
var commodoreTwo = null; // two being human or computer

function initializeApp() {
  console.log('App initialized with core logic.');
  // render the page with a DOM function here
  // Any additional logic initialization here
}
function startGame() {
  return _startGame.apply(this, arguments);
}
function _startGame() {
  _startGame = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          commodoreOne = new _gameObjects__WEBPACK_IMPORTED_MODULE_0__.Player();
          commodoreTwo = new _gameObjects__WEBPACK_IMPORTED_MODULE_0__.Player();
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _startGame.apply(this, arguments);
}
function placeAllShips(playersBoard) {
  var direction = 'X';
  playersBoard.ships.forEach(function (ship) {
    shipPlacements(playersBoard, ship.shipType, ship.length, direction);
  });
}
function shipPlacements(playersBoard, shipType, length, direction, coordinates) {
  if (checkShipPlacement(playersBoard.listOfShipsCoordinates, length, direction, coordinates) === false) {
    return false;
  }
  // the while statement returning final returned valid coordinates
  playersBoard.placeShip(shipType, length, direction, coordinates);
  return true;
  // return commodore.playersBoard.placedShips;
}

// check for already placed Ships
function checkShipPlacement(allShipCoordinates, length, direction, coordinates) {
  var testedCoordinates = [];
  testedCoordinates.push(coordinates[0]);
  testedCoordinates.push(coordinates[1]);
  if (direction == "X") {
    for (var i = 0; i < length; i++) {
      if (checkForPlacedShips(allShipCoordinates, testedCoordinates) == true) {
        return false;
      }
      testedCoordinates[0] = testedCoordinates[0] + 1;
    }
  } else if (direction == "Y") {
    for (var _i = 0; _i < length; _i++) {
      if (checkForPlacedShips(allShipCoordinates, testedCoordinates) == true) {
        return false;
      }
      testedCoordinates[1] = testedCoordinates[1] + 1;
    }
  }
  // check for ship staying in bounds
  if (checkForOutOfBounds(coordinates, length, direction) == false) {
    return false;
  }
  return true;
}
function checkForPlacedShips(playersPlacedShips, coordinates) {
  for (var i = 0; i < playersPlacedShips.length; i++) {
    for (var j = 0; j < playersPlacedShips[i].length; j++) {
      if (playersPlacedShips[i][j][0] === coordinates[0] && playersPlacedShips[i][j][1] === coordinates[1]) {
        return true;
      }
    }
  }
  return false;
}
function checkForOutOfBounds(coordinates, length, direction) {
  if (direction === "X") {
    if (coordinates[0] + length > 11) {
      return false;
    }
  } else if (direction === "Y") {
    if (coordinates[1] + length > 11) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./src/gameObjects.js":
/*!****************************!*\
  !*** ./src/gameObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
// ship, gameboard, player objects go here (along with possibly other objects)

var Ship = function Ship(shipType, length, direction, coordinates) {
  var hitDetection = 0;
  var allCoordinates = []; // once ship is placed valid, it's coordinates here
  var status = true;
  function hit(damage) {
    if (damage) {
      +hitDetection, _readOnlyError("hitDetection");
      return true;
    }
    return false;
  }
  function isSunk() {
    if (hitDetection >= length) {
      return shipType + " has been Destroyed.";
    }
    return false;
  }
  function getAllShipCoordinates() {
    if (direction == "X") {
      for (var i = 0; i < length; i++) {
        allCoordinates.push([coordinates[0] + i, coordinates[1]]);
      }
    } else if (direction == "Y") {
      for (var _i = 0; _i < length; _i++) {
        allCoordinates.push([coordinates[0], coordinates[1] + _i]);
      }
    }
    return allCoordinates;
  }
  ;
  return {
    hit: hit,
    isSunk: isSunk,
    getAllShipCoordinates: getAllShipCoordinates,
    shipType: shipType,
    length: length,
    direction: direction,
    coordinates: coordinates,
    allCoordinates: allCoordinates
  };
};
var Gameboard = function Gameboard(computer) {
  var gameBoard = []; // [x][y] //keep track of missed attacks, storing attacks here?

  var ships = [];
  var placedShips = [];
  var listOfShipsCoordinates = []; //adjacency list of coordinates for all placed ships

  function makeBoard() {
    for (var i = 0; i < 10; i++) {
      var newColumn = [];
      for (var j = 0; j < 10; j++) {
        var newCell = [];
        newColumn.push(newCell);
      }
      gameBoard.push(newColumn);
    }
    console.log(gameBoard);
  }
  makeBoard();
  function placeShip(shipType, length, direction, coordinates) {
    if (arguments.length < 4) {
      throw new Error('need all ship properties');
    }
    var newShip = Ship(shipType, length, direction, coordinates);
    var allShipCoordinates = newShip.getAllShipCoordinates(); // returning and initiating function
    listOfShipsCoordinates.push(allShipCoordinates);
    placedShips.push(newShip);
  }
  function shipStatus() {
    for (var i = 0; i < placedShips; i++) {
      if (placedShips.status === true) {
        return true;
      }
    }
    return false;
  }
  function receiveAttack(attackCoordinates) {
    if (arguments.length < 1) {
      throw new Error('missing coordinates');
    }
    for (var i = 0; i < placedShips.length; i++) {
      for (var j = 0; j < placedShips[i].length; j++) {
        if (placedShips[i].coordinates[j][0] == attackCoordinates[0] && placedShips[i].coordinates[j][1] == attackCoordinates[0]) {
          //ATTACK SHIP HERE
          //PUSH MISSED ATTACK HERE TO GAMEBOARD

          placedShips[i].hit(true);
          var checkShipStatus = placedShips[i].isSunk();
          if (checkShipStatus != false) {
            // return true if all ships are sunk
            if (shipStatus() === false) {
              true;
            }
            // else returns the sunked ship
            return checkShipStatus;
          }
        }
      }
    }

    //PUSH MISSED ATTACK HERE TO GAMEBOARD

    return false;
  }
  return {
    ships: ships,
    makeBoard: makeBoard,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    gameBoard: gameBoard,
    placedShips: placedShips,
    listOfShipsCoordinates: listOfShipsCoordinates
  };
};
var Player = function Player(computer) {
  var playersBoard = Gameboard();
  return {
    playersBoard: playersBoard
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {border: solid red 1px;}


:root {
  --primary-color: rgb(12, 36, 12);
  --secondary-color:rgb(80, 200, 45);
  --third-color:rgb(12, 54, 0);
}


body {
  height: 100vh;
  margin: 0%;
  max-width: 100%;
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--primary-color);
}

#main {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(100, 1%);
  grid-template-rows: repeat(100, 1%);
}

h1 {
  color: var(--secondary-color);
}

p {
  color: var(--secondary-color);
}


img:hover {
  cursor: pointer;
}

#startDisplay {
  grid-row: 30/70;
  grid-column: 30/70;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid var(--secondary-color) 1px;
}

#startBtnDiv {
  width: 40%;
  height: 30%;
}

#startBtnDivOpt {
  width: 60%;
  height: 30%;
  display:flex;
  justify-content: space-around;
  align-items: center;
}

#startBtn {
  width: 100%;
  height: 100%;
  color: var(--secondary-color);
  background: none;
  letter-spacing: 0.2em;
  text-align: center;
  border: solid var(--secondary-color) 1px;

}

Button:hover {
  cursor: pointer;

}


.modeBtn {
  width: 100%;
  height: 100%;
  color: var(--secondary-color);
  background: none;
  letter-spacing: 0.2em;
  text-align: center;
  border: solid var(--secondary-color) 1px;
}

.gameBoard {
  display: grid;
  position: relative;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(10,1fr);
}

#gameBoardOne {
  position: relative;
  grid-row: 5/60;
  grid-column: 5/48;
}

#gameBoardTwo {
  position: relative;
  grid-row: 5/60;
  grid-column: 52/95;
}

#txtContainer {
  grid-row: 64/71;
  grid-column: 5/95;
  background-color: var(--third-color);
  border: solid var(--secondary-color) 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#shipsContainer {
  grid-row: 75/95;
  grid-column: 5/95;
  border: solid var(--secondary-color) 1px;
  display: grid;
  grid-template-columns: repeat(10,10%);
  grid-template-rows: repeat(4,25%);
  background-color: var(--third-color);
}

.shipPNGs {
  display: flex;
  align-items: center;
  justify-content: center;
}

.shipPNGsAlt {
  color: red;
  opacity: 0.3;
  position: absolute;
}

#carrier {
  grid-column: 1/6;
  grid-row: span 2;
}

#battleship {
  grid-column: 6/10;
  grid-row: span 2;
}

#cruiser {
  grid-column: 1/4;
  grid-row: span 2;
}

#submarine {
  grid-column: 4/7;
  grid-row: span 2;
}

#destroyer {
  grid-column: 7/10;
  grid-row: span 2;
}

#carrier img {
  width: 50%;
  height: 50%;
}

#battleship img {
  width: 50%;
  height: 50%;
}

#cruiser img {
  width: 50%;
  height: 50%;
}

#submarine img {
  width: 50%;
  height: 50%;
}

#destroyer img {
  width: 50%;
  height: 50%;
}

.gridRows {
  display: grid;
  grid-row: span 1;
  grid-column: span 10;
  grid-template-columns: repeat(10,1fr);
  position: relative;
  z-index: 1;
}

.gridCells {
  border: solid var(--secondary-color) 1px;
  position: relative;
  z-index: 0;
}

.gridCellsDragOver {
  background-color: var(--secondary-color);
}

.gridCells:hover {
  background-color: var(--secondary-color);
  cursor: pointer;
}

@keyframes oscillateGlow {
  0% {
    text-shadow: 0 0 3px rgba(82, 201, 45, 0.2), 0 0 6px rgba(82, 201, 45, 0.1);
  }
  50% {
    text-shadow: 0 0 8px rgba(82, 201, 45, 0.4), 0 0 15px rgba(82, 201, 45, 0.3);
  }
  100% {
    text-shadow: 0 0 3px rgba(82, 201, 45, 0.2), 0 0 6px rgba(82, 201, 45, 0.1);
  }
}

.glowing-text {
  animation: oscillateGlow 2s ease-in-out infinite;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,GAAG,qBAAqB,CAAC;;;AAGzB;EACE,gCAAgC;EAChC,kCAAkC;EAClC,4BAA4B;AAC9B;;;AAGA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,sCAAsC;EACtC,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;;AAGA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,wCAAwC;AAC1C;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,wCAAwC;;AAE1C;;AAEA;EACE,eAAe;;AAEjB;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,oCAAoC;EACpC,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,wCAAwC;EACxC,aAAa;EACb,qCAAqC;EACrC,iCAAiC;EACjC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;EACpB,qCAAqC;EACrC,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,wCAAwC;EACxC,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE;IACE,2EAA2E;EAC7E;EACA;IACE,4EAA4E;EAC9E;EACA;IACE,2EAA2E;EAC7E;AACF;;AAEA;EACE,gDAAgD;AAClD","sourcesContent":["* {border: solid red 1px;}\n\n\n:root {\n  --primary-color: rgb(12, 36, 12);\n  --secondary-color:rgb(80, 200, 45);\n  --third-color:rgb(12, 54, 0);\n}\n\n\nbody {\n  height: 100vh;\n  margin: 0%;\n  max-width: 100%;\n  font-family: \"Nunito Sans\", sans-serif;\n  background-color: var(--primary-color);\n}\n\n#main {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(100, 1%);\n  grid-template-rows: repeat(100, 1%);\n}\n\nh1 {\n  color: var(--secondary-color);\n}\n\np {\n  color: var(--secondary-color);\n}\n\n\nimg:hover {\n  cursor: pointer;\n}\n\n#startDisplay {\n  grid-row: 30/70;\n  grid-column: 30/70;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: solid var(--secondary-color) 1px;\n}\n\n#startBtnDiv {\n  width: 40%;\n  height: 30%;\n}\n\n#startBtnDivOpt {\n  width: 60%;\n  height: 30%;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#startBtn {\n  width: 100%;\n  height: 100%;\n  color: var(--secondary-color);\n  background: none;\n  letter-spacing: 0.2em;\n  text-align: center;\n  border: solid var(--secondary-color) 1px;\n\n}\n\nButton:hover {\n  cursor: pointer;\n\n}\n\n\n.modeBtn {\n  width: 100%;\n  height: 100%;\n  color: var(--secondary-color);\n  background: none;\n  letter-spacing: 0.2em;\n  text-align: center;\n  border: solid var(--secondary-color) 1px;\n}\n\n.gameBoard {\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n#gameBoardOne {\n  position: relative;\n  grid-row: 5/60;\n  grid-column: 5/48;\n}\n\n#gameBoardTwo {\n  position: relative;\n  grid-row: 5/60;\n  grid-column: 52/95;\n}\n\n#txtContainer {\n  grid-row: 64/71;\n  grid-column: 5/95;\n  background-color: var(--third-color);\n  border: solid var(--secondary-color) 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#shipsContainer {\n  grid-row: 75/95;\n  grid-column: 5/95;\n  border: solid var(--secondary-color) 1px;\n  display: grid;\n  grid-template-columns: repeat(10,10%);\n  grid-template-rows: repeat(4,25%);\n  background-color: var(--third-color);\n}\n\n.shipPNGs {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.shipPNGsAlt {\n  color: red;\n  opacity: 0.3;\n  position: absolute;\n}\n\n#carrier {\n  grid-column: 1/6;\n  grid-row: span 2;\n}\n\n#battleship {\n  grid-column: 6/10;\n  grid-row: span 2;\n}\n\n#cruiser {\n  grid-column: 1/4;\n  grid-row: span 2;\n}\n\n#submarine {\n  grid-column: 4/7;\n  grid-row: span 2;\n}\n\n#destroyer {\n  grid-column: 7/10;\n  grid-row: span 2;\n}\n\n#carrier img {\n  width: 50%;\n  height: 50%;\n}\n\n#battleship img {\n  width: 50%;\n  height: 50%;\n}\n\n#cruiser img {\n  width: 50%;\n  height: 50%;\n}\n\n#submarine img {\n  width: 50%;\n  height: 50%;\n}\n\n#destroyer img {\n  width: 50%;\n  height: 50%;\n}\n\n.gridRows {\n  display: grid;\n  grid-row: span 1;\n  grid-column: span 10;\n  grid-template-columns: repeat(10,1fr);\n  position: relative;\n  z-index: 1;\n}\n\n.gridCells {\n  border: solid var(--secondary-color) 1px;\n  position: relative;\n  z-index: 0;\n}\n\n.gridCellsDragOver {\n  background-color: var(--secondary-color);\n}\n\n.gridCells:hover {\n  background-color: var(--secondary-color);\n  cursor: pointer;\n}\n\n@keyframes oscillateGlow {\n  0% {\n    text-shadow: 0 0 3px rgba(82, 201, 45, 0.2), 0 0 6px rgba(82, 201, 45, 0.1);\n  }\n  50% {\n    text-shadow: 0 0 8px rgba(82, 201, 45, 0.4), 0 0 15px rgba(82, 201, 45, 0.3);\n  }\n  100% {\n    text-shadow: 0 0 3px rgba(82, 201, 45, 0.2), 0 0 6px rgba(82, 201, 45, 0.1);\n  }\n}\n\n.glowing-text {\n  animation: oscillateGlow 2s ease-in-out infinite;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./images/Battleship.png":
/*!*******************************!*\
  !*** ./images/Battleship.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6da2e6b014c9c8f025e0.png";

/***/ }),

/***/ "./images/Carrier.png":
/*!****************************!*\
  !*** ./images/Carrier.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d780acbf10af348db7c.png";

/***/ }),

/***/ "./images/Cruiser.png":
/*!****************************!*\
  !*** ./images/Cruiser.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f23a65264c5e1c6cc8a5.png";

/***/ }),

/***/ "./images/Destroyer.png":
/*!******************************!*\
  !*** ./images/Destroyer.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cb2375970b623ced889.png";

/***/ }),

/***/ "./images/Submarine.png":
/*!******************************!*\
  !*** ./images/Submarine.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b155482dcf1d82f84847.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



console.log('test');
(0,_game_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)();
(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.loadScreen)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxtR0FBbUcsTUFBTSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxXQUFXLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdB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QUM7QUFFbkJrSSx1REFBYSxDQUFDLENBQUM7QUFDZi9LLG1EQUFVLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbmRlciBvYmplY3RzIGluIERPTSBoZXJlXG5cbmltcG9ydCB7IHN0YXJ0R2FtZSxjb21tb2RvcmVPbmUsY29tbW9kb3JlVHdvIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vZ2FtZU9iamVjdHNcIjtcblxuaW1wb3J0IENhcnJpZXIgZnJvbSAnLi4vaW1hZ2VzL0NhcnJpZXIucG5nJztcbmltcG9ydCBTdWJtYXJpbmUgZnJvbSAnLi4vaW1hZ2VzL1N1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IENydWlzZXIgZnJvbSAnLi4vaW1hZ2VzL0NydWlzZXIucG5nJztcbmltcG9ydCBCYXR0bGVTaGlwIGZyb20gJy4uL2ltYWdlcy9CYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4uL2ltYWdlcy9EZXN0cm95ZXIucG5nJztcblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTY3JlZW4oKSB7XG4gIFxuICBjb25zdCBzdGFydERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bkRpdicpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ0bicpO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgc3RhcnRCdG4uaW5uZXJIVE1MID0gJyYjOTY1NCBCT09UJztcbiAgfSlcblxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHN0YXJ0QnRuLmlubmVySFRNTCA9ICdCT09UJztcbiAgfSlcblxuICBjb25zdCBvbmVQQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG9uZVBCdG4uY2xhc3NMaXN0LmFkZCgnbW9kZUJ0bicpO1xuICBvbmVQQnRuLmlubmVySFRNTCA9ICcxUCc7XG4gIGNvbnN0IHR3b1BCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdHdvUEJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RlQnRuJyk7XG4gIHR3b1BCdG4uaW5uZXJIVE1MID0gJzJQJztcblxuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN0YXJ0RGl2LnJlbW92ZUNoaWxkKHN0YXJ0QnRuKTtcbiAgICBzdGFydERpdi5pZCA9J3N0YXJ0QnRuRGl2T3B0JztcbiAgICBzdGFydERpdi5hcHBlbmRDaGlsZChvbmVQQnRuKTtcbiAgICBzdGFydERpdi5hcHBlbmRDaGlsZCh0d29QQnRuKTtcbiAgfSlcblxuICBvbmVQQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgb25lUEJ0bi5pbm5lckhUTUwgPSAnJiM5NjU0IDFQJztcbiAgfSlcblxuICBvbmVQQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgb25lUEJ0bi5pbm5lckhUTUwgPSAnMVAnO1xuICB9KVxuXG4gIG9uZVBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAobG9hZEdhbWUpKTtcblxuICB0d29QQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgdHdvUEJ0bi5pbm5lckhUTUwgPSAnJiM5NjU0IDJQJztcbiAgfSlcblxuICB0d29QQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgdHdvUEJ0bi5pbm5lckhUTUwgPSAnMlAnO1xuICB9KVxufVxuXG5mdW5jdGlvbiBsb2FkR2FtZShnYW1lTW9kZSkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdHh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdHh0LmlkID0gJ3R4dCc7XG4gIHR4dC5pbm5lclRleHQgPSAnVEVTVCBURVhUJztcbiAgdHh0Q29udGFpbmVyLmlkID0gJ3R4dENvbnRhaW5lcic7XG4gIHR4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHQpO1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwc0NvbnRhaW5lci5pZCA9ICdzaGlwc0NvbnRhaW5lcic7XG4gIGJvYXJkLmlkID0gJ2dhbWVCb2FyZE9uZSc7XG4gIGNvbnN0IGJvYXJkVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkVHdvLmlkID0gJ2dhbWVCb2FyZFR3byc7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVCb2FyZCcpO1xuICBib2FyZFR3by5jbGFzc0xpc3QuYWRkKCdnYW1lQm9hcmQnKTtcblxuICBtYWluLmlubmVySFRNTCA9ICcnO1xuICBtYWluLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChib2FyZFR3byk7XG4gIG1haW4uYXBwZW5kQ2hpbGQodHh0Q29udGFpbmVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChzaGlwc0NvbnRhaW5lcik7XG4gIGxvYWRCb2FyZChib2FyZCk7XG4gIGxvYWRCb2FyZChib2FyZFR3byk7XG4gIGxvYWRTaGlwcygncGxheWVyT25lJyk7XG4gIHN0YXJ0R2FtZSgpO1xuICBnZXRDb29yZGluYXRlcygpO1xufVxuXG5mdW5jdGlvbiBsb2FkQm9hcmQoYm9hcmQpIHtcblxuICBmb3IgKGxldCBpPTA7aTwxMDtpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgnZ3JpZFJvd3MnKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgZm9yIChsZXQgaj0wO2o8MTA7aisrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWRDZWxscycpO1xuICAgICAgY2VsbC5pZCA9IFtqICsgMSwxMCAtIGldO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH0gXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkU2hpcHMoY3VycmVudFBsYXllcikge1xuXG4gIGZ1bmN0aW9uIGRpdkltYWdlcyhpbWFnZSwgaWQpIHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXBzQ29udGFpbmVyJyk7XG4gICAgY29uc3QgYm9hcmRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUJvYXJkT25lJyk7XG4gICAgY29uc3QgYm9hcmRUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUJvYXJkVHdvJyk7XG4gICAgbGV0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IGltYWdlO1xuICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXBQTkdzJyk7XG4gICAgc2hpcEVsZW1lbnQuaWQgPSBpZDtcbiAgICBzaGlwRWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgZHJhZ2dhYmxlSW1hZ2VzKCkuc2V0RHJhZ2dhYmxlKHNoaXBFbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdnYWJsZUltYWdlcygpIHtcbiAgICBmdW5jdGlvbiBzZXREcmFnZ2FibGUoc2hpcCkge1xuICAgICAgc2hpcC5kcmFnZ2FibGUgPSAndHJ1ZSc7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgc2V0RHJvcChzaGlwKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RHJvcChzaGlwKSB7XG4gICAgICBjb25zdCBib2FyZE9uZUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2dhbWVCb2FyZE9uZSAuZ3JpZENlbGxzJyk7XG4gICAgICBjb25zdCBib2FyZFR3b0NlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2dhbWVCb2FyZFR3byAuZ3JpZENlbGxzJyk7XG5cbiAgICAgIGNvbnN0IGJvYXJkT25lUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNnYW1lQm9hcmRPbmUgLmdyaWRSb3dzJyk7XG4gICAgICBjb25zdCBib2FyZFR3b1Jvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ2FtZUJvYXJkT25lIC5ncmlkUm93cycpO1xuXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllck9uZScpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0QWxsQ2VsbHMgPSBib2FyZE9uZUNlbGxzO1xuICAgICAgICBjb25zdCBzZWxlY3RBbGxSb3dzID0gYm9hcmRPbmVSb3dzO1xuICAgICAgICBkcm9wTGlzdGVuZXJFdmVudHMoc2VsZWN0QWxsQ2VsbHMsc2VsZWN0QWxsUm93cyk7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXJUd28nKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdEFsbENlbGxzID0gYm9hcmRUd29DZWxscztcbiAgICAgICAgY29uc3Qgc2VsZWN0QWxsUm93cyA9IGJvYXJkVHdvUm93cztcbiAgICAgICAgZHJvcExpc3RlbmVyRXZlbnRzKHNlbGVjdEFsbENlbGxzLHNlbGVjdEFsbFJvd3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkcm9wTGlzdGVuZXJFdmVudHMoY2VsbHMscm93cykge1xuXG4gICAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkQ2VsbHNEcmFnT3ZlcicpO1xuICAgICAgICAgIH0pXG4gIFxuICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWRDZWxsc0RyYWdPdmVyJyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgXG4gICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gIFxuICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgXG4gICAgICAgICAgICByb3cuYXBwZW5kKHNoaXApO1xuXG4gICAgICAgICAgICBzaGlwLmRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgIHNldERyb3Aoc2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgXG4gICAgICBmdW5jdGlvbiBoaWdobGlnaHRDZWxscyhjZWxsSUQsIHNoaXBMZW5ndGgpIHtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNldERyYWdnYWJsZTpzZXREcmFnZ2FibGUsXG4gICAgfVxuICB9XG5cbiAgZGl2SW1hZ2VzKENhcnJpZXIsJ2NhcnJpZXInKTtcbiAgZGl2SW1hZ2VzKEJhdHRsZVNoaXAsJ2JhdHRsZXNoaXAnKTtcbiAgZGl2SW1hZ2VzKENydWlzZXIsJ2NydWlzZXInKTtcbiAgZGl2SW1hZ2VzKFN1Ym1hcmluZSwnc3VibWFyaW5lJyk7XG4gIGRpdkltYWdlcyhEZXN0cm95ZXIsJ2Rlc3Ryb3llcicpO1xufVxuICBmdW5jdGlvbiBnZXRDb29yZGluYXRlcygpIHtcblxuICAgIGxldCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkQ2VsbHMnKTtcblxuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsLmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICAiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9nYW1lT2JqZWN0c1wiO1xuXG4vLyBnYW1lIGZsb3cgbG9naWMgaGVyZVxuXG5leHBvcnQgbGV0IGNvbW1vZG9yZU9uZSA9IG51bGw7XG5leHBvcnQgbGV0IGNvbW1vZG9yZVR3byA9IG51bGw7IC8vIHR3byBiZWluZyBodW1hbiBvciBjb21wdXRlclxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICBjb25zb2xlLmxvZygnQXBwIGluaXRpYWxpemVkIHdpdGggY29yZSBsb2dpYy4nKTtcbiAgLy8gcmVuZGVyIHRoZSBwYWdlIHdpdGggYSBET00gZnVuY3Rpb24gaGVyZVxuICAvLyBBbnkgYWRkaXRpb25hbCBsb2dpYyBpbml0aWFsaXphdGlvbiBoZXJlXG4gXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbW1vZG9yZU9uZSA9IG5ldyBQbGF5ZXIoKTtcbiAgY29tbW9kb3JlVHdvID0gbmV3IFBsYXllcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VBbGxTaGlwcyhwbGF5ZXJzQm9hcmQpIHtcbiAgXG4gIGNvbnN0IGRpcmVjdGlvbiA9ICdYJztcblxuICBwbGF5ZXJzQm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuXG4gICAgc2hpcFBsYWNlbWVudHMocGxheWVyc0JvYXJkLHNoaXAuc2hpcFR5cGUsc2hpcC5sZW5ndGgsZGlyZWN0aW9uKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcFBsYWNlbWVudHMocGxheWVyc0JvYXJkLHNoaXBUeXBlLGxlbmd0aCxkaXJlY3Rpb24sY29vcmRpbmF0ZXMpIHtcblxuICBpZiAoY2hlY2tTaGlwUGxhY2VtZW50KHBsYXllcnNCb2FyZC5saXN0T2ZTaGlwc0Nvb3JkaW5hdGVzLGxlbmd0aCxkaXJlY3Rpb24sY29vcmRpbmF0ZXMpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyB0aGUgd2hpbGUgc3RhdGVtZW50IHJldHVybmluZyBmaW5hbCByZXR1cm5lZCB2YWxpZCBjb29yZGluYXRlc1xuICBwbGF5ZXJzQm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlLGxlbmd0aCxkaXJlY3Rpb24sY29vcmRpbmF0ZXMpO1xuXG4gIHJldHVybiB0cnVlO1xuICAvLyByZXR1cm4gY29tbW9kb3JlLnBsYXllcnNCb2FyZC5wbGFjZWRTaGlwcztcbn1cblxuLy8gY2hlY2sgZm9yIGFscmVhZHkgcGxhY2VkIFNoaXBzXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTaGlwUGxhY2VtZW50KGFsbFNoaXBDb29yZGluYXRlcyxsZW5ndGgsZGlyZWN0aW9uLGNvb3JkaW5hdGVzKSB7XG5cbiAgbGV0IHRlc3RlZENvb3JkaW5hdGVzID0gW107XG4gIHRlc3RlZENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXNbMF0pO1xuICB0ZXN0ZWRDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzWzFdKTtcblxuICBpZiAoZGlyZWN0aW9uID09IFwiWFwiKSB7XG4gICAgZm9yIChsZXQgaT0wO2k8bGVuZ3RoO2krKykge1xuICAgICAgaWYgKGNoZWNrRm9yUGxhY2VkU2hpcHMoYWxsU2hpcENvb3JkaW5hdGVzLHRlc3RlZENvb3JkaW5hdGVzKSA9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRlc3RlZENvb3JkaW5hdGVzWzBdID0gdGVzdGVkQ29vcmRpbmF0ZXNbMF0gKyAxO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJZXCIpIHtcbiAgICBmb3IgKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICBpZiAoY2hlY2tGb3JQbGFjZWRTaGlwcyhhbGxTaGlwQ29vcmRpbmF0ZXMsdGVzdGVkQ29vcmRpbmF0ZXMpID09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGVzdGVkQ29vcmRpbmF0ZXNbMV0gPSB0ZXN0ZWRDb29yZGluYXRlc1sxXSArIDE7XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrIGZvciBzaGlwIHN0YXlpbmcgaW4gYm91bmRzXG4gIGlmIChjaGVja0Zvck91dE9mQm91bmRzKGNvb3JkaW5hdGVzLGxlbmd0aCxkaXJlY3Rpb24pID09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JQbGFjZWRTaGlwcyhwbGF5ZXJzUGxhY2VkU2hpcHMsIGNvb3JkaW5hdGVzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyc1BsYWNlZFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJzUGxhY2VkU2hpcHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChwbGF5ZXJzUGxhY2VkU2hpcHNbaV1bal1bMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIHBsYXllcnNQbGFjZWRTaGlwc1tpXVtqXVsxXSA9PT0gY29vcmRpbmF0ZXNbMV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlOyAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Zvck91dE9mQm91bmRzKGNvb3JkaW5hdGVzLGxlbmd0aCxkaXJlY3Rpb24pIHtcblxuICBpZiAoZGlyZWN0aW9uID09PSBcIlhcIikge1xuICAgIGlmICgoY29vcmRpbmF0ZXNbMF0gKyBsZW5ndGgpID4gMTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcIllcIikge1xuICAgIGlmICgoY29vcmRpbmF0ZXNbMV0gKyBsZW5ndGgpID4gMTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59IiwiLy8gc2hpcCwgZ2FtZWJvYXJkLCBwbGF5ZXIgb2JqZWN0cyBnbyBoZXJlIChhbG9uZyB3aXRoIHBvc3NpYmx5IG90aGVyIG9iamVjdHMpXG5cblxuY29uc3QgU2hpcCA9IGZ1bmN0aW9uKHNoaXBUeXBlLGxlbmd0aCxkaXJlY3Rpb24sY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgaGl0RGV0ZWN0aW9uID0gMDtcbiAgY29uc3QgYWxsQ29vcmRpbmF0ZXMgPSBbXTsgLy8gb25jZSBzaGlwIGlzIHBsYWNlZCB2YWxpZCwgaXQncyBjb29yZGluYXRlcyBoZXJlXG4gIGxldCBzdGF0dXMgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIGhpdChkYW1hZ2UpIHtcbiAgICBpZiAoZGFtYWdlKSB7XG4gICAgICBoaXREZXRlY3Rpb24rKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKGhpdERldGVjdGlvbiA+PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiAoc2hpcFR5cGUgKyBcIiBoYXMgYmVlbiBEZXN0cm95ZWQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbGxTaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIlhcIil7XG4gICAgICBmb3IgKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICAgIGFsbENvb3JkaW5hdGVzLnB1c2goW2Nvb3JkaW5hdGVzWzBdICsgaSxjb29yZGluYXRlc1sxXV0pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJZXCIpe1xuICAgICAgICBmb3IgKGxldCBpPTA7aTxsZW5ndGg7aSsrKSB7XG4gICAgICAgICAgYWxsQ29vcmRpbmF0ZXMucHVzaChbY29vcmRpbmF0ZXNbMF0sY29vcmRpbmF0ZXNbMV0gKyBpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWxsQ29vcmRpbmF0ZXM7XG4gIH07XG4gIHJldHVybiB7XG4gICAgaGl0OmhpdCxcbiAgICBpc1N1bms6aXNTdW5rLFxuICAgIGdldEFsbFNoaXBDb29yZGluYXRlczpnZXRBbGxTaGlwQ29vcmRpbmF0ZXMsXG4gICAgc2hpcFR5cGU6c2hpcFR5cGUsXG4gICAgbGVuZ3RoOmxlbmd0aCxcbiAgICBkaXJlY3Rpb246ZGlyZWN0aW9uLFxuICAgIGNvb3JkaW5hdGVzOmNvb3JkaW5hdGVzLFxuICAgIGFsbENvb3JkaW5hdGVzLFxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uKGNvbXB1dGVyKSB7XG5cbiAgY29uc3QgZ2FtZUJvYXJkID0gW107IC8vIFt4XVt5XSAvL2tlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3MsIHN0b3JpbmcgYXR0YWNrcyBoZXJlP1xuXG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgcGxhY2VkU2hpcHMgPSBbXTsgICBcblxuICBjb25zdCBsaXN0T2ZTaGlwc0Nvb3JkaW5hdGVzID0gW107IC8vYWRqYWNlbmN5IGxpc3Qgb2YgY29vcmRpbmF0ZXMgZm9yIGFsbCBwbGFjZWQgc2hpcHNcblxuICBmdW5jdGlvbiBtYWtlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaT0wO2k8MTA7aSsrKSB7XG4gICAgICBsZXQgbmV3Q29sdW1uID0gW107XG4gICAgICBmb3IgKGxldCBqPTA7ajwxMDtqKyspIHtcbiAgICAgICAgbGV0IG5ld0NlbGwgPSBbXTtcbiAgICAgICAgbmV3Q29sdW1uLnB1c2gobmV3Q2VsbCk7XG4gICAgICB9XG4gICAgICBnYW1lQm9hcmQucHVzaChuZXdDb2x1bW4pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhnYW1lQm9hcmQpO1xuICB9XG4gIG1ha2VCb2FyZCgpO1xuXG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBUeXBlLGxlbmd0aCxkaXJlY3Rpb24sY29vcmRpbmF0ZXMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduZWVkIGFsbCBzaGlwIHByb3BlcnRpZXMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwVHlwZSxsZW5ndGgsZGlyZWN0aW9uLGNvb3JkaW5hdGVzKTtcblxuICAgIGNvbnN0IGFsbFNoaXBDb29yZGluYXRlcyA9IG5ld1NoaXAuZ2V0QWxsU2hpcENvb3JkaW5hdGVzKCk7IC8vIHJldHVybmluZyBhbmQgaW5pdGlhdGluZyBmdW5jdGlvblxuICAgIGxpc3RPZlNoaXBzQ29vcmRpbmF0ZXMucHVzaChhbGxTaGlwQ29vcmRpbmF0ZXMpO1xuXG4gICAgcGxhY2VkU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoaXBTdGF0dXMoKSB7XG4gICAgZm9yIChsZXQgaT0wO2k8cGxhY2VkU2hpcHM7aSsrKSB7XG4gICAgICBpZiAocGxhY2VkU2hpcHMuc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGF0dGFja0Nvb3JkaW5hdGVzKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjb29yZGluYXRlcycpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpPTA7aTxwbGFjZWRTaGlwcy5sZW5ndGg7aSsrKSB7XG4gICAgICBmb3IgKGxldCBqPTA7ajxwbGFjZWRTaGlwc1tpXS5sZW5ndGg7aisrKSB7XG4gICAgICAgIGlmIChwbGFjZWRTaGlwc1tpXS5jb29yZGluYXRlc1tqXVswXSA9PSBhdHRhY2tDb29yZGluYXRlc1swXSAmJiBwbGFjZWRTaGlwc1tpXS5jb29yZGluYXRlc1tqXVsxXSA9PSBhdHRhY2tDb29yZGluYXRlc1swXSkge1xuXG4gICAgICAgICAgLy9BVFRBQ0sgU0hJUCBIRVJFXG4gICAgICAgICAgLy9QVVNIIE1JU1NFRCBBVFRBQ0sgSEVSRSBUTyBHQU1FQk9BUkRcblxuICAgICAgICAgIHBsYWNlZFNoaXBzW2ldLmhpdCh0cnVlKTtcblxuICAgICAgICAgIGNvbnN0IGNoZWNrU2hpcFN0YXR1cyA9IHBsYWNlZFNoaXBzW2ldLmlzU3VuaygpO1xuICAgICAgICAgIGlmIChjaGVja1NoaXBTdGF0dXMgIT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRydWUgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gICAgICAgICAgICBpZiAoc2hpcFN0YXR1cygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vIGVsc2UgcmV0dXJucyB0aGUgc3Vua2VkIHNoaXBcbiAgICAgICAgICAgIHJldHVybiBjaGVja1NoaXBTdGF0dXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9QVVNIIE1JU1NFRCBBVFRBQ0sgSEVSRSBUTyBHQU1FQk9BUkRcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNoaXBzOnNoaXBzLFxuICAgIG1ha2VCb2FyZDptYWtlQm9hcmQsXG4gICAgcGxhY2VTaGlwOnBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrOnJlY2VpdmVBdHRhY2ssXG4gICAgZ2FtZUJvYXJkOmdhbWVCb2FyZCxcbiAgICBwbGFjZWRTaGlwczpwbGFjZWRTaGlwcyxcbiAgICBsaXN0T2ZTaGlwc0Nvb3JkaW5hdGVzOmxpc3RPZlNoaXBzQ29vcmRpbmF0ZXMsXG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3QgUGxheWVyID0gZnVuY3Rpb24oY29tcHV0ZXIpIHtcbiAgY29uc3QgcGxheWVyc0JvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJzQm9hcmQ6cGxheWVyc0JvYXJkLFxuICB9XG5cbn1cblxuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtib3JkZXI6IHNvbGlkIHJlZCAxcHg7fVxuXG5cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiByZ2IoMTIsIDM2LCAxMik7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOnJnYig4MCwgMjAwLCA0NSk7XG4gIC0tdGhpcmQtY29sb3I6cmdiKDEyLCA1NCwgMCk7XG59XG5cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbiNtYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAwLCAxJSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwMCwgMSUpO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG5wIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cblxuaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc3RhcnREaXNwbGF5IHtcbiAgZ3JpZC1yb3c6IDMwLzcwO1xuICBncmlkLWNvbHVtbjogMzAvNzA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMXB4O1xufVxuXG4jc3RhcnRCdG5EaXYge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuI3N0YXJ0QnRuRGl2T3B0IHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzdGFydEJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDFweDtcblxufVxuXG5CdXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuXG4ubW9kZUJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDFweDtcbn1cblxuLmdhbWVCb2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcbn1cblxuI2dhbWVCb2FyZE9uZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC1yb3c6IDUvNjA7XG4gIGdyaWQtY29sdW1uOiA1LzQ4O1xufVxuXG4jZ2FtZUJvYXJkVHdvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLXJvdzogNS82MDtcbiAgZ3JpZC1jb2x1bW46IDUyLzk1O1xufVxuXG4jdHh0Q29udGFpbmVyIHtcbiAgZ3JpZC1yb3c6IDY0LzcxO1xuICBncmlkLWNvbHVtbjogNS85NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3NoaXBzQ29udGFpbmVyIHtcbiAgZ3JpZC1yb3c6IDc1Lzk1O1xuICBncmlkLWNvbHVtbjogNS85NTtcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDFweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwyNSUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XG59XG5cbi5zaGlwUE5HcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2hpcFBOR3NBbHQge1xuICBjb2xvcjogcmVkO1xuICBvcGFjaXR5OiAwLjM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2NhcnJpZXIge1xuICBncmlkLWNvbHVtbjogMS82O1xuICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4jYmF0dGxlc2hpcCB7XG4gIGdyaWQtY29sdW1uOiA2LzEwO1xuICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4jY3J1aXNlciB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGdyaWQtcm93OiBzcGFuIDI7XG59XG5cbiNzdWJtYXJpbmUge1xuICBncmlkLWNvbHVtbjogNC83O1xuICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4jZGVzdHJveWVyIHtcbiAgZ3JpZC1jb2x1bW46IDcvMTA7XG4gIGdyaWQtcm93OiBzcGFuIDI7XG59XG5cbiNjYXJyaWVyIGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4jYmF0dGxlc2hpcCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuI2NydWlzZXIgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbiNzdWJtYXJpbmUgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbiNkZXN0cm95ZXIgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5ncmlkUm93cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93OiBzcGFuIDE7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDEwO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ncmlkQ2VsbHMge1xuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5ncmlkQ2VsbHNEcmFnT3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5ncmlkQ2VsbHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgb3NjaWxsYXRlR2xvdyB7XG4gIDAlIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCByZ2JhKDgyLCAyMDEsIDQ1LCAwLjIpLCAwIDAgNnB4IHJnYmEoODIsIDIwMSwgNDUsIDAuMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDhweCByZ2JhKDgyLCAyMDEsIDQ1LCAwLjQpLCAwIDAgMTVweCByZ2JhKDgyLCAyMDEsIDQ1LCAwLjMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4IHJnYmEoODIsIDIwMSwgNDUsIDAuMiksIDAgMCA2cHggcmdiYSg4MiwgMjAxLCA0NSwgMC4xKTtcbiAgfVxufVxuXG4uZ2xvd2luZy10ZXh0IHtcbiAgYW5pbWF0aW9uOiBvc2NpbGxhdGVHbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0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IixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7Ym9yZGVyOiBzb2xpZCByZWQgMXB4O31cXG5cXG5cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6IHJnYigxMiwgMzYsIDEyKTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOnJnYig4MCwgMjAwLCA0NSk7XFxuICAtLXRoaXJkLWNvbG9yOnJnYigxMiwgNTQsIDApO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI21haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAwLCAxJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMDAsIDElKTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcblxcbmltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzdGFydERpc3BsYXkge1xcbiAgZ3JpZC1yb3c6IDMwLzcwO1xcbiAgZ3JpZC1jb2x1bW46IDMwLzcwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMXB4O1xcbn1cXG5cXG4jc3RhcnRCdG5EaXYge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cXG4jc3RhcnRCdG5EaXZPcHQge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMzAlO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3RhcnRCdG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMXB4O1xcblxcbn1cXG5cXG5CdXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG5cXG4ubW9kZUJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSAxcHg7XFxufVxcblxcbi5nYW1lQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG4jZ2FtZUJvYXJkT25lIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtcm93OiA1LzYwO1xcbiAgZ3JpZC1jb2x1bW46IDUvNDg7XFxufVxcblxcbiNnYW1lQm9hcmRUd28ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1yb3c6IDUvNjA7XFxuICBncmlkLWNvbHVtbjogNTIvOTU7XFxufVxcblxcbiN0eHRDb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDY0LzcxO1xcbiAgZ3JpZC1jb2x1bW46IDUvOTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGlyZC1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NoaXBzQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiA3NS85NTtcXG4gIGdyaWQtY29sdW1uOiA1Lzk1O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDFweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxMCUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwyNSUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbn1cXG5cXG4uc2hpcFBOR3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBQTkdzQWx0IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNjYXJyaWVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzY7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICBncmlkLWNvbHVtbjogNi8xMDtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxufVxcblxcbiNjcnVpc2VyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG4jc3VibWFyaW5lIHtcXG4gIGdyaWQtY29sdW1uOiA0Lzc7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG4jZGVzdHJveWVyIHtcXG4gIGdyaWQtY29sdW1uOiA3LzEwO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuI2NhcnJpZXIgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuI2JhdHRsZXNoaXAgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuI2NydWlzZXIgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuI3N1Ym1hcmluZSBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4jZGVzdHJveWVyIGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxufVxcblxcbi5ncmlkUm93cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IHNwYW4gMTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDEwO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5ncmlkQ2VsbHMge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5ncmlkQ2VsbHNEcmFnT3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZ3JpZENlbGxzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgb3NjaWxsYXRlR2xvdyB7XFxuICAwJSB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4IHJnYmEoODIsIDIwMSwgNDUsIDAuMiksIDAgMCA2cHggcmdiYSg4MiwgMjAxLCA0NSwgMC4xKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4IHJnYmEoODIsIDIwMSwgNDUsIDAuNCksIDAgMCAxNXB4IHJnYmEoODIsIDIwMSwgNDUsIDAuMyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiYSg4MiwgMjAxLCA0NSwgMC4yKSwgMCAwIDZweCByZ2JhKDgyLCAyMDEsIDQ1LCAwLjEpO1xcbiAgfVxcbn1cXG5cXG4uZ2xvd2luZy10ZXh0IHtcXG4gIGFuaW1hdGlvbjogb3NjaWxsYXRlR2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0IHsgbG9hZFNjcmVlbiBhcyBsb2FkU2NyZWVuIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKCd0ZXN0Jyk7XG5cbmluaXRpYWxpemVBcHAoKTtcbmxvYWRTY3JlZW4oKTtcbiJdLCJuYW1lcyI6WyJzdGFydEdhbWUiLCJjb21tb2RvcmVPbmUiLCJjb21tb2RvcmVUd28iLCJQbGF5ZXIiLCJDYXJyaWVyIiwiU3VibWFyaW5lIiwiQ3J1aXNlciIsIkJhdHRsZVNoaXAiLCJEZXN0cm95ZXIiLCJsb2FkU2NyZWVuIiwic3RhcnREaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhcnRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJIVE1MIiwib25lUEJ0biIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0d29QQnRuIiwicmVtb3ZlQ2hpbGQiLCJpZCIsImFwcGVuZENoaWxkIiwibG9hZEdhbWUiLCJnYW1lTW9kZSIsIm1haW4iLCJib2FyZCIsInR4dENvbnRhaW5lciIsInR4dCIsImlubmVyVGV4dCIsInNoaXBzQ29udGFpbmVyIiwiYm9hcmRUd28iLCJsb2FkQm9hcmQiLCJsb2FkU2hpcHMiLCJnZXRDb29yZGluYXRlcyIsImkiLCJyb3ciLCJqIiwiY2VsbCIsImN1cnJlbnRQbGF5ZXIiLCJkaXZJbWFnZXMiLCJpbWFnZSIsInNoaXBDb250YWluZXIiLCJib2FyZE9uZSIsInNoaXBFbGVtZW50IiwiaW1nIiwic3JjIiwiZHJhZ2dhYmxlSW1hZ2VzIiwic2V0RHJhZ2dhYmxlIiwic2hpcCIsImRyYWdnYWJsZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInNldERyb3AiLCJib2FyZE9uZUNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsImJvYXJkVHdvQ2VsbHMiLCJib2FyZE9uZVJvd3MiLCJib2FyZFR3b1Jvd3MiLCJzZWxlY3RBbGxDZWxscyIsInNlbGVjdEFsbFJvd3MiLCJkcm9wTGlzdGVuZXJFdmVudHMiLCJjZWxscyIsInJvd3MiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJzdHlsZSIsInBvc2l0aW9uIiwiYXBwZW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZURyYWdTdGFydCIsImhpZ2hsaWdodENlbGxzIiwiY2VsbElEIiwic2hpcExlbmd0aCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiaW5pdGlhbGl6ZUFwcCIsIl9zdGFydEdhbWUiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInBsYWNlQWxsU2hpcHMiLCJwbGF5ZXJzQm9hcmQiLCJkaXJlY3Rpb24iLCJzaGlwcyIsInNoaXBQbGFjZW1lbnRzIiwic2hpcFR5cGUiLCJjb29yZGluYXRlcyIsImNoZWNrU2hpcFBsYWNlbWVudCIsImxpc3RPZlNoaXBzQ29vcmRpbmF0ZXMiLCJwbGFjZVNoaXAiLCJhbGxTaGlwQ29vcmRpbmF0ZXMiLCJ0ZXN0ZWRDb29yZGluYXRlcyIsImNoZWNrRm9yUGxhY2VkU2hpcHMiLCJjaGVja0Zvck91dE9mQm91bmRzIiwicGxheWVyc1BsYWNlZFNoaXBzIiwiU2hpcCIsImhpdERldGVjdGlvbiIsImFsbENvb3JkaW5hdGVzIiwic3RhdHVzIiwiaGl0IiwiZGFtYWdlIiwiX3JlYWRPbmx5RXJyb3IiLCJpc1N1bmsiLCJnZXRBbGxTaGlwQ29vcmRpbmF0ZXMiLCJHYW1lYm9hcmQiLCJjb21wdXRlciIsImdhbWVCb2FyZCIsInBsYWNlZFNoaXBzIiwibWFrZUJvYXJkIiwibmV3Q29sdW1uIiwibmV3Q2VsbCIsIm5ld1NoaXAiLCJzaGlwU3RhdHVzIiwicmVjZWl2ZUF0dGFjayIsImF0dGFja0Nvb3JkaW5hdGVzIiwiY2hlY2tTaGlwU3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==