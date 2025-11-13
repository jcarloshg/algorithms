

def mergeSort(nums: list[int]) -> list[int]:

    if len(nums) == 1:
        return nums

    length = len(nums)
    middle = length // 2
    partition_left = nums[:middle]
    partition_right = nums[middle:]

    result = merge(mergeSort(partition_left), mergeSort(partition_right))

    return result


def merge(left: list[int], right: list[int]) -> list[int]:

    left_len = len(left)
    left_pivot = 0
    right_len = len(right)
    right_pivot = 0

    result = []

    while left_pivot < left_len and right_pivot < right_len:
        if left[left_pivot] < right[right_pivot]:
            result.append(left[left_pivot])
            left_pivot += 1
        else:
            result.append(right[right_pivot])
            right_pivot += 1

    # Add any remaining elements from left or right
    result.extend(left[left_pivot:])
    result.extend(right[right_pivot:])

    return result


numbers = [
    834, 492, 123, 56, 789, 234, 678, 901, 345, 12,
    456, 789, 234, 567, 890, 123, 456, 789, 234, 567,
    890, 123, 456, 789, 234, 567, 890, 123, 456, 789,
    234, 567, 890, 123, 456, 789, 234, 567, 890, 123,
    456, 789, 234, 567, 890, 123, 456, 789, 234, 567,
    890, 123, 456, 789, 234, 567, 890, 123, 456, 789,
    234, 567, 890, 123, 456, 789, 234, 567, 890, 123,
    456, 789, 234, 567, 890, 123, 456, 789, 234, 567,
    890, 123, 456, 789, 234, 567, 890, 123, 456, 789,
    234, 567, 890, 123, 456, 789, 234, 567, 890, 123
]

# numbers = [834, 492, 123, 56, 789, 234, 678, 901]


print(f"result {mergeSort(numbers)}")
