const input = document.getElementById('validation-input');
  
  input.addEventListener('blur', (event) => {
    const length = +event.target.getAttribute('data-length');
    const textEntered = event.target.value;
    const textLength = textEntered.length;
    
    if (textLength === length) {
      event.target.classList.add('valid');
      event.target.classList.remove('invalid');
    } else {
      event.target.classList.add('invalid');
      event.target.classList.remove('valid');
    }
  });