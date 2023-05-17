// ! Tome un número decimal y lo devuelva en binario

// ? ## Solución
// 1. Tomá el número y sacá su modulo en 2
// 2. Guardá el resultado en un string
// 3. Dividí el número por 2 y redondealo para abajo
// 4. Continúa el proceso hasta que el número sea igual a 0
// 5. Devuelve el string

// ! Fuerza bruta

function DecimalToBynary (num) {
  const binary = [];
  
  while (num > 0) {
    const module = num % 2;
    binary.push(module) //Lo ponemos adelante ya que se agarra de la ultima division para adelante
    num = Math.floor(num/2)
  }
  return binary.reverse().join('')
}

// ! Refactor

function DecimalToBynary (num) {
  const binary = [];
  
  while (num > 0) {
    const module = num % 2;
    binary.unshift(module) //Lo ponemos adelante ya que se agarra de la ultima division para adelante
    num = Math.floor(num/2)
  }
  return binary.join('')
}

// ! Re-Refactor

function DecimalToBynary (num) {
  let binary = '';
  
  while (num > 0) {
    binary = num % 2 + binary//Lo ponemos adelante ya que se agarra de la ultima division para adelante
    num = Math.floor(num/2)
  }
  return binary
}

// ! Recursion

function DecimalToBynary (num) {
  const module = num % 2;

  if (num) return DecimalToBynary(Math.floor(num/2)) + module
  return '';
}

// ! Refactor de recursion

function DecimalToBynary (num) {

  return num ? DecimalToBynary(Math.floor(num/2)) + num % 2 : '';
}

console.log(DecimalToBynary(6));

module.exports = DecimalToBynary
