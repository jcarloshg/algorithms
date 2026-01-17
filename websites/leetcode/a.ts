

function numPairsDivisibleBy60(time: number[]): number {

    const remainders = new Map<number, number>()

    time.forEach(curren_time => {
        const remainder = curren_time % 60
        console.log(`remainder: `, curren_time % 60, curren_time / 60, curren_time);
    });

    return 0;
};

console.log(`[10, 20, 30, 40, 50, 60, 80, 90, 100] ->  `, numPairsDivisibleBy60([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

console.log(5 % 6, 5 / 6, 50 % 6);
