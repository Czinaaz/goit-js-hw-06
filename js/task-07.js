
const inputItem = document.getElementById('font-size-control');

const textItem = document.getElementById('text')

inputItem.addEventListener('input', knockItem);

function knockItem(){
    const knockItemValue = inputItem.value;
    textItem.style.fontSize = knockItemValue + "px";
}