// 9. Palindrome Number
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer x, return true if x is a palindrome, and false otherwise.
// 
//  
// 
// Example 1:
// 
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// 
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// 
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//  
// 
// Constraints:
// 
// -231 <= x <= 231 - 1
//  
// 
// Follow up: Could you solve it without converting the integer to a string?


function isPalindrome(x: number): boolean {

    const numString = x.toString();
    let left = 0, rigth = numString.length - 1;

    while (left <= rigth) {
        console.log({ "left": numString[left], "rigth": numString[rigth] })
        if (numString[left] == numString[rigth]) {
            left++;
            rigth--;
        } else {
            return false;
        }
    }

    return true;

};

const isPalindrome_in_01 = 121, isPalindrome_out_01 = true;
const isPalindrome_res_01 = isPalindrome(isPalindrome_in_01);
console.log({
    isPalindrome_in_01,
    isPalindrome_out_01,
    isPalindrome_res_01,
});

const isPalindrome_in_02 = 11, isPalindrome_out_02 = true;
const isPalindrome_res_02 = isPalindrome(isPalindrome_in_02);
console.log({
    isPalindrome_in_02,
    isPalindrome_out_02,
    isPalindrome_res_02,
});