# **Context: **
# You are working on a network monitoring tool that analyzes a live stream of
# data packets. Due to a hardware glitch, sometimes a sequence of packets gets
# corrupted. A corrupted sequence is identified as a contiguous block of packets
# where the sum of their signal strengths is **greater than or equal to ** a
# danger threshold.
#
# Your task is to find the ** smallest ** number of contiguous packets that
# could be causing this glitch.
#
# **Problem Statement: **
# Given an array of positive integers `packets` (representing signal strengths)
# and a positive integer `threshold`, return the ** minimal length ** of a **
# contiguous subarray ** of which the sum is greater than or equal to `threshold`.
# If there is no such subarray, return 0.
#
# # Examples:
#
# **Example 1: **
#
# ```text
# Input: threshold = 7, packets = [2, 3, 1, 2, 4, 3]
# Output: 2
# Explanation: The subarray[4, 3] has a sum of 7, which is >= 7. Its length is 2.
# Another valid subarray is [2, 4, 3](sum 9), but its length is 3. The minimal length is 2.
# ```
#
# **Example 2: **
#
# ```text
# Input: threshold = 4, packets = [1, 4, 4]
# Output: 1
# Explanation: The subarray[4] has a sum of 4. Length is 1.
# ```
#
# **Example 3: **
#
# ```text
# Input: threshold = 11, packets = [1, 1, 1, 1, 1, 1, 1, 1]
# Output: 0
# Explanation: No contiguous subarray sums up to 11 or more.
# ```


# def min_packet_glitch_length(packets: list[int], threshold: int) -> int:
#
#     left = 0
#     curr_sum = 0
#     min_len = float('inf')
#
#     for right in range(len(packets)):
#         curr_sum += packets[right]
#         # Shrink window while condition is met
#         print(f"right {right}")
#         while curr_sum >= threshold:
#             min_len = min(min_len, right - left + 1)
#             curr_sum -= packets[left]
#             left += 1
#             print(f"left {left}")
#         print("\n")
#
#     return min_len if min_len != float('inf') else 0

def min_packet_glitch_length(packets: list[int], threshold: int):

    it_left = 0
    ite_right = 0
    total_sum = 0
    min_len = len(packets)

    min_left_index = 0
    min_right_index = 0

    for ite_right in range(len(packets)):

        right = ite_right
        total_sum += packets[ite_right]

        while total_sum >= threshold:

            diff_left_right = ite_right - it_left + 1
            if diff_left_right < min_len:
                min_left_index = it_left
                min_right_index = right

            total_sum -= packets[it_left]
            it_left += 1

    return {
        "left_index": min_left_index,
        "right_index": min_right_index,
        "sub": packets[min_left_index:min_right_index+1]
    }


output = min_packet_glitch_length(packets=[2, 3, 1, 2, 4, 3], threshold=7)
print(output)
