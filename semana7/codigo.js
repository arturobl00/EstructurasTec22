var miArreglo = [];

function agregar(){
    //Obtener dato como cadena
    var MelDato = document.getElementById("dato").value;
    //Convertir en entero
    var elDato = parseInt(MelDato);
    if(!elDato){
        alert("Coloque un número antes de continuar");
    }
    else{
        parseInt(elDato);
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
    }else if(metodo == 1){
        for(let pos = 0; pos < tamaño; pos++){
            document.getElementById("mostrarDatos").innerHTML += '<p>Posición: ' + 
            (pos + 1) + ': ' + 
            miArreglo[pos] + '</p>';
            console.log("Este es el pos de cola: ",pos);
        }
    }else if(metodo == 2){
        console.log("Burbuja Acendente");
        let burbuja;
        for(let pos = 0; pos < tamaño-1; pos++){
            for(let pos1 = (pos + 1); pos1 < tamaño; pos1++){
                console.log(pos, "-", miArreglo[pos],pos1, "-", miArreglo[pos1]);
                if(miArreglo[pos] > miArreglo[pos1]){
                    burbuja = miArreglo[pos];
                    miArreglo[pos] = miArreglo[pos1];
                    miArreglo[pos1] = burbuja;
                    console.log("Hay cambio");
                }
            }
        }
        for(let pos = 0; pos < tamaño; pos++){
            document.getElementById("mostrarDatos").innerHTML += '<p>Posición: ' + 
            (pos + 1) + ': ' + 
            miArreglo[pos] + '</p>';
        }
    }else{
        console.log("Burbuja Decendente");
        let burbuja;
        for(let pos = 0; pos < tamaño-1; pos++){
            for(let pos1 = (pos + 1); pos1 < tamaño; pos1++){
                console.log(pos, "-", miArreglo[pos],pos1, "-", miArreglo[pos1]);
                if(miArreglo[pos] < miArreglo[pos1]){
                    burbuja = miArreglo[pos];
                    miArreglo[pos] = miArreglo[pos1];
                    miArreglo[pos1] = burbuja;
                    console.log("Hay cambio");
                }
            }
        }
        for(let pos = 0; pos < tamaño; pos++){
            document.getElementById("mostrarDatos").innerHTML += '<p>Posición: ' + 
            (pos + 1) + ': ' + 
            miArreglo[pos] + '</p>';
        }
    }
    
}


