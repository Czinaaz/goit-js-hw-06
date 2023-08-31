function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controlsDiv = document.querySelector('#controls');

const input = controlsDiv.querySelector('input');

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxesDiv = document.querySelector('#boxes');
