// 215. Kth Largest Element in an Array
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.
// 
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// 
// Can you solve it without sorting?
// 
//  
// 
// Example 1:
// 
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:
// 
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
//  
// 
// Constraints:
// 
// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

function findKthLargest(nums: number[], k: number): number {
    const minHeap: number[] = [];

    const swap = (i: number, j: number) => {
        [minHeap[i], minHeap[j]] = [minHeap[j], minHeap[i]];
    };

    const bubbleUp = (idx: number) => {
        console.log(`before ${minHeap}`);

        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);

            console.log({ idx, parent });

            if (minHeap[idx] < minHeap[parent]) {
                swap(idx, parent);
                idx = parent;
            } else break;

            console.log(`meanwhile ${minHeap}`);
        }

        console.log(`after ${minHeap}\n`);
    };

    const bubbleDown = (idx: number) => {
        while (true) {
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            let smallest = idx;
            if (left < minHeap.length && minHeap[left] < minHeap[smallest]) smallest = left;
            if (right < minHeap.length && minHeap[right] < minHeap[smallest]) smallest = right;
            if (smallest !== idx) {
                swap(idx, smallest);
                idx = smallest;
            } else break;
        }
    };

    const push = (val: number) => {
        minHeap.push(val);
        bubbleUp(minHeap.length - 1);
    };

    const pop = () => {
        const min = minHeap[0];
        const last = minHeap.pop()!;
        if (minHeap.length > 0) {
            minHeap[0] = last;
            bubbleDown(0);
        }
        return min;
    };

    for (const num of nums) {
        push(num);
        if (minHeap.length > k) pop();
    }

    return minHeap[0];
}

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));