import { nextSequence } from "./game.js";
const parent = document.getElementById("square-container");
const userClickedPattern = [];

function handleFunction(id) {
  const userChosenColor = id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
}

function playSound(name) {
  const audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("square")) {
    handleFunction(e.target.id);
    playSound(e.target.id);
  }
});

export { handleFunction };
