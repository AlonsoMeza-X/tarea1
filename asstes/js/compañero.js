const formulario = document.getElementById("formCalculator");
const resultado = document.getElementById("resultado");

function sumar(numero1, numero2) {
    return parseInt(numero1) + parseInt(numero2);
}

function restar(numero1, numero2) {
    return parseInt(numero1) - parseInt(numero2);
}

function dividir(numero1, numero2) {
    if(numero2 == 0) {
        return 'No puede dividirse por 0'
    }

    else {
        return `La división de ${numero1} con ${numero2} es: ${parseInt(numero1) / parseInt(numero2)}`;
    }
    
}

function multiplicar(numero1, numero2) {
    return parseInt(numero1) * parseInt(numero2);
}

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operacion = document.getElementById("operacion").value;

    switch (operacion) {
        case '+':
            
            resultado.innerText = `La suma de ${numero1} con ${numero2} es: ${sumar(numero1,numero2)}`;
            break;
        
        case '-':

            resultado.innerText = `La resta de ${numero1} con ${numero2} es: ${restar(numero1,numero2)}`;

            break;
        case '/':
            resultado.innerText = dividir(numero1, numero2);
            break;

        case '*':
            resultado.innerText = `La multiplicación de ${numero1} con ${numero2} es: ${multiplicar(numero1,numero2)}`;
            break;

        default:
            resultado.innerText = "Operación no válida";
    }

    formulario.reset();

});