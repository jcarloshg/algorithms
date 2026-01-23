// 130.surrounded_regions.ts

// https://leetcode.com/problems/surrounded-regions/description/?envType=problem-list-v2&envId=union-find

// You are given an m x n matrix board containing letters 'X' and 'O',
// capture regions that are surrounded:
// 
// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the 
// region with 'X' cells and none of the region cells are on the edge of the board.
// To capture a surrounded region, replace all 'O's with 'X's in-place within
// the original board. You do not need to return anything.
// 
//  
// 
// Example 1:
// 
// Input: board = [
//      ["X","X","X","X"],
//      ["X","O","O","X"],
//      ["X","X","O","X"],
//      ["X","O","X","X"]
// ]
// 
// Output: [
//      ["X","X","X","X"],
//      ["X","X","X","X"],
//      ["X","X","X","X"],
//      ["X","O","X","X"]
//  ]
// 
// Explanation:
// 
// 
// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.
// 
// Example 2:
// 
// Input: board = [["X"]]
// 
// Output: [["X"]]
// 
//  
// 
// Constraints:
// 
// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.


/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {

    const ROWS = board.length
    const COLS = board[0].length
    const CHAR_MARKER = "#"
    const X = "X"
    const O = "O"

    // Deep-First Search
    const dfs = (i: number, j: number) => {
        // 0 <= i <= M
        if (!(0 <= i && i < ROWS)) return;
        // 0 <= j <= N
        if (!(0 <= j && j < COLS)) return;
        // check this position is O
        if (board[i][j] != O) return

        // mark as visited witht the char '#'
        board[i][j] = CHAR_MARKER

        // visite the neighbors
        dfs(i - 1, j); // left
        dfs(i + 1, j); // right
        dfs(i, j - 1); // up
        dfs(i, j + 1); // down
    }


    // check the edges in axis Y
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0);          // visit left place on Y
        dfs(i, COLS - 1)    // visit right place on Y
    }

    // check the edges in axis X
    for (let j = 0; j < COLS; j++) {
        dfs(0, j);          // visit UP place on X
        dfs(ROWS - 1, j)    // visit BOTTOM place on X
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {

            if (board[i][j] == O) board[i][j] = X
            if (board[i][j] == CHAR_MARKER) board[i][j] = O

        }
    }
};

const board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
]

solve(board)

console.log(`board: `, board);