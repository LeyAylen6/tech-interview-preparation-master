// ! Solución fuerza bruta
// function SumArray (arr, n) {

//   // No hace falta que lo recorra con j desde O porque ya cuando recorre i el primer lugar, j recorre todo el resto. Entonces I queda descartada
//   for(let i = 0; i < arr.length - 1; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
      
//       if ( arr[i] + arr[j] === n) return true;
      
//     }
//   }
//   return false;
// }
// Complejidad >>> O(n^2)

// ! Solución Refactor 1
// function SumArray (arr, n) {

//   // No hace falta que lo recorra con j desde O porque ya cuando recorre i el primer lugar, j recorre todo el resto. Entonces I queda descartada

//   for(let i = 0; i < arr.length - 1; i++) {
//     let j = i + 1
    
//     if ( arr[i] + arr[j] === n) return true;
//   }
  
// return false;
// }

// ! Solución Refactor 2
// function SumArray (arr, n) {

//   // No hace falta que lo recorra con j desde O porque ya cuando recorre i el primer lugar, j recorre todo el resto. Entonces I queda descartada
//   for(let i = 0; i < arr.length - 1; i++) {
//     let j = i + 1
    
//     if ( arr[i] + arr[j] === n) return true;
//   }
  
// return false;
// }

// Complejidad >>> O(n)

// ! Solución Refactor 3
// Cuando se junta start con end se corta el while. O porque n avanzo o porque el ultimo numero era muy grande y fue porque end retrocedio.

function SumArray (arr, n) {

  let start = 0;
  let end = arr.length - 1
  // No hace falta que lo recorra con j desde O porque ya cuando recorre i el primer lugar, j recorre todo el resto. Entonces I queda descartada
  while(start != end) {
    const sum =  arr[start] + arr[end]
    if ( sum === n) return true;
    if (sum > n) end--;
    else start++;
  }
  
return false;
}
// Complejidad >>> O(n)

console.log(SumArray ([3, 9, 7, 2, 1], 2))

module.exports = SumArray
