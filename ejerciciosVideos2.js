
/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

function miFuncion(params1,params2) {
  let newString = " " 
  for (let index = 0; index < params2; index++) {
    newString += params1 + " ";
  }
  return newString;
  /* return params1.repeat(params2); */
}
console.log(miFuncion('Hola Mundo',3));




/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
  */

  function myFuntion(string) {
    if (string === "") {
      console.warn("no tienes ningun parametro dado");
    }/* if (string !== String ) {
      console.warn("solo acepto strings");
    } */else{
    return string.split("").reverse().join("")
    }
  }
  console.log(myFuntion("hola"));

  /* 
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

  function miFuntion(string,strinFil) {
    let validor = 0
    const arr = string.split(" ")
    
    if (!string) {
        return undefined
      }else if (!strinFil) {
        return string;
      };
      for (let i = 0; i < arr.length; i++) {
        if (strinFil === arr[i]) {
          validor++;
        }
      }
      return `hay un totral de ${validor} ${strinFil}`;
  }
  

  console.log(miFuntion("hola mundo adios mundo","mundo"));
