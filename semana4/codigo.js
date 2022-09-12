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
    if(dato != ""){
        paises.push(dato);
        alert("Dato Registrado con exito!");
        document.getElementById("pais").value = "";
    }else{
        alert("Debes agregar el pais antes de precionar el boton");
    }
    
    mostrarPaises();
}

//Funcion eliminar el ultimo elemento en el array
function eliminarUltimo(){
    //funcion para determiar el tamaño de un arreglo
    var tamaño = paises.length;
    if(tamaño > 0){
        paises.pop();
        alert("La ultima posicion del arreglo fue eliminada");
    }else{
        alert("El arreglo ya esta vacio");
    }
    mostrarPaises();
}

//Funcion para eliminar la primera posicion del array
function primeroUltimo(){
    //funcion para determiar el tamaño de un arreglo
    var tamaño = paises.length;
    if(tamaño > 0){
        paises.shift();
        alert("La primera posicion del arreglo fue eliminada");
    }else{
        alert("El arreglo ya esta vacio");
    }
    mostrarPaises();
}

//Funcion para eliminar un registro en una posición
function posicion(){
    var pos = document.getElementById("pos").value;
    if (pos >= 1){
        if(pos <= paises.length){
            paises.splice(pos-1, 1);
            alert("La " + pos + " posicion del arreglo fue eliminada");
        }
        else{
            alert("La " + pos + " no esta disponible");
        }
    }
    else{
        alert("La " + pos + " no esta disponible");
    }
    mostrarPaises();
}

//Funcion para editar el contenido de una posición
function editar(){
    var pos1 = document.getElementById("pos1").value;
    var val1 = document.getElementById("val1").value;
    console.log(pos1);

    if (pos1 >= 1){
        if(pos1 <= paises.length){
            paises[pos1-1] = val1;
            alert("La " + pos1 + " posicion del arreglo fue Editada");
        }
        else{
            alert("La " + pos1 + " no Existe");
        }
    }
    else{
        alert("La " + pos1 + " no Existe");
    }
    mostrarPaises();   
}