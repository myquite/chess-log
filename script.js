const addPlayerMoveBtn = document.querySelector(".addPlayerMove");
const removePlayerMoveBtn = document.querySelector(".removePlayerMove");
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

removePlayerMoveBtn.addEventListener("click", deleteMove);

function deleteMove() {
  let lastMove = list.lastElementChild;
  list.removeChild(lastMove);
  gameRecord.pop();
}

function clearMoves() {
  list.innerHTML = "";
  gameRecord.length = 0;
}

function saveGame() {
  localStorage.setItem("gameRecord", JSON.stringify(gameRecord));
}

function loadGame() {
  let savedGame = JSON.parse(localStorage.getItem("gameRecord"));
  savedGame.forEach((move) => {
    let newMove = document.createElement("li");
    newMove.innerText = move;
    list.appendChild(newMove);
  });
}

function copyToClipboard() {
  let text = gameRecord.join("\n");
  navigator.clipboard.writeText(text);
}
