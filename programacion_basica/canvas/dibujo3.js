var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0
var yi, xf;

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("black", 0, yi, xf, 300);
  console.log("Linea " + l);
}

// while(l < lineas)
// {
//   yi = 10 * l;
//   xf = 10 * (l + 1);
//   dibujarLinea("black", 0, yi, xf, 300);
//   console.log("Linea " + l);
//   l = l + 1 // l++
// }

dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);
