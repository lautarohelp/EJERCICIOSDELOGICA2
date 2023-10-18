
/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

function nombresValidos(nombre) {
  if (/[0-9-,_*+ñ}{!]/.test(nombre)) {
    return false
  }else if (!nombre) {
    return false;
  }else {
    return true;
  }     
}
console.log(nombresValidos("Lautaro Toledo"));

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

function validarEmail(parametro) {
let email = parametro.split("@");
let firstEmail = email[0];
let secondEmail = email[1];

if (email.length >= 3) {
  return false
}else if (firstEmail && secondEmail ) {
  if (/[0-9-,._?}{:;`^*+´¨%#"!|°]/.test(firstEmail[0])) {
    return "Tus caracteres iniciales son inbalidos"
  }else if (/[0-9-,._?}{:;`^*+´¨%#"!|°]/.test(secondEmail[0])) {
    return "Tus caracteres despues del @ son invalidos"
  } else{
    return "tu email es valido"
  }
  
}
}

//  /[a-z0-9]/* decimos el index 0 */ + /*le concatenamos lo que sigue */(\.[_a-z0-9]+)/* validamos el contenido*/* /* despues de */ @[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i  //expresamos todo el email  

console.log(validarEmail("jonmircha@gmail.com")); true
console.log(validarEmail("22jonmircha@gmail.com")); false 
console.log(validarEmail("jonmircha@.gmail.com")); false
console.log(validarEmail("jonmircha4321@gmail.com")); true

/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al 
cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

function arrayNumer2(array) {
let numerosElevados = [];
if (!array) {
  return "Tiene que ser un array numerico"
}else {
  for (let index = 0; index < array.length; index++) {  
    if (array[index] === String) {
      return "Tiene que ser un array numerico2"
    }else{
      numerosElevados.push(array[index]**2);
    }
  }
}
return numerosElevados;
}
console.log(arrayNumer2([1,4,5]));
