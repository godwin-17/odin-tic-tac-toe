const Gameboard = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];
  
  const cells = document.querySelectorAll(".game-cell");

  gameboard.forEach((item, index) => {
    cells[index].innerHTML = item;
  });

  return {gameboard};
})();

const Player = (name, mark) => {
  return {name, mark};
};

const Game = (() => {
  let {gameboard} = Gameboard;
  const cells = document.querySelectorAll(".game-cell");
  const player1 = Player("Player 1", "O");
  const player2 = Player("Player 2", "X");
  const restartButton = document.querySelector("#restart-button");
  const winMsg = document.querySelector(".winner-message");
  
  const winningCombinations = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  restartButton.addEventListener("click", clearGameboard);

  function clearGameboard() {
    gameboard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
      cell.innerHTML = "";
    });
    winMsg.textContent = "";
  }

  let isWinner = false;

  function checkWinner() {
    winningCombinations.forEach((combo) => {
      let a = combo[0];
      let b = combo[1];
      let c = combo[2];

      if (gameboard[a] !="" && gameboard[a] === gameboard[b] && gameboard[b] === gameboard[c]) {
        winMsg.textContent = `The Winner is ${turn.name}`;
        isWinner = true;
      }

      if (isWinner) {
        return;
      } else if (gameboard.includes("")) {
        return;
      } else {
        winMsg.textContent = `It's a draw`;
      }
    });
  }

  let turn = player2;

  function checkTurn() {
    turn === player1 ? turn = player2 : turn = player1;
    checkWinner();
  }

  function addMark() {
    cells.forEach(cell => {
      cell.addEventListener("click", () => {
        if (cell.innerHTML != "") {
          return;
        }

        if (isWinner === false) {
          cell.innerHTML = turn.mark;
          gameboard[cell.dataset.index] = cell.innerHTML;
          checkTurn();
        } else {
          console.log("GAME FINISHED");
          return;
        }
      });
    });
  }

  addMark();

})();