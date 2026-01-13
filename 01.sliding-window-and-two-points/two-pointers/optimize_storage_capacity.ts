// optimize_storage_capacity.ts

// The Challenge: "Optimize Storage Capacity" (Container With Most Water)
//
// Context: 
// You are designing a liquid storage system using a series of vertical 
// partitions of varying heights. You need to select two partitions to act as
// the outer walls of a storage tank such that the tank can hold the 
// maximum amount of liquid. (Note: The liquid level is limited by the shorter
// of the two walls, and the width is the distance between them).
// 
// Problem Statement: 
// Given an integer array height of length n, where height[i] represents the
// height of a vertical line at position i. Find two lines that together with
// the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// EXAMPLES

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: 
// The max area is formed by the line at index 1 (height 8) and index 8 (height 7).
// Width = 8 - 1 = 7.
// Height = min(8, 7) = 7.
// Area = 7 * 7 = 49.

// Input: height = [1, 1]
// Output: 1

const maxArea = (heights: number[]): Object => {

    let left_point = 0
    let right_point = heights.length - 1;

    let max_left_point = 0;
    let max_right_point = heights.length - 1;
    let max_volumen = 0

    while (left_point < right_point) {

        const left_height = heights[left_point];
        const right_height = heights[right_point];
        // console.log(`left_height: ${left_height}, left_point ${left_point}`);
        // console.log(`right_height: ${right_height} right_point ${right_point}`);

        let current_min_heigh = left_height > right_height ? right_height : left_height;
        if (current_min_heigh == 0) continue;
        // console.log(`current_max_heigh: `, current_max_heigh);

        let current_max_vol = current_min_heigh ** 2;
        // console.log(`current_max_vol: `, current_max_vol);

        for (let i = left_point + 1; i < right_point; i++) {
            const new_current_value = current_max_vol - heights[i];
            console.log(`[${i}]: ${current_max_vol} - ${heights[i]} = ${new_current_value}`);
            current_max_vol = new_current_value;
            if (current_max_vol < 0) break
        }

        if (current_max_vol > max_volumen) {
            max_left_point = left_point;
            max_right_point = right_point;
            max_volumen = current_max_vol;
        }

        // console.log(`-> max_volumen: `, max_volumen);

        left_point > right_point
            ? right_point--
            : left_point++

        // console.log("\n");

    }

    return {
        left_index: max_left_point,
        right_index: max_right_point,
        max_vol: max_volumen,
        sub_array: heights.slice(max_left_point, max_right_point + 1)
    };

}

const heights_01 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result_01 = maxArea(heights_01);
console.log(`heights_01: `, heights_01);
console.log(`result_01: `, result_01);