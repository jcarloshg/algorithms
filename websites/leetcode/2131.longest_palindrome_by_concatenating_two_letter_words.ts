// 2131.longest_palindrome_by_concatenating_two_letter_words.ts

// Longest Palindrome by Concatenating Two Letter Words

// You are given an array of strings words. Each element of words consists of
// two lowercase English letters.
// Create the longest possible palindrome by selecting some elements from words
// and concatenating them in any order. Each element can be selected at most once.
//
// Return the length of the longest palindrome that you can create. If it is
// impossible to create any palindrome, return 0.
//
// A palindrome is a string that reads the same forward and backward.
//
// Input: words = ["lc","cl","gg"]
// Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created.
//
// Input: words = ["ab","ty","yt","lc","cl","ab"]
// Output: 8
// Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
// Note that "lcyttycl" is another longest palindrome that can be created.
//
// Input: words = ["cc","ll","xx"]
// Output: 2
// Explanation: One longest palindrome is "cc", of length 2.
// Note that "ll" is another longest palindrome that can be created, and so is "xx".
//
// Constraints:
//
// 1 <= words.length <= 105
// words[i].length === 2
// words[i] consists of lowercase English letters.

function longestPalindrome(words: string[]): number {
    // get the frequency by word
    const frequency = new Map<string, number>();
    words.forEach((w) => {
        // save frequency
        let freq = frequency.get(w);
        if (freq === undefined) freq = 0;
        frequency.set(w, freq + 1);
    });

    let longestPalindrome = 0;
    let hasOdd = false;

    for (const [word, freq] of frequency) {

        let reveserWord = "";
        for (let i = word.length - 1; i >= 0; i--) reveserWord += word[i];

        // case for aa <-> aa, bb <-> bb
        if (word === reveserWord) {
            // add lenght of word * frequency
            const module = freq % 2;
            const pairs = freq - module;
            longestPalindrome += word.length * pairs;

            if (hasOdd === false && module === 1) {
                hasOdd = true;
                longestPalindrome += word.length;
            }
        }

        if (word != reveserWord) {
            const hasReverse =
                frequency.get(reveserWord) === undefined ? false : true;
            if (hasReverse === true) {
                const minFreq = Math.min(
                    frequency.get(word) ?? 0,
                    frequency.get(reveserWord) ?? 0,
                );
                longestPalindrome += word.length * minFreq;
            }
        }
    }

    return longestPalindrome;
}

console.log(
    `longestPalindrome: `,
    longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]),
);

console.log(`longestPalindrome: `, longestPalindrome(["lc", "cl", "gg"]));

console.log(
    `longestPalindrome ["cc", "ll", "xx"]: `,
    longestPalindrome(["cc", "ll", "xx"]),
);
//
console.log(
    `longestPalindrome: `,
    longestPalindrome([
        "dd",
        "aa",
        "bb",
        "dd",
        "aa",
        "dd",
        "bb",
        "dd",
        "aa",
        "cc",
        "bb",
        "cc",
        "dd",
        "cc",
    ]),
);

console.log(
    `longestPalindrome: `,
    longestPalindrome([
        "ll",
        "lb",
        "bb",
        "bx",
        "xx",
        "lx",
        "xx",
        "lx",
        "ll",
        "xb",
        "bx",
        "lb",
        "bb",
        "lb",
        "bl",
        "bb",
        "bx",
        "xl",
        "lb",
        "xx",
    ]),
);
