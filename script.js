'use strict';
const container16 = document.createElement('div');
const container8 = document.createElement('div');
const sketchpad = document.querySelector('.sketchpad');
const btnColor = document.querySelector('.color');
const btnEraser = document.querySelector('.eraser');
const btn16 = document.querySelector('.sixteen');
const btn8 = document.querySelector('.eight');
const gridItem16 = [];
const gridItem8 = [];
let click = true;
let playerInput;

sketchpad.appendChild(container16);
sketchpad.appendChild(container8);
container16.classList.add('screen', '16');
container8.classList.add('screen', '8');
container8.classList.add('hidden');

btnColor.addEventListener('click', function () {
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');
});

btnEraser.addEventListener('click', function () {
  btnColor.classList.remove('active');
  btnEraser.classList.add('active');
});

function addGridItem16() {
  container16.classList.remove('hidden');
  container8.classList.add('hidden');

  playerInput = 16 * 16;
  if (!gridItem16.length > 0)
    for (let i = playerInput; i > 0; i--) {
      const grid = document.createElement('div');
      grid.style.borderStyle = 'solid';
      grid.style.borderColor = 'black';
      grid.style.borderWidth = '1px';
      grid.classList.add('square16', `--${i}`);
      gridItem16.push(grid);
      container16.appendChild(grid);
      grid.addEventListener('mouseover', function () {
        grid.classList.add('sqcolor');
        if (btnColor.classList.contains('active')) {
          grid.classList.add('sqcolor');
        } else {
          grid.classList.remove('sqcolor');
        }
      });
    }
  else if (gridItem16.length === playerInput) {
    return;
  }
}
function addGridItem8() {
  container16.classList.add('hidden');
  container8.classList.remove('hidden');
  playerInput = 8 * 8;
  if (!gridItem8.length > 0)
    for (let i = playerInput; i > 0; i--) {
      const grid = document.createElement('div');
      grid.style.borderStyle = 'solid';
      grid.style.borderColor = 'black';
      grid.style.borderWidth = '1px';
      grid.classList.add('square8', `--${i}`);
      gridItem8.push(grid);
      container8.appendChild(grid);
      grid.addEventListener('mouseover', function () {
        grid.classList.add('sqcolor');
        if (btnColor.classList.contains('active')) {
          grid.classList.add('sqcolor');
        } else {
          grid.classList.remove('sqcolor');
        }
      });
    }
  else if (gridItem8.length === playerInput) {
    return;
  }
}

btn16.addEventListener('click', addGridItem16);
btn8.addEventListener('click', addGridItem8);
