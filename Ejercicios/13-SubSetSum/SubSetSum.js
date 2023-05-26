function subSetSum (nums, target) {
  
  let sumas = [0]

  for (const num of nums) {
    for (const sum of sumas) { // Si usamos sumas siempre le estamos agregando un lugar mas entonces nunca se termina de recorrer el arr.
      const result = num + sum

      if(result === target) return true
      sumas.push(result)
    }
  }
  return false
}

function subSetSum (nums, target) {
  
  let sumas = [0]

  for (const num of nums) {
    for (const sum of sumas) { // Si usamos sumas siempre le estamos agregando un lugar mas entonces nunca se termina de recorrer el arr.
      const result = num + sum

      if(result === target) return true
      result < target && sumas.push(result)
    }
  }
  return false
}

console.log(subSetSum([1, 10, 5, 3], 9)) // (true))
nsole.log(subSetSum([1, 10, 5, 3], 10)) // (true))
console.log(subSetSum([1, 10, 5, 3], 19)) // (true))
console.log(subSetSum([1, 10, 5, 3], 2)) // (false))

module.exports = subSetSum
