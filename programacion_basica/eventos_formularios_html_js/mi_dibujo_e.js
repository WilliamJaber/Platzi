var texto = document.getElementById("texto_lineas");
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0
var yi, xf;
var xi, yf;

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

do
{
  l++;
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea("black", 0, yi, xf, 300);
  dibujarLinea("red", xi, 0, 300, yf);
  console.log("lineas " + l);
} while(l < lineas)

dibujarLinea("red", 1, 1, 1, 299);
dibujarLinea("red", 1, 299, 299, 299);

dibujarLinea("black", 299, 1, 1, 1);
dibujarLinea("black", 299, 299, 299, 1);


function dibujoPorClick()
{
  var val = parseInt(texto.value);
  var lineas = 30;
  var l = 0
  var yi, xf;
  var xi, yf;
  console.log(texto);
  alert("funciona " + val);

}
