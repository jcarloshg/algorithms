function fourSumCount(
    nums1: number[],
    nums2: number[],
    nums3: number[],
    nums4: number[],
): number {
    const firstSums = new Map<number, number>();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            // console.log(`[${i}][${j}] = ${nums1[i] + nums2[j]}`);
            const sum = -(nums1[i] + nums2[j]);
            firstSums.set(sum, (firstSums.get(sum) || 0) + 1);
        }
    }

    console.log(`firstSums: `, firstSums);
    let total = 0;

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const sum = nums3[i] + nums4[j];
            const freq = firstSums.get(sum) || 0;
            total += freq;
            // console.log(`[${i}][${j}] = ${sum}`);
        }
    }

    return total;
}

console.log(
    `nums1=[1,2],nums2=[-2,-1],nums3=[-1,2],nums4=[0,2]: `,
    fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]),
);
console.log(
    `[1], [-1], [0], [1]:`,
    fourSumCount([1], [-1], [0], [1]),
);
