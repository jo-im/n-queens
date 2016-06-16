/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  //loop through n
  //var counter = 0;
  for (var i = 0; i < n; i++) {
    solution[i] = [];
    //set solution i, to [], and itll do this for all the n's
    for (var x = 0; x < n; x++) {
      solution[i][x] = 0;
    }
  }
  var counter = 0;
  for (var y = 0; y < solution.length; y++) {
    solution[y][counter] = 1;
    counter++;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  function helper (board, row) { //row is at 2
    board = board || new Board({n: n});
    row = row || 0; //2
    for (var i = 0; i < n; i++) {
      //rook
      board.get(row)[i] = 1;

      if (row === (n - 1)) {
        if (!(board.hasAnyRooksConflicts())) {
          solutionCount++;
        }
      } else {
        var newBoard = new Board(board.rows());
        helper(newBoard, row + 1);
      }
      board.get(row)[i] = 0;
    }
  }
  helper();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
