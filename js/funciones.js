function bienvenido(){
    return 'Bienvedio a la sección de funciones';
}
var mensaje = bienvenido();
console.log(mensaje);

////////////////////////////////////////////////////////////////////////////
function cuadradoNumero(num) {
    var resultado = num * num;
    return resultado;
}
var num = 3;
var valor = cuadradoNumero(num);
console.log(valor);

/////////////////////////////////////////////////////////////////////////
//Funcion que convierte grados Fahrenheit a grados Celsius
function convertirFATaCelcios(gradoFah) {
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}
var temUno = convertirFATaCelcios(32);
var temDos =  convertirFATaCelcios(68);
console.log(temUno);
console.log(temDos);

////////////////////////////////////////////////////////////////////////////
function calcularEdad(fechaNacimiento) {
    return 2019 - (fechaNacimiento);
}
var edad = calcularEdad(1996);
console.log(edad);

/////////////////////////////////////////////////////////////////////////////
/*function jubilacion(retirement) {
   return yearRetirement = retirement - actualAge;
}
var actualAge = 23;
var endRetirement = jubilacion(65);
console.log(actualYear);
console.log(endRetirement);*/

var currentAge = 23;
function retirement(retirementYear, name) {
    var endRetirenment = retirementYear - currentAge;
    return "A " + name + " le faltan " + endRetirenment + " años para su retiro";
}
console.log(retirement(65, "Miriam"));



