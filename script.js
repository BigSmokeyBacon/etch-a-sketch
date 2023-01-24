'use strict';

const container64 = document.createElement('div');
const gridItem64 = [];

const container16 = document.createElement('div');
const gridItem16 = [];

const container8 = document.createElement('div');
const gridItem8 = [];

const container4 = document.createElement('div');
const gridItem4 = [];

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

sketchpad.appendChild(container64);
sketchpad.appendChild(container16);
sketchpad.appendChild(container8);
sketchpad.appendChild(container4);

container64.classList.add('screen', 'hidden', '64');
container16.classList.add('screen', '16');
container8.classList.add('screen', 'hidden', '8');
container4.classList.add('screen', 'hidden', '4');

function addGridItem64() {
  container64.classList.remove('hidden');
  container16.classList.add('hidden');
  container8.classList.add('hidden');
  container4.classList.add('hidden');

  playerInput = 64 * 64;
  if (!gridItem64.length > 0)
    for (let i = playerInput; i > 0; i--) {
      const grid = document.createElement('div');
      grid.style.borderStyle = 'solid';
      grid.style.borderColor = 'black';
      grid.style.borderWidth = '1px';
      grid.classList.add('square64', `--${i}`);
      gridItem64.push(grid);
      container64.appendChild(grid);
      grid.addEventListener('mouseover', function () {
        grid.classList.add('sqcolor');
        if (btnColor.classList.contains('active')) {
          grid.classList.add('sqcolor');
        } else {
          grid.classList.remove('sqcolor');
        }
      });
    }
  else if (gridItem64.length === playerInput) {
    return;
  }
}

function addGridItem4() {
  container4.classList.remove('hidden');
  container8.classList.add('hidden');
  container16.classList.add('hidden');
  container64.classList.add('hidden');

  playerInput = 4 * 4;
  if (!gridItem4.length > 0)
    for (let i = playerInput; i > 0; i--) {
      const grid = document.createElement('div');
      grid.style.borderStyle = 'solid';
      grid.style.borderColor = 'black';
      grid.style.borderWidth = '1px';
      grid.classList.add('square4', `--${i}`);
      gridItem4.push(grid);
      container4.appendChild(grid);
      grid.addEventListener('mouseover', function () {
        grid.classList.add('sqcolor');
        if (btnColor.classList.contains('active')) {
          grid.classList.add('sqcolor');
        } else {
          grid.classList.remove('sqcolor');
        }
      });
    }
  else if (gridItem4.length === playerInput) {
    return;
  }
}

function addGridItem16() {
  container16.classList.remove('hidden');
  container8.classList.add('hidden');
  container4.classList.add('hidden');
  container64.classList.add('hidden');

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
  container4.classList.add('hidden');
  container64.classList.add('hidden');

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

// addGridItem16();

btn64.addEventListener('click', addGridItem64);
// btn16.addEventListener('click', addGridItem16);
btn8.addEventListener('click', addGridItem8);
btn4.addEventListener('click', addGridItem4);

btnColor.addEventListener('click', function () {
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');
});

btnEraser.addEventListener('click', function () {
  btnColor.classList.remove('active');
  btnEraser.classList.add('active');
});

btnClear.addEventListener('click', function () {
  container16.innerHTML.classList.remove('sqcolor');
});

function generateGridItemAmount(a) {
  sketchpad.innerHTML = '';
  playerInput = a * a;
  gridItem = [];

  for (let i = 0; i < playerInput; i++) {
    let div = document.createElement('div');
    div.className = 'square';
    // div.textContent = `${i}`;
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
      });
    });
  });
};
// setGrid();

const setGrid = function (e) {
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');

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
// btnClear.addEventListener('click', function () {
//   gridItem.classList.remove('sqcolor');
// });
// gridItems();
// console.log(gridItem);
// // console.log(gridItems);
// gridItem[0].addEventListener('mouseover', function () {
//   gridItem[0].classList.add('sqcolor');
//   if (btnColor.classList.contains('active')) {
//     gridItem[0].classList.add('sqcolor');
//   } else {
//     gridItem[0].classList.remove('sqcolor');
//   }
// });
