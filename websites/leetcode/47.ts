// 47. Permutations II
// Medium
// Topics
// premium lock icon
// Companies
// Given a collection of numbers, nums, that might contain duplicates,
// return all possible unique permutations in any order.
// 
//  
// 
// Example 1:
// 
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:
// 
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//  
// 
// Constraints:
// 
// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

function permuteUnique(nums: number[]): number[][] {

    const numsLength = nums.length;
    const frequency: boolean[] = new Array(numsLength).fill(false);
    const res: number[][] = [];

    const dfs = (array: number[], length: number) => {

        if (length == numsLength) {
            res.push(array);
            return;
        }

        for (let i = 0; i < numsLength; i++) {

            const isUsed = frequency[i];
            if (isUsed) continue

            const value = nums[i];
            const newArray = [...array, value];
            console.log(`newArray: `, newArray);
            frequency[i] = true
            dfs(newArray, length + 1);
            frequency[i] = false

        }
    }

    dfs([], 0)

    return res;
};



const permuteUniqueTest = [
    { nums: [1, 1, 2] }
]

permuteUniqueTest.forEach((t, i) => {
    const res = permuteUnique(t.nums)
    console.log(`res: `, res);
})