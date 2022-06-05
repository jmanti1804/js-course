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

//_______________________________
// -----------> Operadores
// Los operadores son los mismos que existen en la vida real
// Suma +
const suma = 1 + 2;
// Restar -
const restar = 1 - 2;
//Multitplicar
const multiplicar = 1 * 2;
//Dividir
const dividir = 4 / 2;
//Modulo
const modulo = 10 % 3;
//Se puede sumar o mezclar los operadores
//Aumento y decremento (++) y (--)
//Aumenta en 1
let num = 5;
num++;

// -----> Operadores de comparacion
//Sirven para comparar entre datos
const resultado1 = 5 === 5; //Igualdad estricta
const resultado2 = 5 == 6; //Igualdad no estricta
//Se puede usar mayor que, menor que, menor igual o mayor igual
const resultado3 = 5 < 6; //Menor que
//Desigualdad estricta
const resultado4 = 5 !== 6; //DesIgualdad estricta
const resultado5 = 5 !== 6; //DesIgualdad no estricta

// ------> Operadores Logicos
//and &&, or ||, not!
//Pueden tener mas condiciones
const resOr = false || true; // Uno de los dos tiee que ser verdadero
const reAnd = true && true; // Los dos tienen que ser verdadero

//__________________________________
// ---> Control de flujo
// Nos permite realizar iteraciones o evaluar condiciones
// Control de flujo if y else
if (true) {
  console.log("Estoy dentro de un if");
}

// Control de flujo while
// Itera hasta el final del ciclo
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

//Control de flujo switch
// Nos ayuda a ejecutar una ejecucion u otra
//Estoe valua dependiendo el caso
let key = 1;
switch (key) {
  case 1:
    console.log("Hola Mundo");
    break;

  default:
    console.log("No es el uno");
    break;
}

// Control de flujo for
// Es el mas usado
console.log("Este es un for");
for (let index = 0; index < 10; index++) {
  console.log(index);
}

//__________________________
// ----> Funciones
//Introduccion
console.log("Funciones ----->");
function miFuncion(arg1) {
  for (let index = 0; index < arg1.length; index++) {
    const element = arg1[index];
    console.log(element);
  }
}
const numeros = [1, 2, "Hola", 3, 4];
const nombres = ["Juna", "Ricardo"];

miFuncion(numeros);
miFuncion(nombres);

function sumaNumero(a, b) {
  // console.log(a + b);
  return a + b;
}
const resul = sumaNumero(3, 5);
console.log(resul);

// Callbacks
// Funcion que se ejecuta al final de una funcion
//Las funciones pueden ser valores y se pueden pasar como argumentos a otras funciones
function sum(a, b, cb) {
  const res = a + b;
  cb(res);
}
function callback(r) {
  console.log(r);
}
sum(3, 4, callback);

// Fat arrow fuction
//No se usa function
//Se puede hacer en una sola linea y no hace falta el return
const arrowFunction = (a, b) => a + b;
