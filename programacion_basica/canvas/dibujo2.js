var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
console.log(lienzo)

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("blue", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 20, 10, 220);
