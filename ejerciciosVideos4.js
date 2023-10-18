

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

function capicuda(capi) {
  let capiR = String(capi);
  let capiNum = capiR.split("").reverse().join("")
  let capNumeros = Number(capiNum)


  if (!capi) {
    return 'no hay parametros'
  }if (capi === String) {
    return "consiste en numeros"
  }if (capi == capNumeros) {
    return true;
  }else{
    return false;
  }
}
console.log(capicuda(2002));



/* 11) Programa una función que calcule el factorial de un número (El factorial de un
   entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

  function factorizador(numero) {
    let numer = numero;
    let gNumer = numero;
    for (let i = 1; i < numero; i++) {
      console.log(i);
      numer--;
      gNumer = gNumer * numer;
    }
    return gNumer;
  }
  console.log(factorizador(2))

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

function numerosPrimos(numer) {
  if (numer % 2 === 0) {
    return false
  }else if (numer % 3 === 1) {
    return false
  }else {
    return true;
  }
}
console.log(numerosPrimos(17));
