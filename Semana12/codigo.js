//I - 1 *
//V - 5
//X - 10 *
//L - 50
//C - 100 *
//D - 500
//M - 1000 * No se Pueden escribir mas de 3 veces

/*Se suman sus valores
Se colocan a la izquierda las letras de mayor valor y a la derecha las de menor valor, su valor se suma.
Las letras M, C, X, I se pueden repetir y colocar hasta tres veces seguidas.
Las letras D, L, V se pueden colocar a la derecha para ser sumado su valor, pero sólo una vez, no se pueden repetir.	Ejemplos:
III = 3
XV =15
MM = 2000
CCCLII = 352
A la izquierda de otra, colocada sólo una vez le resta su valor
La letra I colocada a la izquierda de V o de X le resta 1
La letra X colocada a la izquierda de L o de C le resta 10
La letra C colocada a la izquierda de D o de M le resta 100
Cada una de esas letras no se puede restar a otra que sea de un valor que esté a más dos puestos por delante de ella.
Las letras D, L, V no se pueden colocar a la izquierda para restar.
IV = 4
IX = 9
XL =40
XC = 90
CD = 400
CM = 900
Para escribir números mayores de 3999
El valor de una expresión queda multiplicado por mil poniendo una raya horizontal encima.*/


function cambiar(){
    var u = 0;
    var d = 0, d1 = 0;
    var c = 0, c1 = 0;
    var m = 0, m1 = 0;
    var resultado = "";

    var num = document.getElementById("numero").value;
    //var num = parseInt(vnum);
   
    if(num >= 1 && num<=3999){
        console.log("Cumple")
        if(num >= 1000){
            m = parseInt(num / 1000);
            num = num % 1000;
        }
        
        if(num >= 100){
            c = parseInt(num / 100);
            num = num % 100;
        }

        if(num >= 10){
            d = parseInt(num / 10);
            num = num % 10;
        }

        if(num >= 1){
            u = num;
        }

        switch (m) {
            case 1:
                console.log("M")
                resultado += "M";
            break;
            case 2:
                console.log("MM")
                resultado += "MM";
            break;
            case 3:
                console.log("MMM")
                resultado += "MMM";
            break;
        }

        switch (c) {
            case 1:
                console.log("C")
                resultado += "C";
            break;
            case 2:
                console.log("CC")
                resultado += "CC";
            break;
            case 3:
                console.log("CCC")
                resultado += "CCC";
            break;
            case 4:
                console.log("CD")
                resultado += "CD";
            break;
            case 5:
                console.log("D")
                resultado += "D";
            break;
            case 6:
                console.log("DC")
                resultado += "DC";
            break;
            case 7:
                console.log("DCC")
                resultado += "DCC";
            break;
            case 8:
                console.log("DCCC")
                resultado += "DCCC";
            break;
            case 9:
                console.log("CM")
                resultado += "CM";
            break;
        }

        switch (d) {
            case 1:
                console.log("X")
                resultado += "X";
            break;
            case 2:
                console.log("XX")
                resultado += "XX";
            break;
            case 3:
                console.log("XXX")
                resultado += "XXX";
            break;
            case 4:
                console.log("XL")
                resultado += "XL";
            break;
            case 5:
                console.log("L")
                resultado += "L";
            break;
            case 6:
                console.log("LX")
                resultado += "LX";
            break;
            case 7:
                console.log("LXX")
                resultado += "LXX";
            break;
            case 8:
                console.log("LXXX")
                resultado += "LXXX";
            break;
            case 9:
                console.log("XC")
                resultado += "XC";
            break;
        }

        switch (u) {
            case 1:
                console.log("I")
                resultado += "I";
            break;
            case 2:
                console.log("II")
                resultado += "II";
            break;
            case 3:
                console.log("III")
                resultado += "III";
            break;
            case 4:
                console.log("IV")
                resultado += "IV";
            break;
            case 5:
                console.log("V")
                resultado += "V";
            break;
            case 6:
                console.log("VI")
                resultado += "VI";
            break;
            case 7:
                console.log("VII")
                resultado += "VII";
            break;
            case 8:
                console.log("VIII")
                resultado += "VIII";
            break;
            case 9:
                console.log("IX")
                resultado += "IX";
            break;
        }



        console.log("Millares: ", m, " Centenas: ", c, " Decenas: ", d, " Unidades: ",u);
        console.log(resultado)
        document.getElementById("res").innerHTML = "En Romano: " + resultado;
    }
    else{
        console.log("No Cumple")
    }
}
