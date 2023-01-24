'use strict';

const sketchpad = document.querySelector('.sketchpad');

const btnColor = document.querySelector('.color');
const btnEraser = document.querySelector('.eraser');
const btnClear = document.querySelector('.clear');
const btnRainbowMode = document.querySelector('.rainbow');

const btn64 = document.querySelector('.sixtyfour');
const btn16 = document.querySelector('.sixteen');
const btn8 = document.querySelector('.eight');
const btn4 = document.querySelector('.four');

let playerInput;
let gridItem;
let modeActive = true;

const btnColorActive = function () {
  modeActive = true;
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');
  btnColor.classList.add('engaged');
  btnRainbowMode.classList.remove('engaged');
  btnRainbowMode.classList.remove('active');
};

const btnRainbowActive = function () {
  modeActive = false;
  btnColor.classList.remove('active');
  btnEraser.classList.remove('active');
  btnRainbowMode.classList.add('active');
  btnRainbowMode.classList.add('engaged');
  btnColor.classList.remove('engaged');
};
btnColor.addEventListener('click', btnColorActive);

btnEraser.addEventListener('click', function () {
  btnColor.classList.remove('active');
  btnEraser.classList.add('active');
  btnRainbowMode.classList.remove('active');
});

btnRainbowMode.addEventListener('click', btnRainbowActive);

const getRandomColor = function () {
  let a = Math.trunc(Math.random() * 255) + 1;
  let b = Math.trunc(Math.random() * 255) + 1;
  let c = Math.trunc(Math.random() * 255) + 1;
  return `${a}, ${b}, ${c}`;
};

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

const setGrid = function (e) {
  if (modeActive) {
    btnColorActive();
  } else {
    btnRainbowActive();
  }

  if (e.target.innerHTML === '16 x 16') {
    createGrid(16);
  } else if (e.target.innerHTML === '8 x 8') {
    createGrid(8);
  } else if (e.target.innerHTML === '64 x 64') {
    createGrid(64);
  } else if (e.target.innerHTML === '4 x 4') {
    createGrid(4);
  }
};

const createGrid = function (a) {
  let gridItems = generateGridItemAmount(a);
  gridItems.forEach(function (gridItem) {
    sketchpad.appendChild(gridItem);
    gridItem.classList.add(`square${a}`);
    gridItem.addEventListener('mouseover', function () {
      gridItem.classList.add('sqcolor');
      if (btnColor.classList.contains('active')) {
        gridItem.style.backgroundColor = 'black';
      } else if (btnEraser.classList.contains('active')) {
        gridItem.style.backgroundColor = 'white';
      } else if (btnRainbowMode.classList.contains('active')) {
        function getRandomRGB() {
          let randomColor = getRandomColor();
          return (gridItem.style.backgroundColor = `rgb(${randomColor})`);
        }
        getRandomRGB();
        gridItem.classList.remove('sqcolor');
      }
      btnClear.addEventListener('click', function () {
        if (modeActive) {
          btnColorActive();
        } else {
          btnRainbowActive();
        }
        gridItem.style.backgroundColor = 'white';
        gridItem.classList.remove('sqcolor');
      });
    });
  });
};

createGrid(16);

btn64.addEventListener('click', setGrid);
btn16.addEventListener('click', setGrid);
btn8.addEventListener('click', setGrid);
btn4.addEventListener('click', setGrid);
