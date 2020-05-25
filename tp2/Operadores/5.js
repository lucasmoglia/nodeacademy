/**
 * Para que el usuario pueda iniciar sesión en nuestro sistema, es excluyente que:
 *  El nombre de usuario sea distinto de vacío (‘’)
 *  La contraseña sea distinta de vacío (‘’)
 *  El nombre de usuario sea igual a “admin”
 *  La contraseña sea igual a “123”
 */

let nombreUsuario = 'pepe';
let contrasenia = 'pepepomelo';

let operacion = (nombreUsuario == 'admin' && contrasenia == 123);

console.log('Resultado -> ' + operacion);
