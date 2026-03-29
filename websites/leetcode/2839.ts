// 2839. Check if Strings Can be Made Equal With Operations I
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.
//
// You can apply the following operation on any of the two strings any number of times:
//
// Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.
// Return true if you can make the strings s1 and s2 equal, and false otherwise.
//
//
//
// Example 1:
//
// Input: s1 = "abcd", s2 = "cdab"
// Output: true
// Explanation: We can do the following operations on s1:
// - Choose the indices i = 0, j = 2. The resulting string is s1 = "cbad".
// - Choose the indices i = 1, j = 3. The resulting string is s1 = "cdab" = s2.
// Example 2:
//
// Input: s1 = "abcd", s2 = "dacb"
// Output: false
// Explanation: It is not possible to make the two strings equal.
//
//
// Constraints:
//
// s1.length == s2.length == 4
// s1 and s2 consist only of lowercase English letters.

function canBeEqual(s1: string, s2: string): boolean {
    const s1Length = s1.length;
    if (s1Length != s2.length) return false;

    let isEqual = false;
    function backtraking(pivot: number, s1Aux: string) {

        // if (isEqual == true) return;
        if (s1Aux === s2) {
            isEqual = true;
            return;
        }

        // console.log({ pivot, s1Aux });

        for (let index = pivot; index < s1Length - 2; index++) {

            if (isEqual == true) break;

            backtraking(index + 1, s1Aux);

            const s1AuxArray = s1Aux.split("");
            const i = pivot;
            const j = pivot + 2;
            [s1AuxArray[i], s1AuxArray[j]] = [s1AuxArray[j], s1AuxArray[i]];

            const newS1AuxStr = s1AuxArray.join("");
            backtraking(index + 1, newS1AuxStr);

        }
    }

    backtraking(0, s1);

    return isEqual;
}

const canBeEqualTest = [
    {
        s1: "abcd",
        s2: "cdab",
        out: true,
    },

    {
        s1: "abcd",
        s2: "dacb",
        out: false,
    },

    {
        s1: "bnxw",
        s2: "bwxn",
        out: true,
    },
];

canBeEqualTest.forEach((test, index) => {
    console.log("─────────────────────────────────────");
    console.log(`test: ${index}`);
    console.log("─────────────────────────────────────");
    const res = canBeEqual(test.s1, test.s2);
    console.log({
        s1: test.s1,
        s2: test.s2,
        res,
        isOK: res === test.out,
    });
});
