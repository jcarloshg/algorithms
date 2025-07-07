const numbers = [42, 7, 19, 3, 88, 15, 27, 61, 5, 34];

export const insertionSort = (nums: number[]): number[] => {

    for (let i = 0; i < nums.length; i++) {

        let pivot = i;
        if (pivot === 0) continue;

        console.log(`[number to comparingkk] -> `, nums[pivot]);

        while (pivot >= 0) {

            if (nums[pivot] < nums[pivot - 1]) {
                // Swap the elements
                const temp = nums[pivot];
                nums[pivot] = nums[pivot - 1];
                nums[pivot - 1] = temp;

                console.log(`[nums] -> `, nums)
            } else {
                // the element is in the right place
                break;
            }

            // Move the pivot left
            pivot--;

        }

        console.log(`============================================================`);

    }

    return nums;
}

console.log(`[before sorting] -> `, numbers);
console.log(`[after sorting] -> `, insertionSort(numbers));