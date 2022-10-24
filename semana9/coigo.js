function factorial(x)
{
    var res;
    if(x==0){
        res=1;
    }else{
        res=x * factorial(x-1);

    }
    return res;
}

function hanoi (n, inic, tmp, final) {  
    if (n > 0) { 
        // Mover n-1 discos de "inic" a "tmp".    
     // El temporal es "final". 
        hanoi (n-1, inic, final, tmp); 
        // Mover el que queda en "inic" a "final" 
        console.log("Del poste ", inic, " al poste ", final); 
        // Mover n-1 discos de "tmp" a "final".      // El temporal es "inic". 
        hanoi (n-1, tmp, inic, final);   } } 
   