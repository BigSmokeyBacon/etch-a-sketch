'use strict';
const container = document.createElement('div');
const sketchpad = document.querySelector('.sketchpad');
sketchpad.appendChild(container);
container.classList.add('screen');

//grid loop
let playerInput = 16 * 16;
while (playerInput > 0) {
  playerInput--;
  const grid = document.createElement('div');
  grid.style.borderStyle = 'solid';
  grid.style.borderColor = 'black';
  grid.style.borderWidth = '1px';
  grid.classList.add('square');
  container.appendChild(grid);
}
