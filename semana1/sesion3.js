function sumar3(n1, n2, n3){
    n1 = n1 + n2 + n3;
    console.log(n1);
    return n1;
}

//Operaciones en javaScrip
//Incrementar y decrementar ++ y  --

function incremento(valor){
    valor++;
    return valor;
}

function decremento(valor){
    valor--;
    return valor;
}

//Usar Mod o %

function dividemod(v1, v2){
    v1 = v1 % v2;
    return v1;
}

//Ejemplo de asignación compuesta
function asignacion(miValor){
    //Propuesta 1 miValor = miValor + 20;
    miValor += 20;
    return miValor;
}

function asignacion2(miValor){
    //Propuesta 1 miValor = miValor + 20;
    miValor -= 20;
    return miValor;
}

function asignacion3(miValor){
    //Propuesta 1 miValor = miValor + 20;
    miValor *= 20;
    return miValor;
}

function asignacion4(miValor){
    //Propuesta 1 miValor = miValor + 20;
    miValor /= 2;
    return miValor;
}

function miCambio(valor){
    mil = parseInt(valor/1000); 
    console.log("Billetes de mil: ", mil);
    valor %= 1000;
    quini = parseInt(valor/500); 
    console.log("Billetes de quinientos: ", quini);
    valor %= 500;
    doci = parseInt(valor/200); 
    console.log("Billetes de docientos: ", doci);
    valor %= 200;
    cien = parseInt(valor/100); 
    console.log("Billetes de cien: ", cien);
    valor %= 100;
    cincuen = parseInt(valor/50); 
    console.log("Billetes de cincuenta: ", cincuen);
    valor %= 50;
    veinte = parseInt(valor/20); 
    console.log("Billetes de veinte: ", veinte);
    valor %= 20;
    diez = parseInt(valor/10); 
    console.log("Monedas de diez: ", diez);
    valor %= 10;
    cinco = parseInt(valor/5); 
    console.log("Monedas de cinco: ", cinco);
    valor %= 5;
    dos = parseInt(valor/2); 
    console.log("Monedas de dos: ", dos);
    valor %= 2;
    peso = parseInt(valor/1); 
    console.log("Monedas de peso: ", peso);
    valor %= 1;
}

//Trabajando con if
if(true){
    console.log("Es true");
}

if(false){
    console.log("Hola false");
}

if(false){
    console.log("Hola false");
}
else{
    console.log("Hola no false");
}

//Primera comparacion
function compara1(n){
    if(n == 10){
        console.log("N vale 10");
    }
    else{
        console.log("N no vale 10");
    }
}
