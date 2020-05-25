/**
 * En medio del COVID-19, nos encargaron desarrollar la función “puedeSalir”, 
 * para determinar si una persona puede salir de su hogar en base al último número de su @DNI (en string) y el nombre del @día (en string). 
 * @Retorna un booleano (true / false)
        Ej. puedeSalir(‘33111333’, ‘Jueves’) -> false
        Si el DNI termina en 0,1,2 ó 3, sólo pueden salir si es ‘Lunes’
        Si el DNI termina en 4, 5 ó 6, sólo pueden salir si es ‘Miércoles’
        Si el DNI termina en 7, 8 ó 9, sólo pueden salir si es ‘Domingo’
 */

const LUNES = 'LUNES';
const MARTES = 'MARTES';
const MIERCOLES = 'MIERCOLES';
const JUEVES = 'JUEVES';
const VIERNES = 'VIERNES';
const SABADO = 'SABADO';
const DOMINGO = 'DOMINGO';


/**
 * Nos dieron esta función de ayuda
 */ 
function dameUltimoNumero(_numero){
    // numero tiene que ser un string!
    return _numero[_numero.length - 1]; 
}

function queDiaSaleLaTerminacion(_terminacion){
    if(_terminacion == 0 //Si el DNI termina en 0,1,2 ó 3, sólo pueden salir si es ‘Lunes’
        || _terminacion == 1
        || _terminacion == 2
        || _terminacion == 3){
            return LUNES;
    } else if(_terminacion == 4 //Si el DNI termina en 4, 5 ó 6, sólo pueden salir si es ‘Miércoles’
            || _terminacion == 5
            || _terminacion == 6){
                return MIERCOLES;
    } else if(_terminacion == 7 //Si el DNI termina en 7, 8 ó 9, sólo pueden salir si es ‘Domingo’
        || _terminacion == 8
        || _terminacion == 9){
            return DOMINGO;
    }
    return '';
}


// OPCION A
 function puedeSalir(_dni, _dia){
    const terminacion = dameUltimoNumero(_dni);

    if(queDiaSaleLaTerminacion(terminacion) == _dia){
        return true;
    } else {
        return false;
    }
 }

// OPCION B
function puedeSalirB(_dni, _dia){
    const terminacion = dameUltimoNumero(_dni);
    // Retorna directamente el resultado de la comparación (true/false)
    return queDiaSaleLaTerminacion(terminacion) == _dia;
 }

/**
 * OPCION C (Nice)
 * 
 * En esta resolución cambiamos la definición de la función queDiaSaleLaTerminacion
 * para usar ARRAYS \0/ 
 * 
 * Usamos el método que tienen los arrays, llamado 'indexOf'. Este método nos devuelve la posición que ocupa un elemento dentro del array.
 * Ejemplo:
 * * const array = [10,11,12,13,14,15];
 * * array.indexOf(10); --> Devuelve 0
 * * array.indexOf(11); --> Devuelve 1
 * * array.indexOf(12); --> Devuelve 2
 * Conclusión IMPORTANTE: Siempre que encuentra un elemento en el array, devuelve la posición, que es un número mayor o igual a cero!
 */ 
function queDiaSaleLaTerminacionConArray(_terminacion){
    const terminacionesLunes = [0,1,2,3];
    const terminacionesMiercoles = [4,5,6];
    const terminacionesDomingo = [7,8,9];
    if(terminacionesLunes.indexOf(_terminacion) >= 0){
            return LUNES;
    } else if(terminacionesMiercoles.indexOf(_terminacion) >= 0){
                return MIERCOLES;
    } else if(terminacionesDomingo.indexOf(_terminacion) >= 0){
            return DOMINGO;
    }
    return '';
}
function puedeSalirC(_dni, _dia){
    const terminacion = dameUltimoNumero(_dni);
    // Retorna directamente el resultado de la comparación (true/false)
    return queDiaSaleLaTerminacionConArray(terminacion) == _dia;
 }

 /**
 * OPCION D (My gootneessss)
 * 
 * En esta resolución cambiamos la definición de la función queDiaSaleLaTerminacion
 * para usar un diccionario \0/ 
 * 
 * Tal como en la vida real, en un diccionario para encontrar un significado le damos una palabra.
 * En programación... le damos una palabra y nos da el significado (que le pusimos nosotros) Mirá!
 */ 
function queDiaSaleLaTerminacionConDiccionario(_terminacion){
    const diccionarioTerminaciones = {
        0: LUNES,
        1: LUNES,
        2: LUNES,
        3: LUNES,
        4: MIERCOLES,
        5: MIERCOLES,
        6: MIERCOLES,
        7: DOMINGO,
        8: DOMINGO,
        9: DOMINGO,
    }
    // Retorna el significado que tiene para nosotros la terminación Ó vacío (si no lo encuentra)
    return diccionarioTerminaciones[_terminacion] || '';
}
function puedeSalirD(_dni, _dia){
    const terminacion = dameUltimoNumero(_dni);
    // Retorna directamente el resultado de la comparación (true/false)
    return queDiaSaleLaTerminacionConDiccionario(terminacion) == _dia;
 }

 let result;
 console.log('-------------------- OPCION A (So far, so good) -------------------- ');
 result = puedeSalir('33111333', JUEVES);
 console.log('Tiene que decirme false -> ', result);

 result = puedeSalir('33111333', LUNES);
 console.log('Tiene que decirme true -> ', result);

 console.log('-------------------- OPCION B (Getting better) -------------------- ');
 result = puedeSalirB('33111333', JUEVES);
 console.log('Tiene que decirme false -> ', result);

 result = puedeSalir('33111333', LUNES);
 console.log('Tiene que decirme true -> ', result);

 console.log('-------------------- OPCION C (Nice...) -------------------- ');
 result = puedeSalirC('33111333', JUEVES);
 console.log('Tiene que decirme false -> ', result);

 result = puedeSalir('33111333', LUNES);
 console.log('Tiene que decirme true -> ', result);

 console.log('-------------------- OPCION D (Oh my gootnesssss) -------------------- ');
 result = puedeSalirD('33111333', JUEVES);
 console.log('Tiene que decirme false -> ', result);

 result = puedeSalir('33111333', LUNES);
 console.log('Tiene que decirme true -> ', result);
