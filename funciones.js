const barritaOperaciones = document.getElementById("barrita-operaciones")

function agregar_numero(value){
    barritaOperaciones.value = barritaOperaciones.value + value;
}
function agregar_operacion(value){
    barritaOperaciones.value = barritaOperaciones.value + value;
}
function resolver_operacion(){
    barritaOperaciones.value = eval(barritaOperaciones.value) //Eval no es recomendable, pero aun no sé como hacerlo de otra forma :'( .
}
function limpiar_barra(){
    barritaOperaciones.value = "";
}