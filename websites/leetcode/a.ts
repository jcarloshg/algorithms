

function numPairsDivisibleBy60(time: number[]): number {

    const remainders = new Map<number, number>()

    for (let i = 0; i < time.length; i++) {

        const remainder = time[i] % 60;
        const complement = (60 - time[i]) % 60

        // console.log(`60 - time[i]: `, 60 - time[i]);
        console.log(`remainder: `, time[i], remainder, time[i] / 60);
        // console.log(`complement: `, complement);

        console.log("\n");
        
    }

    return 0;
};

console.log(`[30, 20, 150, 100, 40] ->  `, numPairsDivisibleBy60([30, 20, 150, 100, 40]));