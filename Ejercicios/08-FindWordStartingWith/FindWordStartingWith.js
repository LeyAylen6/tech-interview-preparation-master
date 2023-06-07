// ! Solución de fuerza bruta
// function FindWordStartingWith (book, query) {
  
//   bookText = book.text.toLowerCase();
//   query = query.toLowerCase();
//   let result = []

//   for(let i = 0; i < bookText.length; i++) {
//     let sliced = bookText.slice(i, i + query.length)
    
//     if(sliced === query && ( bookText[i-1] === ' ' || i === 0 )) result.push(i); 
//   }
  
//   return result;
// }
// Complejidad >>> O(n*m)

// ! Solución refactor
function FindWordStartingWith (book, query) {
  bookText = book.text.toLowerCase();
  query = query.toLowerCase();
  let result = []

  for(let i = 0; i < bookText.length; i++) {
    if(bookText[i-1] === ' ' || i === 0 ) {
      for(let j = 0; j < query.length; j++) {
    
        if(query[j] !== bookText[i + j]) {
          i += j;
          break;
        }

        if(j === query.length - 1) {
          result.push(i);
          i += j;
        }
       }
    }
  }
  return result;
}

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}

FindWordStartingWith(book, 'un')
console.log(FindWordStartingWith(book, 'un'))


module.exports = FindWordStartingWith
