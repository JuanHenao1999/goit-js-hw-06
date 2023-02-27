let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueContainer = document.querySelector('#value');

decrementButton.addEventListener('click',decrementValue);
incrementButton.addEventListener('click',incrementValue);

function decrementValue() {
    counterValue -= 1;
    valueContainer.textContent = counterValue;
}

function incrementValue() {
    counterValue += 1;
    valueContainer.textContent = counterValue;
}