document.querySelector('.login-form').addEventListener('submit', function(e) {
    // Evita que la página se recargue cuando se envíe el formulario
    e.preventDefault();
    
    // Recoge los datos del formulario
    const formData = {};
    for (let element of this.elements) {
      // Comprueba que el espacio del formulario no esté vacío
      if (element.value.trim() === '') {
        alert('Todos los espacios deben ser rellenados');
        return;
      }
      formData[element.name] = element.value;
    }

    // Muestra los datos del formulario en la consola
    console.log(formData);
    
    // Borra los valores de los campos
    this.reset();
  });
