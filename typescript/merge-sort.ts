// const numbers = [42, 7, 19, 3, 19, 88, 5, 15, 27, 61, 15, 34];

// export const mergeSort = (items: number[]): number[] => {

//     return []
// }

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export const mergeSort = (items: number[]): number[] => {
    if (items.length === 1) {
        return items;
    }

    // Split Array in into right and left
    const length = items.length;
    const middle = Math.floor(length / 2);
    const left = items.slice(0, middle);
    const right = items.slice(middle);
    // console.log(`// ============================================================`);
    console.log(`// functin merge-sort [${left}] | [${right}] `);
    // console.log(`// ============================================================`);

    return merge(mergeSort(left), mergeSort(right));
}

export const merge = (left: number[], right: number[]): number[] => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    console.log(`// merge [${left}] | [${right}] `);

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    const result_join = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    console.log(`[result_join] -> `, result_join)
    return result_join;
}

const answer = mergeSort(numbers);
console.log(answer);