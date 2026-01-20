// 954.array_of_doubled_pairs.ts

// 954. Array of Doubled Pairs
//
// Given an integer array of even length arr, return true if it is possible to
// reorder arr such that arr[2 * i + 1] = 2 * arr[2 * i]
// for every 0 <= i < len(arr) / 2, or false otherwise.9
//
// EXAMPLES
//
// Input: arr = [3,1,3,6]
// Output: false
//
// Input: arr = [2,1,2,6]
// Output: false
//
// Input: arr = [4,-2,2,-4]
// Output: true
// Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
//
// Constraints:
// 2 <= arr.length <= 3 * 104
// arr.length is even.
// -105 <= arr[i] <= 105

// function canReorderDoubled(arr: number[]): boolean {
//     // 1. Create a Frequency Map to count occurrences of each number
//     // Map<Number, Count>
//     const count = new Map<number, number>();
// 
//     for (const num of arr) {
//         count.set(num, (count.get(num) || 0) + 1);
//     }
// 
//     console.log(`count: `, count);
// 
//     // 2. Get all unique numbers and sort them by ABSOLUTE VALUE
//     // We sort by Math.abs() to ensure we process small magnitudes first.
//     // Example: [-2, 4, 2, -4] becomes [2, -2, 4, -4] (or similar abs order)
//     // This allows us to match 2 with 4, and -2 with -4 safely.
//     const uniqueKeys = Array.from(count.keys());
//     uniqueKeys.sort((a, b) => Math.abs(a) - Math.abs(b));
// 
//     console.log(`uniqueKeys: `, uniqueKeys);
// 
//     // 3. Iterate through sorted numbers and try to find their pair
//     for (const x of uniqueKeys) {
// 
//         console.log("\n");
// 
//         // Check how many 'x' we have left to pair
//         const xCount = count.get(x) || 0;
// 
//         console.log(`x: `, x);
//         console.log(`xCount: `, xCount);
// 
//         // If count is 0, this number was already consumed as a double
//         // for a smaller number earlier in the loop. We skip it.
//         if (xCount === 0) continue;
// 
//         // Special Case: 0
//         // 0 * 2 = 0. So 0 must pair with 0.
//         // We simply need an even number of zeros.
//         if (x === 0) {
//             if (xCount % 2 !== 0) return false;
//             count.set(x, 0); // Mark all zeros as processed
//             continue;
//         }
// 
//         // Generic Case: Calculate the required double
//         const target = 2 * x;
//         const targetCount = count.get(target) || 0;
// 
//         console.log(`target: `, target);
//         console.log(`targetCount: `, targetCount);
// 
//         // If we have more 'x's than '2x's, we cannot pair them all.
//         // Example: We have two 3s, but only one 6. Impossible.
//         if (targetCount < xCount) {
//             return false;
//         }
// 
//         // Consume the pairs
//         // We use up 'xCount' number of targets.
//         // Example: If we have three 3s, we remove three 6s.
//         count.set(target, targetCount - xCount);
//     }
// 
//     // If we finished the loop without issues, valid reordering exists.
//     return true;
// }
function canReorderDoubled(arr: number[]): boolean {

    // counter of frequency
    const frequency = new Map()
    arr.forEach(n => frequency.set(n, (frequency.get(n) || 0) + 1))
    console.log(`frequency: `, frequency);

    // sort the keys
    const sortedKeys: number[] = Array
        .from(frequency.keys())
        .sort((a, b) => Math.abs(a) - Math.abs(b))
    console.log(`sortedKeys: `, sortedKeys);

    for (let i = 0; i < sortedKeys.length; i++) {

        console.log("\n");

        const key = sortedKeys[i];
        const freq = frequency.get(key)!

        console.log(`key: `, key);
        console.log(`freq: `, freq);

        // because, this key already was used
        if (freq == 0) continue;

        // for 0 use case
        // if exists 0, this must have a frequency of 2, or odd
        if (key == 0) {
            if (freq % 2 !== 0) return false;
            frequency.set(key, 0)
            continue
        }

        // exist the double of the key
        // for 5 must exist 10
        // for -3 must exist -6
        const keyToSearch = key * 2;
        const keyToSearchFreq = frequency.get(keyToSearch) || 0;
        console.log(`keyToSearch: `, keyToSearch);
        console.log(`keyToSearchFreq: `, keyToSearchFreq);

        // make us ensure the both keys has the same frequency
        // for [-4 -> 3] must exist [-8 -> 3]
        // for [25 -> 9] must exist [25 -> 9]
        if (keyToSearchFreq < freq) return false

        // evit reoperate the same keys
        frequency.set(keyToSearch, keyToSearchFreq - freq);
        console.log(`frequency.get(keyToSearch): `, frequency.get(keyToSearch));
        console.log(`frequency: `, frequency);
    }

    return true;
}

console.log(`[3, 1, 3, 6]: `, canReorderDoubled([3, 1, 3, 6]));
console.log(`[2, 1, 2, 6]: `, canReorderDoubled([2, 1, 2, 6]));
console.log(`[4, -2, 2, -4]: `, canReorderDoubled([4, -2, 2, -4]));
console.log(`[2,4,0,0,8,1]: `, canReorderDoubled([2, 4, 0, 0, 8, 1]));
console.log(`[-5, -3]: `, canReorderDoubled([-5, -3]));
console.log(`[4,2]: `, canReorderDoubled([4, 2]));
console.log(`[-1,2]: `, canReorderDoubled([-1, 2]));
console.log(`[1, 2, 4, 16, 8, 4]: `, canReorderDoubled([1, 2, 4, 16, 8, 4]));
console.log(`[1, 2, 1, -8, 8, -4, 4, -4, 2, -2]: `, canReorderDoubled([1, 2, 1, -8, 8, -4, 4, -4, 2, -2]));







