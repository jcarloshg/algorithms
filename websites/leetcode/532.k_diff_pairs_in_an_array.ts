//532.k_diff_pairs_in_an_array.ts

// Given an array of integers nums and an integer k, return the number of unique
// k-diff pairs in the array.
//
// A k-diff pair is an integer pair (nums[i], nums[j]), where the following
// are true:
//
// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.
//
// EXAMPLES:
//
// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
//
// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
//
// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).
//
//
// Constraints:
//
// 1 <= nums.length <= 104
// -107 <= nums[i] <= 107
// 0 <= k <= 107

function findPairs(nums: number[], k: number): number {
    const numsSorted = nums.sort((a, b) => a - b);
    const numsSortedLength = numsSorted.length;

    const pairs = new Set<string>();

    for (let i = 0; i < numsSortedLength; i++) {

        let left = i;
        let right = numsSortedLength - 1;
        const target = k + numsSorted[left]; // we neeed to search to right

        // console.log('\n');
        // console.log(`numsSorted: `, numsSorted);
        // console.log(
        //     `k: ${k} |`,
        //     `target: ${target} |`,
        //     `L: numsSorted[${left}] -> ${numsSorted[left]} |`,
        //     `R: numsSorted[${right}] -> ${numsSorted[right]} |`,
        // );

        // looking for the target value
        while (left <= right) {

            console.log("---while---");
            const middle = (left + 1) == right
                ? right
                : Math.floor(left + (right - left) / 2);
            // console.log(
            //     `target: ${target}`,
            //     `left ${left}`,
            //     `middle numsSorted[${middle}] ${numsSorted[middle]}`,
            //     `right ${right}`
            // );

            if (numsSorted[middle] === target) {
                // i != j
                const key = `[${numsSorted[i]},${numsSorted[middle]}]`
                console.log(`pair -> [${i},${middle}]: ${key}`);
                if (i != middle) {
                    pairs.add(key)
                    console.log(`YES pairs: `, pairs);
                }
                // console.log(`NOT pairs: `, pairs);
                break;
            } else if (target < numsSorted[middle]) {
                // console.log(`target < numsSorted[middle]: `, target < numsSorted[middle]);
                right = middle - 1;
                // console.log(`right: `, right);
            } else {
                // console.log(`target > numsSorted[middle]: `, target > numsSorted[middle]);
                left = middle + 1;
                // console.log(`left: `, left);
            }

        }


    }

    return pairs.size;
}

console.log(
    `Input: nums = [3,1,4,1,5], k = 2: ${findPairs([3, 1, 4, 1, 5], 2)}}\n\n\n`,
);
console.log(
    `Input: nums = [1,2,3,4,5], k = 1: , ${findPairs([1, 2, 3, 4, 5], 1)}}\n\n\n`,
);
console.log(
    `Input: nums = [1,3,1,5,4], k = 0: ${findPairs([1, 3, 1, 5, 4], 0)}}\n\n\n`,
);

//
