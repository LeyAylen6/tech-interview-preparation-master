// !Solución de fuerza bruta 

// function FindNeedle (haystack, needle) {

//   for( let i = 0; i < haystack.length; i++) {
//     for (let j = 0; j < needle.length; j++) {
//       if(needle[j] !== haystack[i + j]) break;
//       if( j === needle.length - 1) return i;
//     }
//   }
//   return -1;
// }
// Complejidad >>> O(n*m)

// ! Solución refactor
// Agarra el lugar en haystack y corta desde i hasta el largo de la palabra que busco. 
  // Si es igual devuelve la I , sino aumenta la i el for.
  // Si aumenta hasta llegar al final y nunca coincidio devuelve -1.

// function FindNeedle (haystack, needle) { 

//   for( let i = 0; i < haystack.length; i++) {
//     const sliced = haystack.slice(i, i + needle.length); //length porque slice no toma el ultimo valor. 
//     // SI ponemos length -1 nos corta la ultima letra
//     if (sliced === needle) return i;
//   }
//   return -1
// }
// Complejidad >>> O(n*n) => O(n^2)

// ! Solución refactor MAS OPTIMA

// function FindNeedle (haystack, needle) { 

//   for( let i = 0; i < haystack.length; i++) {
//     if (needle[0] === haystack[i]) {
//       const sliced = haystack.slice(i, i + needle.length);
//       if (sliced === needle) return i;
//     }
//   }
//   return -1
// }

function FindNeedle (haystack, needle) {
  let haystackArr = haystack.split()
  if (!haystackArr.includes(needle)) return -1

  return 
  
}

module.exports = FindNeedle
