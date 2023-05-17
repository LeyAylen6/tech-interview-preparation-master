// ! Solución de fuerza bruta

function HasBalancedBrackets (string) {

  const validOpeningBrackets = ['{', '[', '('];
  const validClosingBrackets = ['}', ']', ')'];
  const openBrackets = [];

  for(let i = 0; i < string.length; i++) {
    const bracket = string[i];

    if (validOpeningBrackets.includes(bracket)) openBrackets.push(bracket) 
      
    const index = validClosingBrackets.indexOf(bracket);
    const brother = validOpeningBrackets[index];
    const lastOpen = openBrackets[openBrackets.length - 1];
    
    if(lastOpen === brother) openBrackets.pop();
    else return false;
    
  }
  if(openBrackets.length) return false;
  return true;
}
// Guarda en openBrackets todos los brackets de apertura. 
// valida si el primero del string esta en los brackets de apertura válidos
// si esta lo guarda en openBrackets.

//Pregunta si esta en el de cierre , si esta.. mira el lugar en el que esta en el de cierre
// y busca el hermano igual en el de apertura
// compara el de apertura con el ultimo bracket que se guardo en openBracket
// si es igual lo elimina. 
// Asi hace con todos . Si al final quedo alguno en openBrackets es porque esta desbalanceado.

// ! Solución refactor

function HasBalancedBrackets (string) {
  const openBrackets = [];
  const validBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for(let i = 0; i < string.length; i++) {
    const bracket = string[i];

    if (validBrackets[bracket]) openBrackets.push(bracket);
    else {
      const lastOpen = openBrackets[openBrackets.length - 1]
      if(validBrackets[lastOpen] === bracket) openBrackets.pop();
      else return false;
    }
  }
  if(openBrackets.length) return false;
  return true;
}

// ! Solución Re-refactor

function HasBalancedBrackets (string) {
  const openBrackets = [];
  const validBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for(const bracket of string) {
    if(validBrackets[bracket]) openBrackets.push(bracket);
    else if(validBrackets[openBrackets.pop()] !== bracket) return false;
  }
  return !openBrackets.length
}

// Complejidad >>> O(n)

module.exports = HasBalancedBrackets
