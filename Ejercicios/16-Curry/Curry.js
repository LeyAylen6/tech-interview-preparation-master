function curry (fn) {

  let args = [];

  return function currentFunction(a) {
    args.push(a)
    
    if (args.length === fn.length) return fn(...args)
    // fn.length nos da el largo de la cantidad de args que nos pasan en fn(args)

    return function(nextArg) {
      return currentFunction (nextArg)
    }
  }
}

// const one = (a) => a + 1;
// const curriedOne = curry(one); // Asi le paso una funcion como parametro
// console.log(curriedOne(1)) // Asi le paso el valor 'a'

const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4
}

const curriedCalcAllFor = curry(calcAllFour) 
const curriedCalclAllFor2 = curriedCalcAllFor(1)
const curriedCalclAllFor3 =curriedCalclAllFor2(2) 
const curriedCalclAllFor4 = curriedCalclAllFor3(5)
const curriedCalclAllFor5 = curriedCalclAllFor4(8)  
console.log(curriedCalclAllFor5)

module.exports = curry
