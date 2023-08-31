
const formItem = document.querySelector('.login-form');

formItem.addEventListener('submit', function(event){
    event.preventDefault()


const emailInput = formItem.elements.email;
const passwordInput = formItem.elements.password;

const formDataObject = {
    email: emailInput.value,
    password: passwordInput.value

};

if (!formDataObject.email || !formDataObject.password){
    alert('Wszystkie pola powinny być wypełnione!');
    return;
}

console.log('Dane formularza:', formDataObject);

formItem.reset();

});



