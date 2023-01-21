'use strict';
const container = document.createElement('div');
const sketchpad = document.querySelector('.sketchpad');
const btnColor = document.querySelector('.color');
const btnEraser = document.querySelector('.eraser');
const btn16 = document.querySelector('.sixteen');
const btn8 = document.querySelector('.eight');
let playerInput;
sketchpad.appendChild(container);
container.classList.add('screen');

btnColor.addEventListener('click', function () {
  btnColor.classList.add('active');
  btnEraser.classList.remove('active');
});

btnEraser.addEventListener('click', function () {
  btnColor.classList.remove('active');
  btnEraser.classList.add('active');
});

btn16.addEventListener('click', function () {
  playerInput = 16 * 16;
  while (playerInput > 0) {
    playerInput--;
    const grid = document.createElement('div');
    grid.style.borderStyle = 'solid';
    grid.style.borderColor = 'black';
    grid.style.borderWidth = '1px';
    grid.classList.add('square');

    grid.addEventListener('mouseover', function () {
      grid.classList.add('sqcolor');
      if (btnColor.classList.contains('active')) {
        grid.classList.add('sqcolor');
      } else {
        grid.classList.remove('sqcolor');
      }
    });
    container.appendChild(grid);
  }
});

btn8.addEventListener('click', function () {
  playerInput = 8 * 8;
  while (playerInput > 0) {
    playerInput--;
    const grid = document.createElement('div');
    grid.style.borderStyle = 'solid';
    grid.style.borderColor = 'black';
    grid.style.borderWidth = '1px';
    grid.classList.add('square2');

    grid.addEventListener('mouseover', function () {
      grid.classList.add('sqcolor');
      if (btnColor.classList.contains('active')) {
        grid.classList.add('sqcolor');
      } else {
        grid.classList.remove('sqcolor');
      }
    });
    container.appendChild(grid);
  }
});
//grid loop
// let playerInput = 16 * 16;
while (playerInput > 0) {
  playerInput--;
  const grid = document.createElement('div');
  grid.style.borderStyle = 'solid';
  grid.style.borderColor = 'black';
  grid.style.borderWidth = '1px';
  grid.classList.add('square');

  grid.addEventListener('mouseover', function () {
    grid.classList.add('sqcolor');
    if (btnColor.classList.contains('active')) {
      grid.classList.add('sqcolor');
    } else {
      grid.classList.remove('sqcolor');
    }
  });
  container.appendChild(grid);
}

// grid.addEventListener('mouseover', function () {
//   grid.classList.add('sqcolor');
// });

// square.textContent = 'hello';
// grid.textContent = 'hello';
