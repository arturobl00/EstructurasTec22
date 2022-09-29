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
    document.getElementById('titulo').value = "";
}

function mostrar(){
    document.getElementById("contenido").innerHTML = ""
    peliculas.forEach(function(elemento, index){
        document.getElementById("contenido").innerHTML += "<tr><td>" + 
        100 + index + "</td><td>" + elemento + 
        "</td><td><button class = 'btn btn-danger' onclick='posicion(" + index + ")'>" + 
        "ELIMINAR</button></td><td><button class = 'btn btn-warning' onclick='editar(" + index + ")'>EDITAR</button></td></tr>"
    });
}


function posicion(pos){
    peliculas.splice(pos, 1);
    alert("La " + 100 + pos + " posicion del arreglo fue eliminada");
    mostrar();
}


function editar(pos){
    console.log(pos);
    document.getElementById('tituloE').value = peliculas[pos];
    document.getElementById('editar').style.display="block";
    document.getElementById("temporal").value = pos;
    //mostrar();   
}

function guardarcambios(){
    console.log("HOla");
    var tituloE = document.getElementById('tituloE').value;
    var posi = document.getElementById("temporal").value;

    if(tituloE == ""){
        //console.log("No tiene datos");
        alert("Debe Ingresar los datos antes de precionar Agregar");
    }
    else{
        //console.log("Si tiene datos");
        alert("Registro Editado con !Exito!");
        peliculas[posi] = tituloE;
        document.getElementById('editar').style.display="none";
        mostrar();
    }
}