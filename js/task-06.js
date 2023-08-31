const inputItem = document.querySelector('#validation-input');

inputItem.addEventListener('blur', validationBlur);

function validationBlur(){
    const expectedLength = parseInt(inputItem.getAttribute('data-length'));
    const inputValueLength = inputItem.value.length;

    if (inputValueLength===expectedLength){
        inputItem.classList.remove('invalid');
        inputItem.classList.add('valid')
    } else {
        inputItem.classList.remove('valid');
        inputItem.classList.add('invalid')
    }
}