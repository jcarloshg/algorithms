

function problem01(nums: number[], k: number): number[] {

    const frequency = new Map<number, number>()

    nums.forEach((n) => {
        frequency.set(n, (frequency.get(n) || 0) + 1);
    });

    const sorted = Array.from(frequency.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(([num]) => num);
}


const input_01: number[] = [1, 1, 1, 2, 2, 3], k_01 = 2;
const output_01: number[] = [1, 2];
const res_01 = problem01(input_01, k_01);
console.log(`res_01: `, res_01);

const input_02: number[] = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2], k_02 = 2;
const output_02: number[] = [1, 2];
const res_02 = problem01(input_02, k_02);
console.log(`res_02: `, res_02);