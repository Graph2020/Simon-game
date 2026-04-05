import { nextSequence } from "./utils/game.js";
import { handleFunction } from "./utils/handleFunc.js";
const selectedBtn = document.getElementById(nextSequence());
const audio = new Audio(`./sounds/${selectedBtn.id}.mp3`);
audio.play();
gsap.to(selectedBtn, {
  opacity: 0.3,
  duration: 0.1,
  yoyo: true,
  repeat: 1,
});
