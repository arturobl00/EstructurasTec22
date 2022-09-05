var paises = ["México","Guatemala","Perú","Chile"];
var error = [];

//repaso ejemplo de como asignar y como concatenar un valor
var nombre = "Henrry";
var apellido = " Manson";
nombre += apellido;
var dato = 10;
dato += 40;

//Funcion que recorre el contenido de un arreglo y lo muestra en pantalla
//Para concatenar un resultado de getElementById se le coloca + al = osea +=
//Funcion READ
function mostrarPaises(){
    document.getElementById("tablaPaises").innerHTML = "";
    paises.forEach(function(elemento){
        document.getElementById("tablaPaises").innerHTML += "<li>" + elemento + "</li>";
        console.log(elemento);
    });   
}

//Funcion Create
//Funcion para agregar elementos a mi arreglo.
function agregarPaises(){
    dato = document.getElementById("pais").value;
    paises.push(dato);
    alert("Dato Registrado consulte en boton mostrar datos");
}
