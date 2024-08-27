const calculos = document.getElementById("calculos"); // Se llama a la tabla en HTML para agregar los valores con las funciones.
const datos = document.getElementById("datos"); // Manipular los datos que vienen después del envío de datos.

// Funciones de suma, resta, multiplicación y división
function sumar(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

function resta(number1, number2) {
    return parseInt(number1) - parseInt(number2);
}

function division(number1, number2) {
    if (number2 == 0) { return "El resultado es Infinito" } else { return parseInt(number1) / parseInt(number2) }
}

function multiplicacion(number1, number2) {
    return parseInt(number1) * parseInt(number2);
}

// Para reflejar el cálculo en la página
function dibujarTabla(resultado) {
    let contenidoTabla = " ";
    contenidoTabla += "<tr><td>" + resultado + "</td></tr>";
    calculos.innerHTML = contenidoTabla;
}

// Maneja la selección de la operación y el cálculo
datos.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página.

    // Obtiene los números del HTML
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    // Obtén el valor del botón de radio seleccionado, se le puede agregar al input un .para clase y # id para buscar el boton con ese dato. 
    let operacionSeleccionada = document.querySelector('input[name="contact"]:checked').value;

    let resultado;

    // Realiza la operación seleccionada
    switch (operacionSeleccionada) {
        case "addition":
            resultado = sumar(number1, number2);
            break;
        case "subtraction":
            resultado = resta(number1, number2);
            break;
        case "division":
            resultado = division(number1, number2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(number1, number2);
            break;
        default:
            resultado = "Porfavor seleccionar unas de las opciones nombradas";
    }

    console.log("Resultado de la operación:", resultado);

    // Refleja el cálculo en la tabla
    dibujarTabla(resultado);

    // Resetea el formulario después de procesar los datos
    datos.reset();
});
