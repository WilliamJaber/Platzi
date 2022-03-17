var texto = document.getElementById("texto_lineas");
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xincial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0
  var yi, xf;
  var xi, yf;
  var espacio = ancho / lineas;
  console.log(texto);
  alert("funciona");

  do
  {
    l++;
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea("black", 0, yi, xf, (ancho - 1));
    dibujarLinea("red", xi, 0, (ancho - 1), yf);
    console.log("lineas " + l);
  } while(l < lineas)

  dibujarLinea("red", 1, 1, 1, (ancho - 1));
  dibujarLinea("red", 1, (ancho - 1), (ancho - 1), (ancho - 1));

  dibujarLinea("black", (ancho - 1), 1, 1, 1);
  dibujarLinea("black", (ancho - 1), (ancho - 1), (ancho - 1), 1);
}
