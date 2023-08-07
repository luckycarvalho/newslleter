// document.addEventListener('DOMContentLoaded', () =>{
//     const form = document.querySelector('#form');
//     const emailInput = document.querySelector('#email');
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const errorSpan = document.querySelector('#invalid');
//     const emailSpan = document.querySelector('.displayEmail');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         //Verifica se o email está vazio ou inválido
//         if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
//             errorSpan.innerHTML = "Valid email required";
//             emailInput.parentElement.classList.add('invalid');
//         } else {
//             localStorage.setItem('userEmail', emailInput.value);
//             window.location.href = 'success.html';
//         }
        
//     });

//     emailInput.addEventListener('input', () => {
//         errorSpan.textContent = "";
//         emailInput.parentElement.classList.remove('invalid');
//     });

//     const savedEmail = localStorage.getItem('userEmail');
//     document.querySelector('.displayEmail').textContent = savedEmail;
// });

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const emailInput = document.querySelector('#email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorSpan = document.querySelector('#invalid');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Verifica se o email está vazio ou inválido
        if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
            errorSpan.innerHTML = "Valid email required";
            emailInput.parentElement.classList.add('invalid');
        } else {
            //Salva o email em userEmail e redireciona o usuário para outra página
            localStorage.setItem('userEmail', emailInput.value);
            window.location.href = 'success.html';
        }
    });

    emailInput.addEventListener('input', () => {
        errorSpan.textContent = "";
        emailInput.parentElement.classList.remove('invalid');
    });
});
  





