// 16. 3Sum Closest
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.
// 
// Return the sum of the three integers.
// 
// You may assume that each input would have exactly one solution.
// 
//  
// 
// Example 1:
// 
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:
// 
// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
//  
// 
// Constraints:
// 
// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

function threeSumClosest(nums: number[], target: number): number {

    nums.sort((a, b) => a - b);

    const numsLength = nums.length;
    let closestRes = Infinity;

    let pivot = 0;
    while (pivot < numsLength - 2) {

        if (pivot > 0 && nums[pivot - 1] == nums[pivot]) {
            pivot++;
            continue;
        }

        let left = pivot + 1, right = numsLength - 1;
        while (left < right) {
            const currentSum = nums[pivot] + nums[left] + nums[right];

            if (currentSum == target) return currentSum;

            if (currentSum < target) left++;
            else if (currentSum > target) right--;

            const absCurrentSum = Math.abs(target - currentSum);
            const absClosestRes = Math.abs(target - closestRes)

            if (absCurrentSum < absClosestRes) closestRes = currentSum

        }

        pivot++;

    }

    return closestRes;
};

// const threeSumClosest_nums_01 = [-1, 2, 1, -4], threeSumClosest_target_01 = 1
// const threeSumClosest_out_01 = 2;
// const threeSumClosest_res_01 = threeSumClosest(threeSumClosest_nums_01, threeSumClosest_target_01);
// console.log({ threeSumClosest_nums_01, threeSumClosest_out_01, threeSumClosest_res_01 });

const threeSumClosest_nums_02 = [0, 1, 2], threeSumClosest_target_02 = 3
const threeSumClosest_out_02 = 2;
const threeSumClosest_res_02 = threeSumClosest(threeSumClosest_nums_02, threeSumClosest_target_02);
console.log({ threeSumClosest_nums_02, threeSumClosest_out_02, threeSumClosest_res_02 });
