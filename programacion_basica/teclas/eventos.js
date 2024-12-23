var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var d = document.getElementById("area_de_dibujo");
var papel = d.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel)

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xincial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var p_color = "blue";
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.LEFT:
      dibujarLinea(p_color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.UP:
      dibujarLinea(p_color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(p_color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(p_color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
  }
}
