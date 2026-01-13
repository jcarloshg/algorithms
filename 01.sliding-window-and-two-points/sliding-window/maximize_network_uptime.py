# maximize_network_uptime.py
# The Challenge: "Maximize Network Uptime"

# Context: You are analyzing a binary stream of server status logs where 1
# represents "Uptime" (Normal) and 0 represents "Downtime" (Error).
# Your system has an auto-recovery mechanism(a "budget") that can instantly
# patch up to k downtime events, effectively flipping them from 0 to 1.
#
# Problem Statement: Given an array of binary integers status and an integer k,
# return the maximum number of consecutive 1s in the array if you can flip
# at most k 0s.

# EXAMPLES

# Input: status = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
# Output: 6
# Explanation:
# We can flip the 0s at indices 4 and 5 (0-indexed).
# The array becomes [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0].
# The longest sequence of 1s is from index 4 to 9, length 6.

# Input: status = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
# Output: 10
# Explanation:
# We can patch the 0s inside the stream to connect two islands of 1s.
# Longest subarray is [1,1,1,0,1,1,1,1]. (Indices 6 to 13), containing 8 ones and 2 zeros (which fits in k=3).
# Wait, actually [0,0,1,1,1,1,1,1,1,1,1,1,0...] if we flip indices 4,5,9.
# (The prompt is to find the MAX length).

def longestOnes(status: list[int], k: int):
    left: int = 0  # index left
    max_len: int = 0  # max value is len(status)
    counter_zeros: int = 0  # max value is k

    min_index_left: int = 0
    min_index_right: int = 0

    for right in range(len(status)):

        if status[right] == 0:
            counter_zeros += 1

        while counter_zeros > k:
            if status[left] == 0:
                min_index_left = left
                min_index_right = right
                counter_zeros -= 1
            left += 1

    # (right - left) + 1 -> we are working with indexes
    max_len = max(max_len, (right - left) + 1)
    print(
        f"min index left {min_index_left}, min index right {min_index_right}"
    )

    status = [
        1 if min_index_left <= i < min_index_right else status[i]
        for i in range(len(status))
    ]

    return {
        "min_index_left": min_index_left,
        "min_index_right": min_index_right,
        "status": status
    }


status_01 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
result_01 = longestOnes(status=status_01, k=2)
print(f"status_01 {status_01}")
print(result_01)


status_02 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
result_02 = longestOnes(status=status_02, k=3)
print(f"status_02 {status_02}")
print(f"result_02 {result_02}")
