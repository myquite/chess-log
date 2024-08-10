const addPlayerMoveBtn = document.querySelector(".addPlayerMove");
const list = document.querySelector(".list");

const whiteMove = document.querySelector(".white");
const blackMove = document.querySelector(".black");

let count = 0;

const gameRecord = [];

addPlayerMoveBtn.addEventListener("click", () => {
  let moveNum = (count += 1);
  let newMove = document.createElement("li");
  let moveText = `${moveNum}. ${whiteMove.value} ${blackMove.value}`;
  newMove.innerText = moveText;
  list.appendChild(newMove);
  gameRecord.push(moveText);
  whiteMove.value = "";
  blackMove.value = "";
  whiteMove.focus();
});

//TODO add gameRecord to localStorage so data persist.
//TODO export copies the game records as a string to paste in chess.com
//TODO wire up newGame button to clear the gameRecord and inputs.
