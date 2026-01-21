def longestConsecutive(nums):
    nums = set(nums)
    best = 0
    for x in nums:
        print(f"x {x}")
        if x - 1 not in nums:
            y = x + 1
            while y in nums:
                y += 1
            best = max(best, y - x)
    return best


print(f"long {longestConsecutive(nums=[0, 3, 7, 2, 5, 8, 4, 6, 0, 1])}")
