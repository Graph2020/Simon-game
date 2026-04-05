const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
export function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = buttonColors[randomNumber];
  gamePattern.push(randomColor);
  return randomColor;
}
