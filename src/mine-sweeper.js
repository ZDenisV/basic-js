const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = []
  for (let i = 0; i < matrix.length; i++ ) {
    result.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      result[i][j] = 0;
    }
  }

  const someFuction = (q, k) => {
  for (let i = 0; i < result.length; i++ ) {
    for (let j = 0; j < result.length; j++) {
      if (Math.abs(q - i) <= 1 &&  Math.abs(k - j) <= 1) {
        result[i][j]++;
      }
    }
  }
 }

 for (let i = 0; i < result.length; i++ ) {
  for (let j = 0; j < result.length; j++) {
    if (matrix[i][j]) {
      someFuction(i, j);
      result[i][j]--;
    }
  }
}
 return result;

}

module.exports = {
  minesweeper
};
