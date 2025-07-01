const items = [42, 8, 15, 23, -3, 99, 67, 11, -45, 30, 7, 19, 88, -12, 54, 3, 26, -37, 61, 14];

export const selection = (list: number[]): number[] => {
    for (let i = 0; i < list.length; i++) {

        let min = list[i];
        let minIndex = i;
        const aux = list[i];

        for (let j = i; j < list.length; j++) {

            const current = list[j];

            if (current < min) {
                min = current;
                minIndex = j;
            }

        }

        list[i] = list[minIndex];
        list[minIndex] = aux;

    }

    return list;
}

console.log(`[selection(numbers)] -> `, selection(items))