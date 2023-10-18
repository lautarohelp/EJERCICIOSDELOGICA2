/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */

function miFuncion(parametro) {
  return parametro.length
}
console.log(miFuncion("hola Mundo"));
/*  
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function miFuncion(param,numer) {
  return param.slice(0,numer)
}
console.log(miFuncion("hola mundo",3));


/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
function miFuncion(string,string2) {
  return string.split(string2);
};
console.log(miFuncion("hola que tal"," "));

