//Definimos nuestras variables
var nombre = prompt("Ingresa un nombre: ");
var carrera = prompt("Ingresa tu carrera: ");
var ramo1 = prompt("Ingresa tu PRIMER ramo: ");
var nota1 = prompt("Ingrese nota 1 " + [ramo1] + " :", "");
var nota2 = prompt("Ingrese nota 2 " + [ramo1] + " :", "");
var nota3 = prompt("Ingrese nota 3 " + [ramo1] + " :", "");
var ramo2 = prompt("Ingresa tu SEGUNDO ramo: ");
var nota4 = prompt("Ingrese nota 1 " + [ramo2] + " :", "");
var nota5 = prompt("Ingrese nota 2 " + [ramo2] + " :", "");
var nota6 = prompt("Ingrese nota 3 " + [ramo2] + " :", "");
var ramo3 = prompt("Ingresa tu TERCER ramo: ");
var nota7 = prompt("Ingrese nota 1 " + [ramo3] + " :", "");
var nota8 = prompt("Ingrese nota 2 " + [ramo3] + " :", "");
var nombre1 = "Nombre: ";
var carrera1 = "Carrera: ";

//Aquí es donde dejamos los valores se interpretan como números
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
nota4 = parseInt(nota4);
nota5 = parseInt(nota5);
nota6 = parseInt(nota6);
nota7 = parseInt(nota7);
nota8 = parseInt(nota8);

//Aquí calculamos los promedios por cada ramo
promedio1 = (nota1 + nota2 + nota3) / 3;
promedio2 = (nota4 + nota5 + nota6) / 3;
notapendiente = (1-(((nota7 + nota8) * 1)/12))*12;

var promedio1 = (promedio1);
var promedio1 = promedio1.toFixed(2);
var promedio2 = (promedio2);
var promedio2 = promedio2.toFixed(2);
var notapendiente = (notapendiente);
var notapendiente = notapendiente.toFixed(2);


//Aquí creamos nuestro div container
document.write("<div class='container'>");

//Aquí es donde agregamos el título e ingresamos el nombre y la carrera
document.write("<h1>Notas Finales</h1>")

document.write("<div>");
document.write(nombre1.bold() + nombre + "<br>" + carrera1.bold() + carrera);
document.write("</div>")

document.write("<br>")

//Aquí creamos nuestra tabla con Bootstrap
document.write("<div class=fw-bold>");
document.write("<table class='table'>");
//Aqui´indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>")
//Con tr definimos las columnas de la tabla
document.write("<tr>")
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
    document.write("<th scope='col'>Ramo</th>")
    document.write("<th scope='col'>Nota 1</th>")
    document.write("<th scope='col'>Nota 2</th>")
    document.write("<th scope='col'>Nota 3</th>")
    document.write("<th scope='col'>Promedio</th>")
//Aquí cerramos el encabezado de nuestra tabla
document.write("</tr>")
//Aquí cerramos el encabezado de nuestra tabla
document.write("</thead>")

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>")
    document.write("<td>"+ramo1+"</td>");
    document.write("<td>"+nota1+"</td>");
    document.write("<td>"+nota2+"</td>");
    document.write("<td>"+nota3+"</td>");
    document.write("<td>"+promedio1+"</td>");
document.write("</tr>")

document.write("<tr>")
    document.write("<td>"+ramo2+"</td>");
    document.write("<td>"+nota4+"</td>");
    document.write("<td>"+nota5+"</td>");
    document.write("<td>"+nota6+"</td>");
    document.write("<td>"+promedio2+"</td>");
document.write("</tr>")

document.write("<tr>")
    document.write("<td>"+ramo3+"</td>");
    document.write("<td>"+nota7+"</td>");
    document.write("<td>"+nota8+"</td>");
    document.write("<td>-</td>");
    document.write("<td>-</td>");
document.write("</tr>")
//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</tbody>");
//Aquí cerramos nuestra tabla
document.write("</table>");
document.write("</div>");

//Aquí vamos a indicar la nota que debe obtener como nota 3 para poder tener un promedio de 4 en el último ramo
document.write("Para aprobar el ramo " + [ramo3] + " necesitas obtener un " + [notapendiente] + " en la nota 3.")

//Aquí cerramos nuestro div container
document.write("</div>");