// 17.letter_combinations_of_a_phone_number.ts

// Given a string containing digits from 2-9 inclusive, return all possible
// letter combinations that the number could represent. Return the answer in
// any order.
//
// A mapping of digits to letters (just like on the telephone buttons) is given
// below. Note that 1 does not map to any letters.
//
// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
//
// Example 2:
// Input: digits = "2"
// Output: ["a","b","c"]
//
// Constraints:
// 1 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'

function letterCombinations(digits: string): string[] {

    if (digits.length < 1 || digits.length > 4) return [];

    const digitToChar = [
        "", // 0
        "", // 1
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ]

    const result: string[] = [];

    const back = (index: number, currentStr: string) => {
        if (currentStr.length == digits.length) {
            result.push(currentStr);
            return;
        }

        const numberOfStr = Number(digits[index]);
        const chars: string = digitToChar[numberOfStr];
        for (let char of chars) {
            back(index + 1, currentStr + char);
        }
    };

    if (digits.length >= 1 || digits.length <= 4) back(0, "");

    return result;
}

const letterCombinationsProofs = [
    {
        digits: "23",
        Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
];

letterCombinationsProofs.forEach((test, index) => {
    console.log(index);
    const result = letterCombinations(test.digits);
    console.log({
        index,
        dig: test.digits,
        result,
    });
});

// function letterCombinations(digits: string): string[] {
//     const digitToChar = new Map();
//     digitToChar.set("2", "abc");
//     digitToChar.set("3", "def");
//     digitToChar.set("4", "ghi");
//     digitToChar.set("5", "jkl");
//     digitToChar.set("6", "mno");
//     digitToChar.set("7", "pqrs");
//     digitToChar.set("8", "tuv");
//     digitToChar.set("9", "wxyz");
//
//     const result: string[] = [];
//
//     const backtrack = (idx: number, currString: string) => {
//         if (currString.length === digits.length) {
//             result.push(currString);
//             return;
//         }
//
//         for (let c of digitToChar.get(digits[idx])) {
//             backtrack(idx + 1, currString + c);
//         }
//     };
//
//     if (digits && digits.length > 0) backtrack(0, "");
//
//     return result;
// }

// console.log(`23: `, letterCombinations("23"));
// console.log(`2: `, letterCombinations("2"));
// console.log(`2345: `, letterCombinations("2345"));
