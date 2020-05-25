/**
 * Del ejercicio “Operadores - punto 5”, 
 * si se cumplen las condiciones, imprimir en pantalla “Bienvenido!”, 
 *  de lo contrario, imprimir en pantalla “El usuario o la contraseña son incorrectas”
 */

let nombreUsuario = 'pepe';
let contrasenia = 'pepepomelo';

let operacion = (nombreUsuario == 'admin' && contrasenia == 123);

if(operacion){
    console.log('Bienvenido!');
} else {
    console.log('El usuario o la contraseña son incorrectas');
}