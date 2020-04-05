/**
 * La asignación de una variable puede ocurrir en dos momentos
 * - Al declararla
 * - Luego de declararla
 * 
 * Se puede asignar mas de una vez
 */

 // Asignación al momento de la declaración
 let numero = 1;

 // Asignación luego de la declaración
 let numero; // Usamos 'let' para indicar que declaramos un dato variable
 numero = 1; // Ahora a esa variable le asignamos un valor

 // Podemos asignar otra variable :O
let saldo; // declaramos la variable del saldo de un cliente
let numero = 123.80; // declaramos y asignamos un numero (de tipo float)

saldo = numero; // Asignamos el saldo del cliente
console.log(saldo); // Que imprime? :)

// Incremento
let numero = 0; // declaramos y asignamos un número
numero = numero + 1; // Incrementamos el numero en 1
numero += numero; // que imprime? :) (Es un atajo!)

// Decremento
let numero = 0; // declaramos y asignamos un número
numero = numero - 1; // Disminuimos el numero en 1
numero -= numero; // que imprime? :) (Es otro atajo!)

// Calculo
let stockOriginal = 10; // Declaramos y asignamos el stock que teniamos al principio
let unidadesVendidas = 7; // Declaramos y asignamos lo que vendimos
let stockActual = stockOriginal - unidadesVendidas; // Cuantos nos quedan? Asignamos el resultado de una operacion!
console.log(stockActual);



