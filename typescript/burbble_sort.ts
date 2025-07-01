const bubble_sort = (arrayNum: number[]) => {
  for (let index = 0; index < arrayNum.length; index++) {
    let swapped = false;

    for (let j = 0; j < arrayNum.length - index - 1; j++) {
      const current = arrayNum[j];
      const next = arrayNum[j + 1];
      if (current > next) {
        arrayNum[j] = next;
        arrayNum[j + 1] = current;
        swapped = true;
        console.log(`[bubble_sort] -> Swapped: ${current} with ${next}`);
      }
    }

    console.log(`[bubble_sort] -> state`, arrayNum);

    if (!swapped) {
      console.log(`[bubble_sort] -> No swaps, array is sorted.`);
      break;
    }
  }

  return arrayNum;
};

const main = () => {
  const randomNum = [5, 3, 8, 4, 2, 1, 7, 6, 9, 0, 10, 11, 12, 13, 14, 15];
  console.log(`[bubble_sort] -> Initial array`, randomNum);
  const randomNumSorted = bubble_sort(randomNum);
  console.log(`[bubble_sort] -> Sorted array`, randomNumSorted);
};

main();
