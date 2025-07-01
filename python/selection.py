numbers = [42, -17, 3.14, 99, -5, 0, 23, -42, 7.5,
           16, -8.3, 101, -25, 4, 0.5, -11, 38, -9.9, 65, 12]


def selection(items: list) -> list:
    for i in range(len(items)):

        min_index = i
        aux = items[i]

        for j in range(i, len(items)):
            if items[j] < items[min_index]:
                min_index = j

        items[i] = items[min_index]
        items[min_index] = aux

    return items


print("Before selection sort:", numbers)
print("After selection sort:", selection(numbers))
