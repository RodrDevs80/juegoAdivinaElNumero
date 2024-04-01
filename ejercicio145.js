/* 145. Juego de Adivinanza: 
Crea un juego de adivinanza en HTML donde el usuario debe adivinar un número secreto. 
Utiliza JavaScript para generar un número aleatorio, permitir que el usuario ingrese 
adivinanzas y dar pistas sobre si están cerca o lejos del número correcto
 */
/**
 * Pasos:
Inicio: genero un numero aleatorio
Pregunta: numero elegido es igual al numero secreto
Respuesta: se le da pistas al usuario, si no acierta ->mayor o menor 
Ajustar: el usuario ingresa otros números || 10 oportunidades
Repetir: repite los pasos 2 a 4 hasta adivinar el número secreto.
 */
const labelNumero = document.getElementById('labelNumero');
const numeroIngresado = document.getElementById('numeroIngresado');
const pistas = document.getElementById('pistas');
const resultado = document.getElementById('resultado');
const btnJugar = document.getElementById('btnJugar');
const mostrarIntentos = document.getElementById('numero-intentos');
const imgPistas = document.getElementById('img-pistas');
const btnCambiarModo = document.querySelector('button');
const cuerpo = document.body;
const imgCambiarModo = document.getElementById('img-cambiar-modo');
//genero un numero aleatorio
const numeroSecreto = Number((Math.random() * 100).toFixed());
console.log(numeroSecreto);
//contador
//cantidad de intentos para acertar!
let numeroDeIntentos = 10;

const adivinarNumero = (numeroElegido, numeroSecreto) => {
    console.log(numeroElegido);
    console.log(numeroSecreto);
    if (numeroElegido === numeroSecreto) {
        resultado.style.color = 'green';
        resultado.textContent = 'Felicidades Acertaste el numero secreto: ' + numeroSecreto;
        swal({
            title: "Ganaste!!!",
            text: "El juego se reiniciara en 8 segundos",
            icon: "success",
            button: "Jugar de nuevo",
        });
        setTimeout(function () { window.location.reload(true) }, 8000);
    } else if (numeroElegido < numeroSecreto) {
        pistas.textContent = 'El numero elegido es MENOR que el numero secreto';
        imgPistas.setAttribute('src', './img/arriba.png');
        labelNumero.textContent = 'Ingresa otro numero!';
        numeroDeIntentos--;
        mostrarIntentos.textContent = `Te quedan ${numeroDeIntentos} intentos!!!`;

    } else {
        pistas.textContent = 'El numero elegido es MAYOR que el numero secreto';
        imgPistas.setAttribute('src', './img/abajo.png');
        labelNumero.textContent = 'Ingresa otro numero!';
        numeroDeIntentos--;
        mostrarIntentos.textContent = `Te quedan ${numeroDeIntentos} intentos!!!`;

    }
    if (numeroDeIntentos === 0) {
        resultado.style.color = 'red';
        resultado.textContent = `PERDISTE!!! el numero secreto es: ${numeroSecreto}`;
        swal({
            title: "Perdiste!!!",
            text: "El juego se reiniciara en 8 segundos",
            icon: "error",
            button: "Jugar de nuevo",
        });
        setTimeout(function () { window.location.reload(true) }, 8000);
    }
}

btnJugar.addEventListener('click', (e) => {
    numeroElegido = Number(numeroIngresado.value);
    adivinarNumero(numeroElegido, numeroSecreto)
})

btnCambiarModo.addEventListener('click', (e) => {
    if (!cuerpo.classList.contains('modoOscuro')) {
        cuerpo.setAttribute('class', 'modoOscuro');
        imgCambiarModo.setAttribute('src', './img/sol.jpg');

    } else {
        cuerpo.removeAttribute('class', 'modoOscuro');
        imgCambiarModo.setAttribute('src', 'https://m.media-amazon.com/images/I/417Pcbj74vL.png');
    }

})








