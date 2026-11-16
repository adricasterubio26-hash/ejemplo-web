
function piedraPapelTijera(jugador) {
    const maquina = obtenerEleccionAleatoria();
    partidas++;

    if (jugador === maquina) {
        document.getElementById("pantalla").value = "Empate";
        empatadas++;
    } else if (
        (jugador === 'piedra' && maquina === 'tijera') ||
        (jugador === 'tijera' && maquina === 'papel') ||
        (jugador === 'papel' && maquina === 'piedra')
    ) {
        document.getElementById("pantalla").value = "Ganaste";
        ganadas++;
    } else {
        document.getElementById("pantalla").value = "Perdiste";
        perdidas++;
    }

    document.getElementById("jugada-jugador").textContent = `Tu elección: ${jugador}`;
    document.getElementById("jugada-maquina").textContent = `Elección de la máquina: ${maquina}`;
    document.getElementById("partidas").textContent = `Partidas jugadas: ${partidas}`;
    document.getElementById("ganadas").textContent = `Partidas ganadas: ${ganadas}`;
    document.getElementById("empatadas").textContent = `Partidas empatadas: ${empatadas}`;
    document.getElementById("perdidas").textContent = `Partidas perdidas: ${perdidas}`;
}