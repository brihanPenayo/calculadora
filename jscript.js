// Definimos dos variables que utilizaremos mas adelante
let flujo;
let aux;

// Mediante nuestro elemento form, obtenemos el valor del input al realizarse el submit
// y guardamos el elemento resultado en una Variable
document.getElementById("form").addEventListener('submit', () => {
    let peso = document.getElementById("input-peso").value;
    let valoresResultado = document.getElementById('resultado');
    document.getElementById('resultadoTitulo').innerHTML = 'Resultado para ' + peso + ' Kg:';
    // Procedemos a preguntar si el peso es mayor a 30 y a aplicar las funciones segun el resultado
    valoresResultado.innerHTML = (peso > 30) ? calcularSuperficieCorporal(peso) : calcular(peso);
    document.getElementById("input-peso").value = null; // Borramos el valor de nuestro input en la pagina web
    animarElemento("seccion-resultados", 140); // Animamos los resultados mediante esta funcion
})


// Creamos la funcion animarElemento que recibe un elemento como parametro y la duracion en milisegundos
function animarElemento(nombre, ms) {
    document.getElementById(nombre).animate(
        [
            { transform: 'scale(1.2)' },
        ], {
        duration: ms,
    }
    );
}

// Creamos la funcion calcular mediante Holliday-Segar:
function calcular(peso) {
    // Mediante un If preguntamos si el peso es menor o igual a 10
    if (peso <= 10) {
        flujo = peso * 100;
    } else if (peso <= 20) { // Si no es menor o igual a 10 entra en la segunda condicion
        aux = peso - 10;
        flujo = 10 * 100;
        flujo += aux * 50;
    } else if (peso <= 30) { // Por ultimo si es menor o igual a 30 hacemos lo siguiente
        aux = peso - 20;
        flujo = 10 * 100 + 10 * 50;
        flujo += aux * 20;
    }

    // Retornamos los valores y utilizamos Math.Round para redondear los decimales 
    return 'Volumen Diario: ' + flujo + ' cc<br/>' +
        'Mantenimiento: ' + Math.round(flujo / 24) + ' cc/hr<br/>' +
        'm+m/2: ' + Math.round((flujo * 1.5) / 24) + ' cc/hr';
}

function calcularSuperficieCorporal(peso) {
    aux = parseInt(peso); //Tuve que usar un ParseInt por que el valor de "Peso" me tomaba como String
    flujo = (((aux * 4) + 7) / (aux + 90)); // Hacemos el calculo mediante la ecuacion de Superficie Corporal

    // Retornamos los valores y utilizamos Math.Round para redondear los decimales 
    return 'SC 1500: ' + Math.round(flujo * 1500) + ' cc<br/>' +
        'SC 2000: ' + Math.round(flujo * 2000) + ' cc';

}
