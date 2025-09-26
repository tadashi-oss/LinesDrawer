// Get the canvas element from the DOM
var d = document.getElementById ("dibujo"); /* d.- var para canvas*/
                                /* getElement llamar etiqueta */
// Get the 2D drawing context from the canvas
var lienzo = d.getContext("2d");
// Log the context to the console for debugging
console.log(lienzo);
// Get the width of the canvas
var ancho = d.width;
// Get the text input element
var tex = document.getElementById("texto");
// Get the button element
var bot = document.getElementById("boton");
// Add event listener to button for click event
bot.addEventListener("click", click); 

// Function called when button is clicked
document.getElementById("feedMessage").style.display = "none";

// Log the input value for debugging
function click()
// Parse the input value to integer
{
// Loop counter
    console.log(tex.value);
// Variables for line coordinates
    var linea = parseInt (tex.value);
// Calculate spacing between lines
    var l = 0;
// Loop to draw each line
    var yi, xf;
    var espacio = ancho / linea;
// Calculate starting y coordinate

// Calculate ending x coordinate
    for (l=0; l<linea; l++)
// Draw violet line from top-left to bottom-right
{
// Log the current line number
    yi = espacio * l ;
// Draw red line from bottom-right to top-left
    xf = espacio * (l+1) ;
   dibujar ("violet", 0, yi, xf, 300);
// Draw border lines
   console.log("linea" +l);
   dibujar ("red", 300,  300-yi, 300-xf, 0);
   
}

// Function to draw a line on the canvas
dibujar("violet", 1,1, 1, ancho-1);
dibujar("violet", 1,ancho-1, ancho-1, ancho-1);
// Start a new path
dibujar("red", 1, 1, ancho-1,1);
// Set the stroke color
dibujar("red", ancho-1, 1, ancho-1, ancho-1);
// Move to starting point
    
// Draw line to ending point
document.getElementById("feedMessage").style.display = "block";
// Stroke the path

// Close the path
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