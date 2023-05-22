// ! Solución fuerza bruta
function intersection (arr1, arr2) {
  // Dado dos arreglos **ordenados** devuelve un arreglo con los números que se repiten.

  const result = [];

  for(const num1 of arr1) {
    for(const num2 of arr2) {
      if (num1 == num2) result.push(num1)
    }
  }
  return result;
}

// Complejidad >>> O(n*m)

// ! Refactor
function intersection (arr1, arr2) {
  // Dado dos arreglos **ordenados** devuelve un arreglo con los números que se repiten.

  const result = [];

  for(const num1 of arr1) {
      if (arr1.includes(num1)) result.push(num1)
    }

  return result;
}

// Complejidad >>> O(n*m)

// ! Re-Refactor
function intersection (arr1, arr2) {
  // Dado dos arreglos **ordenados** devuelve un arreglo con los números que se repiten.
  let result = []

  arr1.map(num1 => arr2.includes(num1) && result.push(num1))

  return result;
}

// Complejidad >>> O(n*m)

// ! Re-Refactor
function intersection (arr1, arr2) {
  // Dado dos arreglos **ordenados** devuelve un arreglo con los números que se repiten.

  return arr1.filter(num1 => arr2.includes(num1))
}

// Complejidad >>> O(n*m)

// ! Un solo bucle para ambos arrays
function intersection (arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  while(i < arr1.length && j < arr2.length) {
    const num1 = arr1[i];
    const num2 = arr2[i];

    if(num1 === num2) {
      result.push(num1);
      i++;
      j++;
    }

    else if (num1 < num2) i++;
    else j++;
  }
  return result;
}

// Complejidad >>> O(n)

console.log(intersection([1,3,5,7,10], [2,3,6,8,10,20]))
module.exports = intersection
