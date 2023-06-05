// ! Solución de fuerza bruta
// function spyOn (fn) {
  
//   let callCount = 0;
//   const calledWidth = new Map();
//   const returned = new Map();

//   const spy = (n1, n2) => {
//     callCount++;              // Aumenta el contador cada ves que se ejecuta.
//     calledWidth.set(n1, true)
//     calledWidth.set(n2, true) // Guarda los parametros que recibio

//     returned.set(fn(n1, n2), true) // Guarda lo que retorna

//     return fn(n1, n2)
//   }

//   spy.getCallCount = () => callCount;

//   spy.wasCalledWith = (value) => {
//     if(calledWidth.get(value)) return true;
//     else return false;
//   }

//   spy.returned = (value) => {
//     if(returned.get(value)) return true;
//     else return false;
//   }

//   return spy;
// }

// ! Refactor

function spyOn (fn) {
  
  let callCount = 0;
  const calledWidth = new Map();
  const returned = new Map();

  const spy = (...args) => {
    callCount++; // Aumenta el contador cada ves que se ejecuta.

    for(const arg of args) calledWidth.set(arg, true);  // Guarda los parametros que recibio

    const result = fn(...args); // Guarda lo que retorna
    returned.set(result, true); //       ""

    return result;
  }
  
  spy.getCallCount = () => callCount;
  spy.wasCalledWith = (value) => !!calledWidth.get(value)
  spy.returned = (value) => !!returned.get(value)

  return spy;
}

module.exports = spyOn
