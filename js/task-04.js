let counterValue = 0;

const decretmentBtn = document.querySelector('[data-action="decrement"]');
const incretmentBtn = document.querySelector('[data-action="increment"]');

decretmentBtn.addEventListener('click', decrementCounter);
incretmentBtn.addEventListener('click', incretmentCounter);

function decrementCounter(){
    counterValue -= 1;
    updateCounterValue();
}

function incretmentCounter(){
    counterValue += 1;
    updateCounterValue();
}

function updateCounterValue(){
    const counterElement = document.getElementById('value');
    counterElement.textContent = counterValue;
}