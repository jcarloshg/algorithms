// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {

    const nums_set = new Set(nums);
    console.log(`nums_set: `, nums_set);
    let longestCounter = 0;

    nums_set.forEach(
        (currentNum) => {
            // counters
            let consecutiveCounter = 1; // for this loop
            let nextNum = currentNum + 1;
            // flag if exist the next num
            let existNextNum = nums_set.has(nextNum);

            while (existNextNum === true) {
                // update the flags
                consecutiveCounter += 1;
                nextNum += 1;
                existNextNum = nums_set.has(nextNum);
                // update new max consecutive
                longestCounter = consecutiveCounter > longestCounter
                    ? consecutiveCounter
                    : longestCounter
            }

        }
    )

    return longestCounter;
};

const result01 = longestConsecutive([100, 4, 200, 1, 3, 2])
console.log(`[100, 4, 200, 1, 3, 2] ->      `, result01);

const result02 = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
console.log(`[0,3,7,2,5,8,4,6,0,1] ->       `, result02);