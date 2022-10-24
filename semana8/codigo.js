const miNumeros = [4,20,29,150,60,90];
console.log(miNumeros);

function acendente(){
    let burbuja;
    for(let x = 0; x < miNumeros.length - 1; x++){
        //console.log("Valor x:", x);
        for(let y = x + 1; y < miNumeros.length; y++){
            //console.log("Valor y:", y);
            if(miNumeros[x] > miNumeros[y]){
                burbuja = miNumeros[x];
                miNumeros[x] = miNumeros[y];
                miNumeros[y] = burbuja;
            }
        } 
    }
}

function decendente(){
    let burbuja;
    for(let x = 0; x < miNumeros.length - 1; x++){
        //console.log("Valor x:", x);
        for(let y = x + 1; y < miNumeros.length; y++){
            //console.log("Valor y:", y);
            if(miNumeros[x] < miNumeros[y]){
                burbuja = miNumeros[x];
                miNumeros[x] = miNumeros[y];
                miNumeros[y] = burbuja;
            }
        } 
    }
}

/*Crear una función que devuelva: 
1.-La suma de todos los elementos del arreglo
2.-El promedio
3- El número más grande
4.-El número más pequeño
5.-El número que este antes del promedio
6.-El número que este despues del promedio*/

function magic(){
    let suma = 0;
    let promedio = 0;
    let antes;
    let despues;
    let bandera = 0;
    for(let x = 0; x < miNumeros.length; x++){
        suma += miNumeros[x];
    }
    promedio = suma/miNumeros.length;
    console.log("La suma es: ", suma);
    console.log("El promedio es: ", promedio);
    decendente();
    console.log("EL numero mas grande: ",miNumeros[0]);
    acendente();
    console.log("EL numero mas pequeño: ",miNumeros[0]);
    for(let x = 0; x < miNumeros.length; x++){
        if(miNumeros[x] < promedio){
            antes = miNumeros[x];
        }
        if(miNumeros[x] > promedio && bandera == 0){
            despues = miNumeros[x];
            bandera = 1;
        }
    }
    console.log("EL numero antes del promedio: ",antes);
    console.log("EL numero despues del promedio: ",despues);
}