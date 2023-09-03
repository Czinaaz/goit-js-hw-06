
const inputItem = document.getElementById('font-size-control');

const textItem = document.getElementById('text')

inputItem.addEventListener('input', knockItem);

function knockItem(event){
    const knockItemValue = event.target.value;
    textItem.style.fontSize = knockItemValue + "px";
}