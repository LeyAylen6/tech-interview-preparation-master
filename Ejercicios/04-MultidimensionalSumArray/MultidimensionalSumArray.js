// // ! Solución de fuerza bruta
// function mdArraySum (arr) {
  
//   let count = 0;

//   for(element of arr) {
//     if (typeof element === 'number') count += element;
//     else count += mdArraySum(element)
//   }
//   return count;
// }

// // ! Refactor
// function mdArraySum (arr, count = 0) {
  
//   for(element of arr) {
//     count = typeof element === 'number' ? count + element : mdArraySum(element, count)
//   }
//   return count;
// }

// ! Refactor 2
function mdArraySum (arr, count) {

  return arr.reduce((count, element) => count + (typeof element === 'number' ? count + element : mdArraySum(element, count)), 0);
}

// Complejidad >> O(n^m) --> es una complejidad mayor al log(n)

module.exports = mdArraySum
