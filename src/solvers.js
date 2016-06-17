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

  function helper (board, row, rookArray) {
    //board will be the board argument you give, or a new board on first call
    board = board || new Board({n: n});
    //row will be the row arg you give, or be set to 0 (this first row)
    row = row || 0; //2
    //rookArray holds all indexes of existing rooks. on first call, the array will be empty
    rookArray = rookArray || [];
    //loop through n!
    for (var i = 0; i < n; i++) {
      //if 'i' is inside of rookArray, then the rook can't be on that column
      if (rookArray.indexOf(i) === -1) {
        //if the rook is not on that column, continue! you slice the existing rookArray, so he can go along the recursion
        var rookIndex = rookArray.slice();
        //set your rook
        board.get(row)[i] = 1;
        //add the column index to your currently tracking rookArray (which is now rookIndex)
        rookIndex.push(i);
        //if row === n-1, that means you are done
        if (row === (n - 1)) {
          solutionCount++;
        } else {
          //if the board hasn't completed recursion (as in, its row !=== n-1, that means it still has more rows to complete)
            //create a new board that represents the board you want to "copy", since in memory stuff will cause issues.
          var newBoard = new Board(board.rows());
          //call recursion
          helper(newBoard, row + 1, rookIndex);
        }
        //toggle off your rook so he won't impact future recursion calls;
        board.get(row)[i] = 0;
      }
    }
  }
  helper();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;

  if (n === 0) {
    var newBoard = new Board([]);
    return newBoard.rows();
  }
  if (n === 1) {
    return [[1]];
  }

  if (n === 2 || n === 3) {
    var newerBoard = new Board({n:n});
    return newerBoard.rows();
  }

  function helper (board, row) {
    //board will be the board argument you give, or a new board on first call
    board = board || new Board({n: n});
    console.log('board is now', board);
    //row will be the row arg you give, or be set to 0 (this first row)
    row = row || 0; //2
    //rookArray holds all indexes of existing rooks. on first call, the array will be empty
    //rookArray = rookArray || [];
    //loop through n!
    for (var i = 0; i < n; i++) {
      //if 'i' is inside of rookArray, then the rook can't be on that column
      //if (rookArray.indexOf(i) === -1) {
        //if the rook is not on that column, continue! you slice the existing rookArray, so he can go along the recursion
        //var rookIndex = rookArray.slice();
        //set your rook
        board.get(row)[i] = 1;
        //add the column index to your currently tracking rookArray (which is now rookIndex)
        //rookIndex.push(i);
        //if row === n-1, that means you are done
        console.log('row is', row);
        if (row === (n - 1)) {
          // return (!board.hasAnyQueensConflicts());
          console.log('reached the last row and board is', board);
          if (!board.hasAnyQueensConflicts()) {
            //console.log('Returning a board without queens conflicts!');
            return board.rows();
            console.log('solution is now', solution);
          }
          // if (!board.hasAnyQueensConflicts()) {
          //   return board;
          // } else {

          // }
        } else {
          //if the board hasn't completed recursion (as in, its row !=== n-1, that means it still has more rows to complete)
            //create a new board that represents the board you want to "copy", since in memory stuff will cause issues.
          var newBoard = new Board(board.rows());
          //call recursion
          var run = helper(newBoard, row + 1);
          if (run) {
            return run;
          }
          //   run = helper(newBoard, row + 1, rookIndex);
          // } else {
          //   if (!run.hasAnyQueensConflicts()) {
          //     return run;
          //   }
          // }

        }
        board.get(row)[i] = 0;
        //toggle off your rook so he won't impact future recursion calls;
        //get(row)[i] = 0;
      //}
    }
    return;
  }

  return helper();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  if (n === 0) {
    return 1;
  }

  function helper (board, row, rookArray) {
    //board will be the board argument you give, or a new board on first call
    board = board || new Board({n: n});
    //row will be the row arg you give, or be set to 0 (this first row)
    row = row || 0; //2
    //rookArray holds all indexes of existing rooks. on first call, the array will be empty
    rookArray = rookArray || [];
    //loop through n!
    for (var i = 0; i < n; i++) {
      //if 'i' is inside of rookArray, then the rook can't be on that column
      if (rookArray.indexOf(i) === -1) {
        //if the rook is not on that column, continue! you slice the existing rookArray, so he can go along the recursion
        var rookIndex = rookArray.slice();
        //set your rook
        board.get(row)[i] = 1;
        //add the column index to your currently tracking rookArray (which is now rookIndex)
        rookIndex.push(i);
        //if row === n-1, that means you are done
        if (row === (n - 1)) {
          if (!board.hasAnyQueensConflicts()) {
            solutionCount++;
          }
        } else {
          //if the board hasn't completed recursion (as in, its row !=== n-1, that means it still has more rows to complete)
            //create a new board that represents the board you want to "copy", since in memory stuff will cause issues.
          var newBoard = new Board(board.rows());
          //call recursion
          helper(newBoard, row + 1, rookIndex);
        }
        //toggle off your rook so he won't impact future recursion calls;
        board.get(row)[i] = 0;
      }
    }
  }
  helper();

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
