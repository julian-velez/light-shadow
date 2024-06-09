// Obtiene el elemento con el id 'text' y lo asigna a la variable 'text'
let text = document.getElementById('text');

// Obtiene el elemento con el id 'light' y lo asigna a la variable 'light'
let light = document.getElementById('light');

// Añade un evento de escucha para el movimiento del ratón en todo el documento
document.addEventListener('mousemove', function(event) {
    // Obtiene la posición horizontal del cursor del ratón
    let mouseX = event.clientX;

    // Obtiene la posición vertical del cursor del ratón
    let mouseY = event.clientY; 

    // Actualiza la posición horizontal del elemento 'light' para que siga el cursor del ratón
    light.style.left = mouseX + 'px';

    // Actualiza la posición vertical del elemento 'light' para que siga el cursor del ratón
    light.style.top = mouseY + 'px';

    // Calcula la distancia horizontal entre el cursor del ratón y el centro del elemento 'text'
    let distanceX = mouseX - text.offsetLeft - text.offsetWidth / 2;

    // Calcula la distancia vertical entre el cursor del ratón y el centro del elemento 'text'
    let distanceY = mouseY - text.offsetTop - text.offsetHeight / 2;

    // Inicializa una cadena vacía para almacenar los valores de las sombras
    let newShadow = '';

    // Bucle para crear múltiples capas de sombras para el efecto de sombra
    for (let i = 0; i < 200; i++) {
        // Calcula la posición horizontal de la sombra para la capa actual
        let shadowX = -distanceX * (i / 200);

        // Calcula la posición vertical de la sombra para la capa actual
        let shadowY = -distanceY * (i / 200);

        // Calcula la opacidad de la sombra para la capa actual
        let opacity = 1 - (i / 100);

        // Añade la sombra calculada a la cadena de sombras
        newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33,33,33,' + opacity + ')';
    }

    // Aplica la cadena de sombras calculada al estilo 'textShadow' del elemento 'text'
    text.style.textShadow = newShadow;
});
