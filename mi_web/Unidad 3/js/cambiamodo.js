alert("el js se ejecuta correctamete")

function cambiamodo(){
    alert("se cambio el color de la web");
    const enlace=document.getElementById("tema-oscuro");
    enlace.disabled=!enlace.disabled;
}