var d = document.getElementById ("dibujo"); /* d.- var para canvas*/
                                /* getElement llamar etiqueta */
var lienzo = d.getContext("2d");
console.log(lienzo);
var ancho = d.width;
var tex = document.getElementById("texto");
var bot = document.getElementById("boton");
bot.addEventListener("click", click); 


function click()
{
    console.log(texto);
    var linea = parseInt (texto.value); 
    var l = 0;
    var yi, xf;
    var espacio = ancho / linea;

    for (l=0; l<linea; l++)
{
    yi = espacio * l ;
    xf = espacio * (l+1) ;
   dibujar ("violet", 0, yi, xf, 300);
   console.log("linea" +l);
   dibujar ("red", 300,  300-yi, 300-xf, 0);
}

dibujar("violet", 1,1, 1, ancho-1);
dibujar("violet", 1,ancho-1, ancho-1, ancho-1);
dibujar("red", 1, 1, ancho-1,1);
dibujar("red", ancho-1, 1, ancho-1, ancho-1);
    

}/*fin ciclo for */



function dibujar (color, xin, yin, xfin, yfin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xin, yin);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();

}