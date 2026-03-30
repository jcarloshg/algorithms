


function problem02(input: number[]): number {

    let left = 0;
    let rigth = input.length - 1;

    let maxContainer = 0;

    while (left < rigth) {

        const base = rigth - left;
        const hight = Math.min(input[left], input[rigth]);
        const currentContainer = base * hight;

        if (currentContainer > maxContainer) maxContainer = currentContainer;

        if (input[left] < input[rigth])
            left++;
        else
            rigth--;

    }

    return maxContainer;

}

const Input: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const output: number = 49;


const result = problem02(Input)
console.log(`result: `, result);