
/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60 ].*/

function altoVajo(array) {
  let numeros = Math.max(...array);
  let numeroMenor = Math.min(...array);
  let mayorMenor = []
  mayorMenor.push(numeros,numeroMenor);

  return  mayorMenor;
}

console.log(altoVajo([1, 4, 5, 99, -60]));

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares 
y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

function paresEimpares(array) {
  let number = {
    pares: [],
    impares: [],
  }
if (!array || typeof(array) !== "object") {
  return "Ingrese sus parametros"
}else {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof(element) === "string") {
      return `Solamente argumentos numericos, "${element}" no es un numero`
    }else if (element % 2 === 0) {
      number.pares.push(element);
    }else{
      number.impares.push(element);
    }
  }
}
  

  return number;
}

console.log(paresEimpares([1,2,3,4,5,6,7,8,9,0]));
console.log(paresEimpares([1,2,3,4,5,6,"h",8,9,0]));
console.log(paresEimpares("hola"));
/* 
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá losnumeros ordenados en forma ascendente 
 y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

function ascDesc(array) {
  let arr = [...array];
  let asenDecent = {
    asc:[],
    desc:[],
  };
  if (!array || typeof(array) !== "object") {
    return "Ingrese sus parametros"
  }else{
    asenDecent.asc = [...array.sort()];

    let decendente = arr.sort().reverse();
    asenDecent.desc = [...decendente];
  }

  return asenDecent;
}
console.log(ascDesc([7, 5,7,8,6]));


console.log([7, 5,7,8,6].sort().toReverced());



/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

/* function sinDuplicados(array) {
  const repetido = []
  for (let i = 0; i < array.length; i++) {
    arrContain(array[i], repetido)
    if (arrContain) {
      console.log(array[i]);
      repetido.push[array[i]]
    }
  }
  return repetido
}

function arrContain(indexArray, arrVerify) {
  return !arrVerify.some(item=> indexArray === item)
} */

function sinDuplicados(array) {
  const repetido = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!repetido.includes(element)) {
      repetido.push(element);
    }
  }
  return repetido;
}

console.log(sinDuplicados(["x", 10, "x", 2, "10", 10, true, true]));

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

function promedio(array) {
  let promedio = [];
  if (!array || typeof(array) !== "object") {
    return "Error"
  }else{
  let sum = array.reduce((a,b) => a + b,0);
  let cuenta = sum / array.length
  promedio.push(cuenta)
  return `Tienes un promedio de ${promedio}`
  }
}
console.log(promedio([9,8,7,6,5,4,3,2,1,0]));