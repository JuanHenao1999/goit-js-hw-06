"use strict";

const numberOfElements = document.querySelector('input');
const createElements = document.querySelector('[data-create]');
const deleteElements = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

function createBoxes() {
  let widthElement = 30;
  let heightElemnt  = 30;
  let counter = 0;
  while (Number.parseInt(numberOfElements.value)>counter) {
    const boxes = document.createElement('div');
    boxes.style.width = `${widthElement}px`;
    boxes.style.height = `${heightElemnt}px`;
    boxes.style.backgroundColor = getRandomHexColor();
    widthElement+=10;
    heightElemnt+=10;
    box.insertAdjacentElement('beforeend', boxes);
    counter++;
  }
  box.style.display = "flex";
  box.style.gap = "10px";
  box.style.paddingTop = "5px";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.flexWrap ="wrap";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function destroyBoxes(){
  boxes.innerHTML = "";
}

createElements.addEventListener('click', createBoxes);
deleteElements.addEventListener('click', destroyBoxes);



