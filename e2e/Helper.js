function getRandomNumberNotInArray(n, patternPlayerX) {
    const set = new Set(Array.from({ length: n }, (_, i) => i));
    patternPlayerX.forEach(num => set.delete(num));
    const list = [...set];
    return list;
  }
  
function randomInt(n) {
    return Math.floor(Math.random() * n);
  }


export { getRandomNumberNotInArray, randomInt };
