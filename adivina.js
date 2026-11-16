// VARIABLES GLOBALES
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 7;
let partidasGanadas = 0;
let partidasPerdidas = 0;
let partidaTerminada = false;

// ELEMENTOS DEL DOM
const campoNumero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");
const textoIntentos = document.getElementById("intentos");
const textoGanadas = document.getElementById("ganadas");
const textoPerdidas = document.getElementById("perdidas");
const botonComprobar = document.getElementById("btnComprobar");

// FUNCIÓN COMPROBAR NÚMERO
function comprobarNumero() {
    if (partidaTerminada) {
        mensaje.textContent = "La partida ha terminado. Pulsa «Nueva partida».";
        return;
    }

    // 1. Recoger el número introducido
    const numero = Number(campoNumero.value);

    // 2. Validar que es un entero entre 1 y 100
    if (campoNumero.value === "" || !Number.isInteger(numero) || numero < 1 || numero > 100) {
        mensaje.textContent = "Introduce un número entero entre 1 y 100.";
        return;
    }

    // 3. Incrementar intentos
    intentos++;
    textoIntentos.textContent = "Intentos: " + intentos + " / " + maxIntentos;

    // 4. Comparar con el número secreto
    if (numero === numeroSecreto) {
        mensaje.textContent = "¡Enhorabuena! Has acertado el número.";
        partidasGanadas++;
        partidaTerminada = true;
    } else if (numero < numeroSecreto) {
        mensaje.textContent = "El número secreto es MAYOR.";
    } else {
        mensaje.textContent = "El número secreto es MENOR.";
    }

    // 5. Fin de partida si se agotan los intentos sin acertar
    if (!partidaTerminada && intentos >= maxIntentos) {
        mensaje.textContent = "Has perdido. El número secreto era " + numeroSecreto + ".";
        partidasPerdidas++;
        partidaTerminada = true;
    }

    // 6. Actualizar el marcador
    textoGanadas.textContent = "Partidas ganadas: " + partidasGanadas;
    textoPerdidas.textContent = "Partidas perdidas: " + partidasPerdidas;

    if (partidaTerminada) {
        botonComprobar.disabled = true;
        campoNumero.disabled = true;
    }

    campoNumero.value = "";
}

// FUNCIÓN NUEVA PARTIDA
function nuevaPartida() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    partidaTerminada = false;

    campoNumero.value = "";
    campoNumero.disabled = false;
    botonComprobar.disabled = false;
    campoNumero.focus();

    mensaje.textContent = "¡Empieza a jugar!";
    textoIntentos.textContent = "Intentos: 0 / " + maxIntentos;
}
