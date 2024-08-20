// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.//

function esParImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} es par`);
  } else {
    console.log(`${numero} es impar`);
  }
}

esParImpar(2);
esParImpar(7);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.//

function mayoromenor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
  } else if (numero1 < numero2) {
    console.log(`${numero2} es mayor que ${numero1}`);
  } else {
    console.log(`${numero1} y ${numero2} son iguales`);
  }
}

mayoromenor(1, 1);
mayoromenor(2, 1);
mayoromenor(1, 3);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. ///

function multiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(`${numero} es múltiplo de 5`);
  } else {
    console.log(`${numero} no es múltiplo de 5`);
  }
}

multiploDeCinco(50);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. ///

function imprimirHasta(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimirHasta(3);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. ///

function repetirPalabra(palabra, veces) {
  for (let i = 0; i < veces; i++) {
    console.log(palabra);
  }
}

repetirPalabra("Messi", 3);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. ///
const array6 = ["1", "2", "3", "4"];

function imprimirArray(array6) {
  for (let i = 0; i < array6.length; i++) {
    console.log(array6[i]);
  }
}

imprimirArray(array6);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".///
const array7 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function imprimirExceptoQuinto(array7) {
  for (let i = 0; i < array7.length; i++) {
    if (i !== 4) {
      console.log(array7[i]);
    }
  }
}

imprimirExceptoQuinto(array7);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.///
const array8 = ["1", "2", "3", "4"];

function multiplicar(array8, multiplicador) {
  for (let i = 0; i < array8.length; i++) {
    console.log(array8[i] * multiplicador);
  }
}

multiplicar(array8, 2);
