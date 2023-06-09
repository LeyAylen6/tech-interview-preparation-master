// ! Solucion fuerza bruta MIA, Falta que sean muchas secuencias
// function longestIncreasingSubsequence (nums) {
//   const secuences = [];

//   for (let i = 1 ; i < nums.length - 1; i++) {
//     let j = i - 1
//     if (!secuences[secuences.length-1]) {
//       if (nums[j] < nums[i]) secuences.push(nums[j])
    
//     } else {
//       if (nums[j] > secuences[secuences.length - 1]) secuences.push(nums[j])
//     }
    
//   }
//   console.log(secuences)
// // Secuencia: 10, 22, 33, 41, 60, 80;  output: 9
// }

// ! Solucion fuerza bruta
// function longestIncreasingSubsequence (nums) {

//   const secuences = [];
//   let longest = 0;

//   for(num of nums) {
//     secuences.push([num]);
//     const secuencesCopy = [...secuences];

//     for( const seq of secuencesCopy) {
//       if (num > seq[seq.length - 1]) {
//         const newSequence = seq.concat(num);
//         secuences.push(newSequence)
        
//         if(newSequence.length > longest) longest = newSequence.length
//       }
//     }
//   }
//   return longest;
// }
// Complejidad >>> O(n*m + x) , Con mas porque el ultimo for no esta anidado, sino que esta aparte.

// ! Solucion Refactor
function longestIncreasingSubsequence (nums) {

  const secuences = [];
  let longest = 0;

  for(num of nums) {
    const secuencesCopy = [...secuences]; // si lo hacemos antes del push evitamos repetir numeros
    secuences.push([num]);

    for( const seq of secuencesCopy) {
      if (num > seq[seq.length - 1]) {
        const newSequence = [...seq, num]
        secuences.push(newSequence)
        
        if(newSequence.length > longest) longest = newSequence.length
      }
    }
  }
  return longest;
}
// Complejidad >>> O(n*m)

// console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]))
module.exports = longestIncreasingSubsequence
