const backgroundLoad = document.querySelector('.bg-loading');
const loadText = document.querySelector('.loading-text');

let load = 0;
let int = setInterval(blurring, 30); //blurring changes every 30ms

function blurring() {
  load++; // adds increment to load every 30ms
  if (load > 99) {
    clearInterval(int); // when load gets to 100 the function stops
  }

  loadText.innerText = `${load}%`;

  // load, load starts at 0, load finishes at 100, opacity starts at 1, opacity finishes at 0
  loadText.style.opacity = blurScale(load, 0, 100, 1, 0);

  // load, load starts at 0, load finishes at 100, blur starts at 30px, blur finishes at 0
  backgroundLoad.style.filter = `blur(${blurScale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// load, load starts at 0, load finishes at 100, opacity starts at 1, opacity finishes at 0
const blurScale = (load, loadStart, loadEnd, opacityStart, opacityEnd) =>
  ((load - loadStart) * (opacityEnd - opacityStart)) / (loadEnd - loadStart) +
  opacityStart;
