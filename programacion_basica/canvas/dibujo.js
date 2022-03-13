var d = document.getElementById("dibujo"); // es un métdodo del elemento
var lienzo = d.getContext("2d"); // es un método del canvas, también existe el contexto "3d"
console.log(lienzo)

lienzo.beginPath(); // función que inicia un dibujo
lienzo.strokeStyle = "blue"; // atributo o propiedad del objeto "lienzo"
lienzo.moveTo(50, 100);
lienzo.lineTo(250, 2);
lienzo.stroke(); // es el hecho de trazar
lienzo.closePath(); // función que termina un dibujo
