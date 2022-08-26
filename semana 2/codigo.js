function pasarDato(){
    var miSaludo = document.getElementById("caja").value;
    console.log(miSaludo);
    document.getElementById("etiqueta").innerHTML = miSaludo;
}

function miTabla(){
    var codigo = "<br/><br/><table border='2'>" +
    "<tr>" +
    "<td>Valor1<td/><td>Valor2<td/>" +
    "<tr/>" +
    "<tr>" +
    "<td>ValorA<td/><td>ValorB<td/>" +
    "<tr/>" +
    "</table>";
    document.getElementById("mTabla").innerHTML = codigo;
}

function encender(){
    document.getElementById("foco").src="focoon.png";
}

function apagar(){
    document.getElementById("foco").src="focooff.png";
}
