
/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

function parInpar(numer) {
  if (numer % 2 === 0) {
    return `el nuemero ${numer} es par`
  }else if (numer % 2 === 1) {
    return `el nuemero ${numer} es impar`
  }
}

console.log(parInpar(29));


/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F. */

function CelsiusAFahrenheit(grados,tipo ) {
  let gradosCelsius = (grados * 9/5) + 32;
  let gradosFahrenheit = (grados - 32) * 5/9;
  if (tipo === "C") {
    return gradosCelsius + " F";
  }else if (tipo === "F") {
    return gradosFahrenheit + " C"
  };
  
}
console.log(CelsiusAFahrenheit(0,"F"));
console.log(CelsiusAFahrenheit(0,"C"));

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

function BinarioADecimal(num,base) {
  let sum = 0;
  let numString = String(num)

  let binario = []

  if (base == 2) {
    for (let i = 0; i < numString.length; i++) {
      sum += +numString[i] * 2 ** (numString.length - 1 - i);
  }
  return sum;
  }else if (base == 10) {
      
      while (num!==0){
          
          let div = Math.floor(num/2);
          let residuo = parseInt(num%2);
          
          num = div;
          
          binario.push(residuo);
      }
    

      return   binario.join("");
  }
}

console.log(BinarioADecimal(10,2));

function BinarioADecimal(numero,base) {

  if (base === 10) {
    return `${numero.toString(2)} base 2`  //con el toString podemos pasarle la base de q lo qeremos combertir.
  }if (base === 2) {
    return `${parseInt(numero,base)} base 10`  
  }
}

console.log(BinarioADecimal(101,2))
console.log(BinarioADecimal(5,10))
