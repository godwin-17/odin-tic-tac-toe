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
  const {gameboard} = Gameboard;
  const cells = document.querySelectorAll(".game-cell");

  const player1 = Player("Player 1", "O");
  const player2 = Player("Player 2", "X");

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

  function checkWinner() {
    winningCombinations.forEach((combo) => {
      let a = combo[0];
      let b = combo[1];
      let c = combo[2];

      if (gameboard[a] !="" && gameboard[a] === gameboard[b] && gameboard[b] === gameboard[c]) {
        console.log(`The winner is ${turn.name}`);
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
        cell.innerHTML = turn.mark;
        gameboard[cell.dataset.index] = cell.innerHTML;
        checkTurn();
      });
    });
  }

  addMark();

})();