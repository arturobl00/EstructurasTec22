var peliculas = [];

function agregar(){
    var titulo = document.getElementById('titulo').value;
    if(titulo == ""){
        //console.log("No tiene datos");
        alert("Debe Ingresar los datos antes de precionar Agregar");
    }
    else{
        //console.log("Si tiene datos");
        alert("Registro Agregado con !Exito!");
        peliculas.push(titulo);
    }
}

