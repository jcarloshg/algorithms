// Frequency Buckets

// 1010.pairs_of_songs_with_total_durations_divisible_by60

// Return the number of pairs of songs for which their total duration in
// seconds is divisible by 60. Formally, we want the number of indices i,
// j such that i < j with (time[i] + time[j]) % 60 == 0.
// 
// EXAMPLES:
//
// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// 
// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.
//  
// 
// Constraints:
// 
// 1 <= time.length <= 6 * 104
// 1 <= time[i] <= 500

// function numPairsDivisibleBy60(time: number[]): number {
//     const remainders: number[] = new Array(60).fill(0);
//     let total = 0;
// 
//     time.forEach((curren_time) => {
//         const remainder = curren_time % 60;
//         const needed_rem = (60 - remainder) % 60;
//         total += remainders[needed_rem] || 0;
//         remainders[remainder] += 1;
//         // console.log(`remainders: `, remainders);
//     });
// 
//     return total;
// }
function numPairsDivisibleBy60(time: number[]): number {
    const mapRemainders: number[] = new Array(60).fill(0);
    let totalPairs = 0;

    time.forEach(t => {
        const remainder = t % 60;
        const complement = remainder === 0 ? 0 : 60 - remainder;
        totalPairs += mapRemainders[complement]
        mapRemainders[remainder] += 1
    });

    return totalPairs
}

// console.log(
//     numPairsDivisibleBy60([
//         10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
//     ]),
// );
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));

