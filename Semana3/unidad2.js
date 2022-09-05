//Decarar una variable
var miVariable;

//Declarar un Array
var miArreglo = [10,30,6,19];

//Declarar un Objeto
var miObjeto = {
    nombre: "Arturo",
    apellido: "Bustamante",
    edad: 41,
    telefono: "2381861050" 
}

//Declarar un objeto Arreglo
var miObjArreglo = [
    {
        matricula: "21120082",
        nombre: "monserrath",
        edad: 18
    },
    {
        matricula: "2222001",
        nombre: "mario",
        edad: 19
    },
    {
        matricula: "21120080",
        nombre: "Adolfo",
        edad: 18
    }
]

function paraVariable(){
    miVariable = document.getElementById("variable").value;
    document.getElementById("respuesta1").innerHTML = miVariable;
}

function visualizarArreglo(){
    pos = document.getElementById("arreglo").value;
    document.getElementById("respuesta2").innerHTML = miArreglo[pos];
}

function agregaArreglo(){
    elemento = parseInt(document.getElementById("addArreglo").value);
    miArreglo.push(elemento);
    pos = miArreglo.length - 1;
    document.getElementById("respuesta3").innerHTML = miArreglo[pos];
}