const inputItem = document.getElementById('name-input');
const outputItem = document.getElementById('name-output');

inputItem.addEventListener('input', updateOutput);

function updateOutput(){
    if (inputItem.value === ''){
        outputItem.textContent ="Anonymous";
    } else {
        outputItem.textContent=inputItem.value;
    }
    
}