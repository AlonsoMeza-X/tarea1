const calculos = document.getElementById("calculos"); //se llama a la tabla en html y así agregar lo valores con las funciones.
const datos = document.getElementById("datos");// manipular los datos que vienen depués del envio de datos.


//Funciones de suma, resta. multiplicación y división
function sumar(number1, number2) {
    return parseInt(number1) + parseInt(number2)
}

function resta(number1, number2) {
    return parseInt(number1) - parseInt(number2)
}

function division(number1, number2) {
    if(number2 == 0){ return "El resultado es Infinito"}else
    {return parseInt(number1) / parseInt(number2)}
}

function multiplicacion(number1, number2) {
    return parseInt(number1) * parseInt(number2)
}
//para que se refleje los calculos en la página
function dibujarTabla(resultado1, resultado2, resultado3, resultado4) {
    let contenidoTabla = " ";
    contenidoTabla += "<tr><td>" + resultado1 + "</td>";
    contenidoTabla += "<td>" + resultado2 + "</td>";
    contenidoTabla += "<td>" + resultado3 + "</td>";
    contenidoTabla += "<td>" + resultado4 + "</td></tr>";
    calculos.innerHTML = contenidoTabla; // agrega la información en Html y lo refleja en la página
}

datos.addEventListener('submit', function (event) {
    event.preventDefault();//evita que se recarge la página.
    // Obtiene los numeros del html
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    //Se crea constante para agregar la funciones y realizar los calculos.
    const resultado1 = sumar(number1, number2)
    // console.log("Resultado de la suma:", resultado1);

    const resultado2 = resta(number1, number2);
    // console.log("Resultado de la resta:", resultado2);

    const resultado3 = division(number1, number2)
    // console.log("Resultado de la divisón:", resultado3);

    const resultado4 = multiplicacion(number1, number2);
    // console.log("Resultado de la multiplicación:", resultado4);

    //Refleja los calculos hacia la tabla
    dibujarTabla(resultado1, resultado2, resultado3, resultado4);


    //resetea el formulario después de procesar los datos
    datos.reset();
});

