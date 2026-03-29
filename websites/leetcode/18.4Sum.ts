// 18. 4Sum
// Medium
// Topics
// premium lock icon
// Companies
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
//
//
//
// Example 1:
//
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:
//
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
//
//
// Constraints:
//
// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

function fourSum(nums: number[], target: number): number[][] {

    nums.sort((a, b) => a - b);
    const numsLength = nums.length;
    const combinations: number[][] = [];

    if (numsLength < 4) return combinations;

    for (let i = 0; i < numsLength - 3; i++) {

        if (i > 0 && nums[i - 1] == nums[i]) continue;

        // the current value of i, plus the possible conbinations, won't be enough
        // to equals the target's value, so we have to continue with the next value of i
        const currentMaxSum = nums[i] + nums[numsLength - 3] + nums[numsLength - 2] + nums[numsLength - 1];
        if (currentMaxSum < target) continue;

        for (let j = i + 1; j < numsLength - 2; j++) {

            if (j - i > 1 && nums[j - 1] == nums[j]) continue;

            // the current value of j, plus the possible conbinations, won't be enough
            // to equals the target's value, so we have to continue with the next value of j
            const currentMaxSum = nums[i] + nums[j] + nums[numsLength - 2] + nums[numsLength - 1];
            if (currentMaxSum < target) continue;

            let left = j + 1;
            let rigth = numsLength - 1;

            while (left < rigth) {

                let currentSum = nums[i] + nums[j] + nums[left] + nums[rigth];

                if (currentSum == target) {
                    combinations.push([nums[i], nums[j], nums[left], nums[rigth]]);
                    while (nums[left] == nums[left + 1]) left++;
                    while (nums[rigth] == nums[rigth - 1]) rigth--;
                    left++;
                    rigth--;
                } else if (currentSum < target)
                    left += 1;
                else
                    rigth -= 1;

            }
        }
    }

    return combinations;
}

const fourSumTest = [
    {
        nums: [1, 0, -1, 0, -2, 2],
        target: 0,
        output: [
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1],
        ],
    },
    {
        nums: [2, 2, 2, 2, 2],
        target: 8,
        Output: [[2, 2, 2, 2]],
    },
    {
        nums: [-2, -1, -1, 1, 1, 2, 2],
        target: 0,
        Output: [[-2, -1, 1, 2], [-1, -1, 1, 1]],
    }
];

fourSumTest.forEach((test) => {
    const res = fourSum(test.nums, test.target);
    console.log(`res: `, res);
});
