alert("Bienvenido al juego de Piedra, Papel o Tijeras");

let partidas = 0;
let ganadas=0;
let empatadas=0;
let perdidas=0;
function juego(jugador) {
    const opciones = ["piedra", "papel", "tijeras"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;
    partidas++;

if (jugador == maquina) {
    console.log("Empate");
    empatadas++;
} else if (
    (jugador == "piedra" && maquina == "tijeras")||
    (jugador == "papel" && maquina == "piedra")||
    (jugador == "tijeras" && maquina == "papel")
) {
    mensaje="Gana el jugador";
    ganadas++;
} else {
    mensaje="Gana la máquina";
    perdidas++;
}
document.getElementById("jugada-jugador").textcontent=
"Tu eleccion:${jugador}";
document.getElementById("jugada-maquina").textcontent=
"Jugada de la máquina: ${maquina}";

document.getElementById("mensaje").textcontent=mensaje;
document.getElementById("partidas").textcontent =
 `Partidas jugadas: ${partidas}`;
document.getElementById("ganadas").textcontent = `Partidas ganadas: ${ganadas}`;
document.getElementById("empatadas").textcontent = `Partidas empatadas: ${empatadas}`;
document.getElementById("perdidas").textcontent = `Partidas perdidas: ${perdidas}`;

}
