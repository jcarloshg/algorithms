//200.number_of_islands.ts


// https://leetcode.com/problems/number-of-islands/description/?envType=problem-list-v2&envId=union-find

// Given an m x n 2D binary grid grid which represents a map of '1's (land)
// and '0's (water), return the number of islands.
//
// An island is surrounded by water and is formed by connecting adjacent
// lands horizontally or vertically. You may assume all four edges of the
// grid are all surrounded by water.
//
//
//
// Example 1:
//
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

function numIslands(grid: string[][]): number {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const CHAR_ISLAND = "1";
    const CHAR_WATER = "0";
    const CHAR_MARKER = "x";

    // DFS
    const dfs = (i: number, j: number): boolean => {
        // check the edges
        if (i < 0 || i >= ROWS) return false;
        if (j < 0 || j >= COLS) return false;

        // console.log(`[${i}, ${j}]`);

        if (grid[i][j] == CHAR_WATER) return false;
        if (grid[i][j] == CHAR_MARKER) return false;

        grid[i][j] = CHAR_MARKER;

        // console.log("---bottom---");
        dfs(i - 1, j);
        // console.log("---up---");
        dfs(i + 1, j);
        // console.log("---left---");
        dfs(i, j - 1);
        // console.log("---right---");
        dfs(i, j + 1);

        return true;
    };

    let totalIslands = 0;

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {

            if (grid[i][j] == CHAR_WATER) continue
            if (grid[i][j] == CHAR_MARKER) continue

            const wasVistedAnIsland = dfs(i, j);
            console.log(`grid: `, grid);
            if (wasVistedAnIsland) totalIslands += 1
        }
    }

    return totalIslands;
}

const grid_01 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];
console.log(`____ grid_01: `, grid_01);
console.log(`grid_01: `, numIslands(grid_01));
