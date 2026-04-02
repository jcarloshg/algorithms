// 46. Permutations
// Medium
// Topics
// premium lock icon
// Companies
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
//
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
//
// Input: nums = [1]
// Output: [[1]]
//
//
// Constraints:
//
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// [0, 1, 2, 3, 4, 5]

function permute(nums: number[]): number[][] {
    const numsLength = nums.length;
    const cache: boolean[] = new Array(numsLength).fill(false);

    const res: number[][] = [];

    const dfs = (array: number[], size: number) => {
        if (size == numsLength) {
            res.push(array);
            return;
        }

        for (let i = 0; i < numsLength; i++) {
            const status = cache[i];
            if (status == false) {
                cache[i] = true;
                const value = nums[i];
                dfs([...array, value], size + 1);
                cache[i] = false;
            }
        }
    };

    dfs([], 0);

    return res;
}

const permuteTests = [{ nums: [1, 2, 3] }];

permuteTests.forEach((t, i) => {
    console.log("─────────────────────────────────────");
    console.log(`i: ${i}`);
    console.log("─────────────────────────────────────");

    const res = permute(t.nums);
    console.log(`res: `, res);
});
