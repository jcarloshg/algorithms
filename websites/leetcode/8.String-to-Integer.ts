// 8. String to Integer (atoi)
// Medium
// Topics
// premium lock icon
// Companies
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
// 
// The algorithm for myAtoi(string s) is as follows:
// 
// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.
// 
//  
// 
// Example 1:
// 
// Input: s = "42"
// 
// Output: 42
// 
// Explanation:
// 
// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:
// 
// Input: s = " -042"
// 
// Output: -42
// 
// Explanation:
// 
// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:
// 
// Input: s = "1337c0d3"
// 
// Output: 1337
// 
// Explanation:
// 
// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:
// 
// Input: s = "0-1"
// 
// Output: 0
// 
// Explanation:
// 
// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:
// 
// Input: s = "words and 987"
// 
// Output: 0
// 
// Explanation:
// 
// Reading stops at the first non-digit character 'w'.
// 
//  
// 
// Constraints:
// 
// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.


function myAtoi(s: string): number {

    let i = 0;
    const sLength = s.length

    while (s[i] == " ") i++;

    let sign = 1;
    if (s[i] == "+") {
        sign *= 1;
        i++;
    }
    else if (s[i] == "-") {
        sign *= -1;
        i++;
    }


    const valueZero = '0'.charCodeAt(0);
    const limiRange = 2 ** 31;
    const limitPos = (2 ** 31) - 1;
    const limitNeg = -(2 ** 31);

    let result = 0;
    while (i < sLength && s[i] >= "0" && s[i] <= "9") {
        const digit = s[i].charCodeAt(0) - valueZero;
        result = (result * 10) + digit;

        if (result >= limiRange) {
            // const outRangeUnit = sign == 1 ? -1 : 0;
            // return (limiRange + outRangeUnit) * sign;
            return sign == 1 ? ((2 ** 31) - 1) : -(2 ** 31);
        }

        i++;
    }

    return result * sign;
};



// // Input: s = "42"
// // Output: 42
// const in_01 = "42", out_01 = 42;
// const res_01 = myAtoi(in_01);
// console.log({
//     in_01,
//     out_01,
//     res_01,
// })
// 
// // Input: s = " -042"
// // Output: -42
// const in_02 = "-042", out_02 = -42;
// const res_02 = myAtoi(in_02);
// console.log({
//     in_02,
//     out_02,
//     res_02,
// })
// 
// // Input: s = "1337c0d3"
// // Output: 1337
// const in_03 = "1337c0d3", out_03 = 1337;
// const res_03 = myAtoi(in_03);
// console.log({
//     in_03,
//     out_03,
//     res_03,
// })
// 
// // Input: s = "0-1"
// // Output: 0
// const in_04 = "0-1", out_04 = 0;
// const res_04 = myAtoi(in_04);
// console.log({
//     in_04,
//     out_04,
//     res_04,
// })

// Input: s = "   -042"
// Output: 0
const in_05 = "   -042", out_05 = 0;
const res_05 = myAtoi(in_05);
console.log({
    in_05,
    out_05,
    res_05,
})

const in_06 = "21474836460", out_06 = 2147483647;
const res_06 = myAtoi(in_06);
console.log({
    in_06,
    out_06,
    res_06,
});

const in_07 = "2147483648", out_07 = 2147483647;
const res_07 = myAtoi(in_07);
console.log({
    in_07,
    out_07,
    res_07,
});




console.log(`2 ** 31: `, 2 ** 31);