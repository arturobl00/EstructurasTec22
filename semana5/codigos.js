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
        mostrar();
    }
}

function mostrar(){
    document.getElementById("contenido").innerHTML = ""
    peliculas.forEach(function(elemento, index){
        document.getElementById("contenido").innerHTML += "<tr><td>" + 
        100 + index + "</td><td>" + elemento + 
        "</td><td><button class = 'btn btn-danger'>" + 
        "ELIMINAR</button></td><td><button class = 'btn btn-warning'>EDITAR</button></td></tr>"
    });
}