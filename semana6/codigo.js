var miArreglo = [];

function agregar(){
    var elDato = document.getElementById("dato").value;
    if(!elDato){
        alert("Coloque un número antes de continuar");
    }
    else{
        miArreglo.push(elDato);
    }

    document.getElementById("dato").value="";
    var tamaño1 = miArreglo.length;
    console.log("El arreglo mide: ",tamaño1);

}

function Mostrar(){
    var tamaño = miArreglo.length;
    console.log("El arreglo mide: ",tamaño);

    if(tamaño == 0){
        alert("El Arreglo aun no tiene datos");
    }

    //Limpiar caja y contenedor
    document.getElementById("mostrarDatos").innerHTML = "";

    var metodo = document.getElementById("casilla").value;
    console.log("Este es el metodo: ",metodo)

    if(metodo == 0){
        for(let pos = tamaño; pos > 0; pos--){
            document.getElementById("mostrarDatos").innerHTML += '<p>Posición: ' + 
            pos + ': ' + 
            miArreglo[pos-1] + '</p>';
            console.log("Este es pos de pila: ",pos);
        }
    }else{
        for(let pos = 0; pos < tamaño; pos++){
            document.getElementById("mostrarDatos").innerHTML += '<p>Posición: ' + 
            (pos + 1) + ': ' + 
            miArreglo[pos] + '</p>';
            console.log("Este es el pos de cola: ",pos);
        }
    }
}


