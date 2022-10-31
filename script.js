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

  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");

  let turn = player1;

  function checkTurn() {
    turn === player1 ? turn = player2 : turn = player1;
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
