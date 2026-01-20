const getAllOrdedPairs = (nums: number[], target: number) => {
    let left = 0;
    let right = nums.length - 1;

    const pairs: any[] = [];

    while (left < right) {
        console.log("\n");

        const sum = nums[left] + nums[right];
        console.log(`sum: `, sum);

        console.log(`${left} ${right}`);

        if (sum < target) {
            left += 1;
            console.log(`${left} ${right}`);

        }
        if (sum > target) {
            right -= 1;
            console.log(`${left} ${right}`);
        }

        console.log(`nums: `, nums);
        if (sum === target) {

            let leftSpaces = left;
            let rightSpaces = right;

            while (leftSpaces < rightSpaces && nums[leftSpaces] + nums[rightSpaces] == target) {
                while (leftSpaces < rightSpaces && nums[leftSpaces] + nums[rightSpaces] == target) {
                    console.log(`right [${leftSpaces}], [${rightSpaces}] -> ${nums[leftSpaces]} + ${nums[rightSpaces]} = ${nums[leftSpaces] + nums[rightSpaces]}`);
                    pairs.push([nums[leftSpaces], nums[rightSpaces]])
                    // console.log(`right pairs: `, pairs);
                    rightSpaces -= 1
                }
                rightSpaces = right - 1
                leftSpaces += 1

                if (nums[leftSpaces] + nums[rightSpaces] == target) {
                    console.log(`left [${leftSpaces}], [${right}] -> ${nums[leftSpaces]} + ${nums[right]} = ${nums[leftSpaces] + nums[right]}`);
                    pairs.push([nums[leftSpaces], nums[right]])
                }
            }

            left = leftSpaces
            right = rightSpaces

            // console.log("---right---");
            // while (left < rightSpaces && nums[left] + nums[rightSpaces] == target) {
            //     console.log(`[${left}], [${rightSpaces}] -> ${nums[left]} + ${nums[rightSpaces]} = ${nums[left] + nums[rightSpaces]}`);
            //     pairs.push([nums[left], nums[rightSpaces]])
            //     console.log(`right pairs: `, pairs);
            //     rightSpaces -= 1
            // }


            //             console.log("---left---");
            //             while (leftSpaces < right && nums[leftSpaces] + nums[right] == target) {
            //                 console.log(`[${leftSpaces}], [${right}] -> ${nums[leftSpaces]} + ${nums[right]} = ${nums[leftSpaces] + nums[right]}`);
            //                 pairs.push([nums[leftSpaces], nums[right]])
            //                 console.log(`left pairs: `, pairs);
            //                 leftSpaces += 1
            //             }
            //
            //             console.log("---right---");
            //             while (left < rightSpaces && nums[left] + nums[rightSpaces] == target) {
            //                 console.log(`[${left}], [${rightSpaces}] -> ${nums[left]} + ${nums[rightSpaces]} = ${nums[left] + nums[rightSpaces]}`);
            //                 pairs.push([nums[left], nums[rightSpaces]])
            //                 console.log(`right pairs: `, pairs);
            //                 rightSpaces -= 1
            //             }
            //
            //             left = leftSpaces
            //             right = rightSpaces
            //
            //             console.log(`left: `, left);
            //             console.log(`right: `, right);
        }
    }

    return pairs;
};

// const usecases: { list: number[], target: number }[] = [
//     {
//         list: [1, 2, 2, 3, 3, 4, 4, 5, 5],
//         target: 7
//     }
// ]
//
// usecases.forEach(item => {
//
//     console.log(`${item.list}: `, getAllOrdedPairs(item.list, item.target));
//
// });

console.log(
    `[1, 2, 2, 3, 3, 4, 4, 5, 5]`,
    getAllOrdedPairs([1, 2, 2, 2, 3, 3, 4, 4, 5, 5], 7),
);
