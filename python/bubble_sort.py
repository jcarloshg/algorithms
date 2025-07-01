def bubble_sort(arr):
    length = len(arr)
    for i in range(length):
        print(f"Pass {i + 1}:")
        swap = False
        for j in range(0, length - i - 1):
            if arr[j] > arr[j+1]:
                swap = True
                arr[j], arr[j+1] = arr[j+1], arr[j]

            if swap:
                print(f"Swapping {arr[j+1]} and {arr[j]}")

        print("Current array state:", arr)

        if not swap:
            break

    return arr


if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", arr)
    sorted_arr = bubble_sort(arr)
    # print("Sorted array:", sorted_arr)
