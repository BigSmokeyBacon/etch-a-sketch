'use strict';

const sketchpad = document.querySelector('.sketchpad');

const btnColor = document.querySelector('.color');
const btnEraser = document.querySelector('.eraser');
const btnClear = document.querySelector('.clear');

const btn64 = document.querySelector('.sixtyfour');
const btn16 = document.querySelector('.sixteen');
const btn8 = document.querySelector('.eight');
const btn4 = document.querySelector('.four');

let playerInput;
let gridItem;

const btnColorActive = function () {
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');
};

btnColor.addEventListener('click', btnColorActive);

btnEraser.addEventListener('click', function () {
  btnColor.classList.remove('active');
  btnEraser.classList.add('active');
});

function generateGridItemAmount(a) {
  sketchpad.innerHTML = '';
  playerInput = a * a;
  gridItem = [];

  for (let i = 0; i < playerInput; i++) {
    let div = document.createElement('div');
    gridItem.push(div);
  }

  return gridItem;
}

const createGrid = function (a) {
  let gridItems = generateGridItemAmount(a);
  gridItems.forEach(function (gridItem) {
    sketchpad.appendChild(gridItem);
    gridItem.classList.add(`square${a}`);
    gridItem.addEventListener('mouseover', function () {
      gridItem.classList.add('sqcolor');
      if (btnColor.classList.contains('active')) {
        gridItem.classList.add('sqcolor');
      } else {
        gridItem.classList.remove('sqcolor');
      }
      btnClear.addEventListener('click', function () {
        gridItem.classList.remove('sqcolor');
        btnColorActive();
      });
    });
  });
};
createGrid(16);
const setGrid = function (e) {
  btnColorActive();

  if (e.target.innerHTML === '16 x 16') {
    console.log('on it');
    createGrid(16);
  } else if (e.target.innerHTML === '8 x 8') {
    console.log('on it again');
    createGrid(8);
  } else if (e.target.innerHTML === '64 x 64') {
    console.log('on it thrice');
    createGrid(64);
  } else if (e.target.innerHTML === '4 x 4') {
    console.log('on it four');
    createGrid(4);
  }
};

btn64.addEventListener('click', setGrid);
btn16.addEventListener('click', setGrid);
btn8.addEventListener('click', setGrid);
btn4.addEventListener('click', setGrid);
