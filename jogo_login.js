const form = document.querySelector ('.login_header');
const input = document.querySelector('.input_login')
const button = document.querySelector('.login_button')


const validateInput = ({target}) =>{
    if (target.value.length > 3)
    {button.removeAttribute('disabled');
} else{button.setAttribute('disabled', '');} 
        
}


const handleSubmit = (event) =>{
    event.preventDefault();
    localStorage.setItem('player', input.value)
    
    console.log(input.value)
    window.location ='jogo.html';
} 


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

