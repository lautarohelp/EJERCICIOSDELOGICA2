
/* 
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

function palíndromo(string) {
  let strings = string.toLowerCase();
  let palabraAlReves = ""
  if (string === "") {
    return string
  }
  if (!string) {
    return "no hay nada"
  }
    palabraAlReves = strings.split("").reverse().join("");
    if (palabraAlReves !== strings) {
      return false
    }if (palabraAlReves === strings){
      return true;
    }
  }
  
  console.log(palíndromo("Salas"));
  
  
  /*  
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
  
  
  function deletPatron(string,deletString) {
    if (string === "") {
      return string
    } 
    if (!string || !deletString) {
      return "no hay nada"
    }else if(string || deletString) {
      return string.split(deletString).join(" "); 
    }
  }
  console.log(deletPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
  
  /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
  
  function randomNumers() {
    return Math.ceil(Math.random() * 100 + 500);
  }
  console.log(randomNumers());