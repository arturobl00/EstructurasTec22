var letras = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numero = [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
function codificar(){
    palabra =document.getElementById("palabra");
    numero = document.getElementById("rango").value;
    palabraArray = [...palabra.value.toUpperCase()];
    tamaño = palabraArray.length;

    alert(numero);
    alert(palabraArray);
    alert(tamaño);
    
    for(x = 1; x<=numero; x++){
        switch (palabraArray[x]) {
            case "A":
                alert(1);
                break;
            case "B":
                alert(2);
                break;
            case "C":
                alert(3);
                break;
            default:
                return
        }
    }
}
