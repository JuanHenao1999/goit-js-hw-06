function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorOutput = document.querySelector('.color');

button.addEventListener('click', () => {
  const newHexColor = getRandomHexColor();
  document.body.style.backgroundColor = newHexColor;
  colorOutput.innerText = newHexColor;
});
