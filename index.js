console.log("Hola Mundo");
console.log("Voy a triunfar en el mundo de la Tecnologia");
console.log("Solo denme tiempo");

//_________________________________________________
// ---> Tipos de datos
// String: Cadena de caracteres 'a' 'hola' 'hola mundo'
// Boolean: True o false
// Null: hace referencia a variable vacia
// Number: cualquier numero 121212 1 2 31 12   "123" es distinto a 123 el uno es string y el otro number
// Undefine: variable no definida
// Object: objeto

//____________________________________________________
// ----> Variables
// var  forma antigua va al inicio del archivo[no se usa]
var miPrimeraVariable = "lala";

// let valores que cambian
let miSegundaVariable = "Mi segunda variable";
console.log(miSegundaVariable);
//reasignar variable mutabilidad
miSegundaVariable = "Esto ha cambiado";
console.log(miSegundaVariable);

//otras variables
let miBoolean = true;
let otroBool = false;
let miNumero = 2;
let miNumero3 = 23;
let numero = -3434;

// const  son constantes valores que no cambian

//__________________________________________
// -----> Objetos
//Es una agrupacion de datos y hacensentido entre si

// Objeto vacio
const miObjeto = {};
// Objeto
const segundoObjeto = {
  unNumero: 12,
  unString: "Esta cadena",
  unaCondicion: true,
};
//Imprimiendo objeto
console.log(segundoObjeto);

//_________________________________
// -----> Arreglos o Arrays
//Puede tener lo que sea dentro de el arreglo desde numeros hasta objetos o arreglos
//Arreglo vacio
const arrVacio = [];
const arr = [1, 2, 1, segundoObjeto];
console.log(arr);

//Agregar un elemento al arreglo en el final
//Se puede enviar de igual manera cualquier cosa
arr.push("Hola");
arrVacio.push(segundoObjeto);
console.log(arr);
console.log(arrVacio);

//
