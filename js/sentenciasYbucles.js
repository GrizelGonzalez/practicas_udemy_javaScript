/***Sentencia if/else***/
var nombre = 'Pablo';
var estadoCivil = 'Soltero';

if (estadoCivil === 'Casado'){
    //Si es verdadera la condición
    console.log(nombre + ' Esta Casado');
}else {
    //Si es falsa la condición
    console.log(nombre + ' Esta Soltero');
}

/***Sentencia condicionales***/
var nombre = 'Pablo';
var edad = 20;

if (edad < 12){
    console.log(nombre + ' Es un niño');
}else if ((edad > 11 && edad < 18)) {
    console.log(nombre + ' Es un adolescente');
}else if ((edad > 17 && edad < 60)) {
    console.log(nombre + ' Es un adulto');
}else{
    console.log(nombre + ' Es un anciano');
}

/***Operador ternario***/
//Utiliza tres operadores dentro de una sentencia//
edad >= 18 ? console.log(nombre + ' Es mayor de edad') : console.log(nombre + ' Es un adolescente');

/***Setencia switch***/
var mes = 3;
switch (mes) {
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default:
            console.log('Mes no considerado');
}

/***Setencia FOR ***/
for (var i = 0; i <= 10; i++){
    console.log(i);
}

/***Setencia while**/
var i = 10;
while (i >= 1){
    console.log(i);
    i--;
}

/***Setencia do while***/
var i = 20;
do{
    console.log(i);
    i++
}while (i <= 30);

/***Valores verdaderos y falsos***/
//Valores falsos: undefined, null, 0
//Valores verdaderos: NOT valores falsos
var edad;
if (edad){
    console.log('Variable esta definida');
}else{
    console.log('Variable NO esta definida');
}

/***Ejercicio de Setencias***/
//Tienes dos alumnos Pablo y José
//Pablo tiene las siguientes notas en el curso de Javascript: 14,8,16
//José tiene las siguientes notas en el curso de Javascript: 12,18,10
//Calcular el promedio de cada alumno, además de indicar quién tiene el promedio superior,
//e indicar si el alumno esta aprobado, para ello su promedio debe de ser mayor a 13

var promedioPablo = (14+8+16)/3;
var promedioIgnacio = (12+21+10)/3;

//Promedio superior//
 if (promedioPablo > promedioIgnacio){
     console.log('Pablo tiene el promedio superior');
 }else if (promedioIgnacio > promedioPablo) {
     console.log('Ignacio tiene el promedio superior');
 }else{
     console.log('Pablo y Ignacio tiene los priomedios iguales');
 }

 //Mostrar si estan aprobados//
for (var i=1;  i<=2; i++){
    if (i === 1){
        console.log('Promedio de Pablo ' + promedioPablo);
        if (promedioPablo > 13){
            console.log('Pablo esta aprobado');
        }else{
            console.log('Pablo reprobo');
        }
    } else{
        console.log('Promedio de Ignacio ' + promedioIgnacio);
        if (promedioIgnacio > 13){
            console.log('Ignacio esta aprobado');
        }else{
            console.log('Ignacio reprobo');
        }
    }
}



