// render objects in DOM here



export function setupDOM() {
  
    const startBtn = document.getElementById('startBtn');

    startBtn.addEventListener('click', loadGame)
  }

  function loadGame() {
    const main = document.getElementById('main');

    main.innerHTML = '';

  }

  