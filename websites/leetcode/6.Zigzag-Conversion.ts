// 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// 
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// 
// Write the code that will take a string and make this conversion given a number of rows:
// 
// string convert(string s, int numRows);
//  
// 
// Example 1:
// 
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
// 
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:
// 
// Input: s = "A", numRows = 1
// Output: "A"
//  
// 
// Constraints:
// 
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000


function convert(s: string, numRows: number): string {

    let pivot = 0;
    const result: string[] = [];

    while (pivot <= s.length) {
        for (let i = 0; i < numRows; i++) {
            result[i] = (result[i] || "") + (s[pivot] || "");
            pivot += 1;
        }
        for (let i = numRows - 2; i >= 1; i--) {
            result[i] = (result[i] || "") + (s[pivot] || "");
            pivot += 1;
        }
    }

    return result.join("");
};

const s_01 = "PAYPALISHIRING", numRows_01 = 4;
console.log(`${s_01} -> "PINALSIGYAHRPI"`);
const res_01 = convert(s_01, numRows_01);
console.log({
    s_01,
    numRows_01,
    res_01,
})

// const s_02 = "PAYPALISHIRING", numRows_02 = 4;
// const s_03 = "A", numRows_03 = 1;