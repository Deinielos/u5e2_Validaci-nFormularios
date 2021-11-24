document.addEventListener("DOMContentLoaded", function() {   
    document.getElementById("enviar").addEventListener("click", validarFormulario); 
    
  });
  
  function validarFormulario() {
    validarNombre();
    validarApellidos();
    console.log("ey");
  }

  function validarNombre() {
    let elemento = document.getElementById("nombre");
    console.log("ey");
    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        elemento.setCustomValidity("Campo Vacio");
      }
      if (elemento.validity.patternMismatch) {
        elemento.setCustomValidity("La longitud del texto es erronea");
      }
    }
  }

  function validarApellidos() {
    var elemento = document .getElementById ("apellidos");
    if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
        elemento.setCustomValidity("Campo Vacio");
      }
      if (elemento.validity.patternMismatch) {
        elemento.setCustomValidity("La longitud del texto o el espaciado, es erronea");
      }
    }
  }