const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorSpan = document.querySelector('#invalid');
const emailSpan = document.querySelector('.email-user');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //Verifica se o email está vazio ou inválido
    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        errorSpan.innerHTML = "Valid email required";
        emailInput.parentElement.classList.add('invalid');
    } else {
        localStorage.setItem('userEmail', emailInput.value);
        window.location.href = 'success.html';
    }
    
});

emailInput.addEventListener('input', () => {
    errorSpan.textContent = "";
    emailInput.parentElement.classList.remove('invalid');
});

const userEmail = localStorage.getItem('userEmail');
if (userEmail) {
    document.querySelector('.email-user').textContent = userEmail;
 }





