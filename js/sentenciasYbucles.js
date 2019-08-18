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

