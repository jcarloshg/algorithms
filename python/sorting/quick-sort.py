def quicksort(nums: list, low: int, high: int):
    if low < high:
        partition_index = sort_partition(nums, low, high)
        quicksort(nums, low, partition_index - 1)
        quicksort(nums, partition_index + 1, high)
    return nums


def sort_partition(nums: list, low_index: int, high_index: int) -> int:

    pivot_value = nums[high_index]
    partition_index = low_index

    for j in range(low_index, high_index):
        if nums[j] < pivot_value:
            temp = nums[partition_index]
            nums[partition_index] = nums[j]
            nums[j] = temp
            partition_index += 1

    temp = nums[high_index]
    nums[high_index] = nums[partition_index]
    nums[partition_index] = temp

    return partition_index


# nums = [24, 50, 35, 73, 79, 80, 79, 58, 14, 40,
#         22, 34, 75, 13, 7, 15, 27, 82, 8, 65,
#         64, 22, 49, 89, 15, 25, 80, 97, 10]
nums = [24, 99, 35, 73, 79, 1, 79, 58, 2, 40]

print(f"nums            {nums}")
print(f"quicksort {quicksort(nums, 0, len(nums) - 1)}")
