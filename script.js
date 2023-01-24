'use strict';

const sketchpad = document.querySelector('.sketchpad');

const slider = document.querySelector('.slider');

const btnColor = document.querySelector('.color');
const btnEraser = document.querySelector('.eraser');
const btnClear = document.querySelector('.clear');
const btnRainbowMode = document.querySelector('.rainbow');

const btnExtraSmall = document.querySelector('.hundred');
const btnSmall = document.querySelector('.sixtyfour');
const btnLarge = document.querySelector('.thirtytwo');
const btnExtraLarge = document.querySelector('.sixteen');

let playerInput;
let gridItem;
let gridSize = 64;
let modeActive = true;

const getGridSize = function () {
  if (gridSize === 16) {
    createGrid(16);
  } else if (gridSize === 32) {
    createGrid(32);
  } else if (gridSize === 64) {
    createGrid(64);
  } else if (gridSize === 100) {
    createGrid(100);
  } else {
    createGrid(16);
  }
};

const btnColorActive = function () {
  if (!modeActive) {
    modeActive = true;
    getGridSize();
  }
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');
  btnColor.classList.add('engaged');
  btnRainbowMode.classList.remove('engaged');
  btnRainbowMode.classList.remove('active');
};

const btnRainbowActive = function () {
  if (modeActive) {
    modeActive = false;
    getGridSize();
  }
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
  if (e.target.innerHTML === 'Extra Large') {
    gridSize = 16;
    createGrid(16);
  } else if (e.target.innerHTML === 'Small') {
    gridSize = 64;

    createGrid(64);
  } else if (e.target.innerHTML === 'Extra Small') {
    gridSize = 100;

    createGrid(100);
  } else if (e.target.innerHTML === 'Large') {
    gridSize = 32;

    createGrid(32);
  }
  if (gridSize === 16) {
    btnExtraLarge.classList.add('active');

    btnLarge.classList.remove('active');
    btnSmall.classList.remove('active');
    btnExtraSmall.classList.remove('active');

    btnExtraLarge.removeEventListener('click', setGrid);
    btnLarge.addEventListener('click', setGrid);
    btnSmall.addEventListener('click', setGrid);
    btnExtraSmall.addEventListener('click', setGrid);
  } else if (gridSize === 32) {
    btnLarge.classList.add('active');

    btnExtraLarge.classList.remove('active');
    btnSmall.classList.remove('active');
    btnExtraSmall.classList.remove('active');

    btnLarge.removeEventListener('click', setGrid);
    btnExtraLarge.addEventListener('click', setGrid);
    btnSmall.addEventListener('click', setGrid);
    btnExtraSmall.addEventListener('click', setGrid);
  } else if (gridSize === 64) {
    btnSmall.classList.add('active');

    btnExtraLarge.classList.remove('active');
    btnLarge.classList.remove('active');
    btnExtraSmall.classList.remove('active');

    btnSmall.removeEventListener('click', setGrid);
    btnExtraLarge.addEventListener('click', setGrid);
    btnLarge.addEventListener('click', setGrid);
    btnExtraSmall.addEventListener('click', setGrid);
  } else if (gridSize === 100) {
    btnExtraSmall.classList.add('active');

    btnExtraLarge.classList.remove('active');
    btnLarge.classList.remove('active');
    btnSmall.classList.remove('active');

    btnExtraSmall.removeEventListener('click', setGrid);
    btnExtraLarge.addEventListener('click', setGrid);
    btnLarge.addEventListener('click', setGrid);
    btnSmall.addEventListener('click', setGrid);
  }
};

const createGrid = function (a) {
  gridSize = a;
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

createGrid(gridSize);

btnExtraSmall.addEventListener('click', setGrid);
btnLarge.addEventListener('click', setGrid);
btnExtraLarge.addEventListener('click', setGrid);
