// Iterar sobre cada número
// 2. Ir sumando: la potencia de 2 y, su posición, multiplicada por el número [1 ó 0].

// ! Solución fuerza bruta

function BinaryToDecimal (binary) {
  // NUMERO * POTENCIA ^ POSICION

  binary = binary.split('').reverse();
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    const num = binary[i]
    result += num * 2 ** i;
  }
  return result;
}

// ! Refactor 

function BinaryToDecimal (binary) {
  binary = binary.split('').reverse();
  let result = 0;

  binary.forEach((num, index) => {
    result += num * 2 ** index
  })
}

// ! Re-Refactor 

// ? Reduce(result de la operacion, Lo que recorre del arr como map, index)
// result arranca con el primer valor de lo que le pases, si es un array los concatena porque es string y no los suma,
// Le pasamos como 2do parametro con que queremos que arranque result, ej : let result = 0;

function BinaryToDecimal (binary) {
  binary = binary.split('').reverse().reduce(((result, num, index) => result += num * 2 ** index), 0);
}

// ! Recursion con fuerza bruta 

function BinaryToDecimal (binary) {
  const num = binary[0];
  const result = num * 2 ** (binary.length - 1)
  const rest = binary.slice(1);

  if(rest) return result + BinaryToDecimal(rest)
  return result;
}

// ! Refactor de la recursion

function BinaryToDecimal (binary) {
  const num = binary[0];
  const result = num * 2 ** (binary.length - 1)
  const rest = binary.slice(1);

  return rest ? result + BinaryToDecimal(rest) : result
}


BinaryToDecimal('110')

module.exports = BinaryToDecimal
