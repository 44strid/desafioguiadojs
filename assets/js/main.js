/* primer item */

function operaciones(){
    
var num1 = parseInt(document.getElementById("primernumero").value);
var num2  = parseInt(document.getElementById("segundonumero").value);
    
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

console.log("suma es igual a:" + suma);
console.log("resta es igual a:" + resta);
console.log("multiplicacion es igual a:" + multiplicacion);
console.log("division es igual a:" + division);
console.log("modulo es igual a:" + modulo);


var resultado1 = document.getElementById("resultadosuma");
var resultado2 = document.getElementById("resultadoresta");
var resultado3 = document.getElementById("resultadomultiplicacion");
var resultado4 = document.getElementById("resultadodivision");
var resultado5 = document.getElementById("resultadomodulo");

resultado1.innerText = suma;
resultado2.innerText = resta;
resultado3.innerText = multiplicacion;
resultado4.innerText = division;
resultado5.innerText = modulo;

}

/* segundo item  */

function temperatura (){


var temp1 = parseFloat(document.getElementById("celcius").value);

var kelvin = temp1 +  273.15;
var fahrenheit = (temp1 * 9/5) + 32

console.log("valor en kevin es" + kelvin) 
console.log("valor en fahrenheit es:" + fahrenheit)

var resultadotemp1 = document.getElementById("resultadokevin");
var resultadotemp2 = document.getElementById("resultadofahrenheit");

resultadotemp1.innerText = kelvin;
resultadotemp2.innerText = fahrenheit;

}

/* tercer item */

function tiempo (){

var tiempototal =  789
var año = 365;
var semana = 7;
var dia = 1;

var resultadoaño = Math.floor (tiempototal / año)
var moduloaño = tiempototal % año
var resultadosemana = Math.floor (moduloaño / semana)
var modulosemana = moduloaño % semana
var resultadodia = Math.floor (modulosemana / dia )

console.log("resultado: " + resultadoaño)
console.log("resultado: " + resultadosemana)
console.log("resultado: " + resultadodia)

var resultadotiempo1 = document.getElementById("resultadoaño");
var resultadotiempo2 = document.getElementById("resultadosemana");
var resultadotiempo3 = document.getElementById("resultadodia");

resultadotiempo1.innerText = resultadoaño
resultadotiempo2.innerText = resultadosemana
resultadotiempo3.innerText = resultadodia

}

/* cuarto item  */

function ejercicio(){ 

var digito1 = parseInt(document.getElementById("primerdigito").value);
var digito2  = parseInt(document.getElementById("segundodigito").value);
var digito3 = parseInt(document.getElementById("tercerdigito").value);
var digito4  = parseInt(document.getElementById("cuartodigito").value);
var digito5 = parseInt(document.getElementById("quintodigito").value);

var suma = digito1 + digito2 + digito3 + digito4 + digito5;
var promedio = (digito1 + digito2 + digito3 + digito4 + digito5) / 5;

console.log("el resultado es: " + suma)
console.log("el resultado es: " + promedio)

var resultado1 = document.getElementById("resultadoprimeraoperacion")
var resultado2 = document.getElementById("resultadosegundaoperacion")

resultado1.innerText = suma
resultado2.innerText = promedio

}
