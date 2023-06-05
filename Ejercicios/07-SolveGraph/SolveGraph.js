// ! Solución 1  --> usando Array 
// function SolveGraph (graph, start, target, visited = []) {
//   // Your code here:

//   if(visited.includes(start)) return;
//   visited.push(start);

//   for(const node of graph[start]) {
//     if(node === target) return true;
//     if(SolveGraph(graph, node, target, visited)) return true;
//   }

//   return false;
// }
// Complejidad >>> n*log(n)

// ! Solución 2  --> usando objeto 
function SolveGraph (graph, start, target, visited = []) {
  // Your code here:

  if(visited[start]) return;
  visited[start] = true;

  for(const node of graph[start]) {
    if(node === target) return true;
    if(SolveGraph(graph, node, target, visited)) return true;
  }

  return false;
}

// Complejidad >>> n*log(n)

// ! Se puede hacer con un for tambien. HACERLO.

module.exports = SolveGraph
