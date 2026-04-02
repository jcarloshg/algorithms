// 40. Combination Sum II
// Medium
// Topics
// premium lock icon
// Companies
// Given a collection of candidate numbers (candidates) and a target number
// (target), find all unique combinations in candidates where the candidate
// numbers sum to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note: The solution set must not contain duplicate combinations.
//
//
//
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
//
// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]
//
// Constraints:
//
// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function combinationSum2(candidates: number[], target: number): number[][] {

    const combinations: number[][] = [];
    const set = new Set<String>();
    const candidatesLength = candidates.length;
    candidates.sort((a, b) => a - b);

    const dfs = (pivot: number, sum: number, array: number[]) => {

        if (sum == target) {
            combinations.push(array);
            return;
        }

        for (let i = pivot; i < candidatesLength; i++) {

            const element = candidates[i];

            const newSum = sum + element;
            if (newSum > target) continue;

            const newArrays = [...array, element]
            const key = newArrays.join("");
            if (set.has(newArrays.join("")))
                continue
            else
                set.add(key);

            dfs(i + 1, newSum, newArrays);
        }
    };

    dfs(0, 0, []);

    return combinations;
}

const combinationSum2Tests = [
    { candidates: [2, 5, 2, 1, 2], target: 5 },
]

combinationSum2Tests.forEach((t, i) => {

    console.log("─────────────────────────────────────");
    console.log(`index: ${i}`);
    console.log("─────────────────────────────────────");

    const res = combinationSum2(t.candidates, t.target);
    console.log(`res: `, res);

});