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
    const frequency = new Map();
    words.forEach((w) => frequency.set(w, (frequency.get(w) || 0) + 1));

    console.log(`frequency: `, frequency);

    let longest = 0;
    let hadMiddleWord = false;

    const keysArray = Array.from(frequency.keys());

    for (let i = 0; i < keysArray.length; i++) {
        const word = keysArray[i];
        const reverseWord = word[1] + word[0];

        console.log("\n");
        console.log(`keysArray: `, keysArray);
        console.log(`word ${word}`, `reverseWord ${reverseWord}`);

        // for cases gg <-> gg, aa <-> aa
        if (word === reverseWord) {
            const freq = frequency.get(reverseWord)!;
            console.log(`${word} -> ${freq}`);


            // for cases gg -> 1
            if (freq === 1 && hadMiddleWord === false) {
                longest += freq * 2;
                hadMiddleWord = true;
            }

            // for cases aa -> 3
            if (freq > 1) {
                const exedente = freq % 2 // 1
                const forUse = freq - exedente; // 3 - 1 = 2
                const remainder = freq - forUse; // 3 - 2 = 1

                // here use 2
                longest += forUse * 2;
                console.log(`longest: `, longest);
                // here use the remainder = 1
                if (remainder === 1 && hadMiddleWord === false) {
                    longest += remainder * 2;
                    console.log(`longest: `, longest);
                    hadMiddleWord = true;
                }
            }

            continue;
        }

        const existsReverseWord = frequency.has(reverseWord);
        if (existsReverseWord == true) {
            const wordFreq = frequency.get(word) || 0;
            const reverseWordFreq = frequency.get(reverseWord) || 0;

            console.log(`word: ${word} ${wordFreq}`);
            console.log(`reverseWordFreq: ${reverseWord} ${reverseWordFreq}`);

            // These were already used
            if (wordFreq === 0) continue;
            if (reverseWordFreq === 0) continue;

            const minFreq = Math.min(wordFreq, reverseWordFreq);
            longest += minFreq * 2 * 2;
            console.log(`longest: `, longest);

            frequency.set(word, wordFreq - minFreq);
            frequency.set(reverseWord, reverseWordFreq - minFreq);
        }
    }

    return longest;
}

console.log(
    `["ab", "ty", "yt", "lc", "cl", "ab"]`,
    longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]),
);

console.log(`["lc", "cl", "gg"]`, longestPalindrome(["lc", "cl", "gg"]));

console.log(`["cc", "ll", "xx"]`, longestPalindrome(["cc", "ll", "xx"]));
//
console.log(
    `["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc",]`,
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
    `["ll", "lb", "bb", "bx", "xx", "lx", "xx", "lx", "ll", "xb", "bx", "lb", "bb", "lb", "bl", "bb", "bx", "xl", "lb", "xx",]`,
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


console.log(
    `["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc"]: `,
    longestPalindrome(["dd", "aa", "bb", "dd", "aa", "dd", "bb", "dd", "aa", "cc", "bb", "cc", "dd", "cc"])
);