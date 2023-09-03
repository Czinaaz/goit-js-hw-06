
const formItem = document.querySelector('.login-form');

formItem.addEventListener('submit', itemSubmit);
function itemSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || ! password){
        alert('Wszystkie pola powinny zostać wypełnione');
        return;
    }

const formValues ={
    email,
    password,
};

console.log('Form data:', formValues);

event.currentTatget.reset();
}