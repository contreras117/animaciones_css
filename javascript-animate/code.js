const $pelota = document.getElementById("pelota");
const $playButton = document.getElementById("play");
const $pauseButton = document.getElementById("pause");
const $stopButton = document.getElementById("stop");
const $reverseButton = document.getElementById("reverse");

//element.animate(keyframes[], option{})
const animation = $pelota.animate([
  /* from */
  {
    transform: 'translateX(0)'
  },
  /* to */
  {
    transform: 'translateX(500px)'
  }
],{
  duration: 1000,
  delay: 300,
  direction: 'normal',
  easing: 'linear',
  iterations: Infinity,
  fill: 'forwards',
  iterationStart: 0
  /* endDelay: 5000 */
});

$playButton.addEventListener("click", (event) => {
  animation.play();
});

$pauseButton.addEventListener("click", (event) => {
  animation.pause();
});

$stopButton.addEventListener("click", (event) => {
  animation.cancel();
});

$reverseButton.addEventListener("click", (event) => {
  animation.reverse();
});