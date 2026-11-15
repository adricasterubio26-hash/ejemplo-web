
alert("Hola, bienvenido a la calculadora");
function escribir(valor){
    
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0") {
        pantalla.value = valor;
    }
    else{
        pantalla.value = pantalla.value + valor;
    }
}
function borrar(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
}
function borrarTodo(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}
function resolver(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value);
}
