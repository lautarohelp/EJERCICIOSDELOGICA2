
/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

function montoCondescuento(precio,descuento) { 
  const preciofinal = (precio * descuento) / 100
  if (typeof precio !== "number" || typeof descuento !== "number") {
    return "ingrese un parametro valido porFavor"
  }else{
  return `tu cuanta a pagar es de $${precio - preciofinal}`
  }
}
console.log(montoCondescuento(1000,20));





/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe.
 miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

function edades(date) {
let year = date.getFullYear();
let actualYear = new Date().getFullYear();

let month = date.getMonth();
let actualMonth = new Date().getMonth() + 1;

let day = date.getDate();
let actualDay = new Date().getDate();

let resDate = (actualYear - year);

if (month <= actualMonth ) {
    return day <= actualDay?`Han paso ${resDate} años`:`Han paso ${resDate - 1} años` 
}else{
  return `Han paso ${resDate - 1} años` 
}
}
console.log(edades(new Date(1984,4,23))); //38 años en 2023

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

function vocalesYConsonantes(cadena) {
  let vocales = 0;
  let consonantes = 0;
  const texto = cadena.toLowerCase();
  for (let intem = 0 ; intem < texto.length; intem++) {
    if (texto[intem] == "a" || texto[intem] == "e" || texto[intem] == "i" || texto[intem] == "o" || texto[intem] == "u") {
      vocales++;
    }else if (texto[intem] !== "a"|| texto[intem] !== "e"|| texto[intem] !== "i"|| texto[intem] !== "o"|| texto[intem] !== "u") {
      consonantes++;
    };
  }
  return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
}

console.log(vocalesYConsonantes("Hola Mundo"));
