/*Conversión de tipo o de variables*/
var primerNombre, edad, sexo, esSoltero;
primerNombre = 'Miriam';
edad = 23;
sexo = 'F';
esSoltero = false;
console.log('El nombre es:' + primerNombre + ', y su edad es:' + edad + ', ¿es soltero?:' + esSoltero);

/*Mutación de variables*/
edad = 'veinte';
console.log(edad);

/*Operadores Matematicos*/
var edadMiriam, edadGrizel, diferenciaEdad, sumaEdades, yearActual, yearMiriam, yearGrizel;
edadMiriam = 34;
edadGrizel = 23;
yearActual = 2019;

diferenciaEdad = edadMiriam - edadGrizel;
sumaEdades = edadMiriam + edadGrizel;
yearMiriam = yearActual - edadMiriam;
yearGrizel = yearActual - edadGrizel;
console.log('La diferencia de edad es:' +diferenciaEdad +  ' La suma de edad es:' + sumaEdades);
console.log('Año en que nacio Miriam:' + yearMiriam);
console.log('Año en que nacio Grizel:' + yearGrizel);

/* Operadores Lógicos*/
var mayorMiriam = edadMiriam > edadGrizel;
console.log(mayorMiriam);

var mayorMiriam = edadMiriam == edadGrizel;
console.log(mayorMiriam);

/* Operador typeof*/
console.log(typeof edadMiriam);
console.log(typeof edadGrizel);
console.log(typeof mayorMiriam);
console.log(typeof 'Miriam es mayor que Grizel');

//Operadores Unarios Ariméticos o cd incremento//
//++ Incremento
//-- Decremento
var edadIgnacio = 18;
var edadJunior = 14;
++edadIgnacio;
console.log(edadIgnacio);

//Operadores de asignación//
var a = 5;
var b = 18;
 a += b;
 a -= b;
 a *= b;
 a /= b;
 var c;
 c = a % b; //Devuelve el residuo de una division//
 a %= b;

 //Ejercicio de codificación//
var pesoLuis = 72;
var alturaLuis = 1.72;
var pesoCarlos = 89;
var alturaCarlos = 1.75;

var IMCLuis = pesoLuis / (alturaLuis * alturaLuis);
var IMCCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);
console.log('El IMC de Luis es: ' + IMCLuis);
console.log('El IMC de Carlos es: ' + IMCCarlos);

var resultado = IMCCarlos > IMCLuis;
console.log( '¿El IMC de Carlos es superior al de Luis? ' + resultado);




