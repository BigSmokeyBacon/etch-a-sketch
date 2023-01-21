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
  console.log(gridItem16);
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
  // for (let i = gridItem.length; i > 0; i--) {
  //   gridItem.pop();
  // }
  // gridItem.splice(0, gridItem.length);
  console.log(playerInput);
  console.log(gridItem8.length);
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
// addGridItem(16);
// console.log(gridItem);
// console.log(container16);

// console.log(gridItem[0].classList.contains('square'));
// function emptyGridItem() {
//   for (let i = 0; i < gridItem.length; ) {
//     if (gridItem[i].classList.contains('square')) {
//       container16.removeChild(div);
//     } else {
//       i++;
//     }
//   }
// }
// emptyGridItem();
// console.log(gridItem);
btn16.addEventListener('click', addGridItem16);
btn8.addEventListener('click', addGridItem8);
// btn16.addEventListener('click', function () {
//   gridItem = 0;
//   addGridItem(16);
//   // click = true;
//   console.log(click);
//   if (sketchpad.classList.contains('eight')) {
//     sketchpad.removeChild(container8);
//     sketchpad.classList.remove('eight');
//   }
//   sketchpad.appendChild(container16);
//   container16.classList.add('screen');
//   playerInput = 16 * 16;
//   if (click) {
//     while (playerInput > 0) {
//       playerInput--;
//       const grid = document.createElement('div');
//       if (click) {
//         grid.style.borderStyle = 'solid';
//         grid.style.borderColor = 'black';
//         grid.style.borderWidth = '1px';
//         grid.classList.add('square');

//         grid.addEventListener('mouseover', function () {
//           grid.classList.add('sqcolor');
//           if (btnColor.classList.contains('active')) {
//             grid.classList.add('sqcolor');
//           } else {
//             grid.classList.remove('sqcolor');
//           }
//         });
//         container16.appendChild(grid);
//       } else {
//         container16.removeChild(grid);
//       }
//     }
//   }
//   click = false;
//   sketchpad.classList.add('sixteen');
//   console.log(click);
// });

console.log(sketchpad.classList.contains('sixteen'));
// btn8.addEventListener('click', function () {
//   gridItem = 0;
//   console.log(click);
//   if (sketchpad.classList.contains('sixteen')) {
//     sketchpad.removeChild(container16);
//     sketchpad.classList.remove('sixteen');
//   }
//   sketchpad.appendChild(container8);
//   container8.classList.add('screen');
//   playerInput = 8 * 8;
//   while (playerInput > 0) {
//     playerInput--;
//     const grid = document.createElement('div');
//     grid.style.borderStyle = 'solid';
//     grid.style.borderColor = 'black';
//     grid.style.borderWidth = '1px';
//     grid.classList.add('square2');

//     grid.addEventListener('mouseover', function () {
//       grid.classList.add('sqcolor');
//       if (btnColor.classList.contains('active')) {
//         grid.classList.add('sqcolor');
//       } else {
//         grid.classList.remove('sqcolor');
//       }
//     });
//     container8.appendChild(grid);
//   }
//   sketchpad.classList.add('eight');
//   click = true;
//   console.log(click);
// });

// grid loop
// addGridItem();
// container16.appendChild(gridItem[0]);
// console.log(gridItem);
// console.log(addGridItem());
// let playerInput = 16 * 16;

// grid.addEventListener('mouseover', function () {
//   grid.classList.add('sqcolor');
// });

btn16;

console.log(click);
console.log(container16);
