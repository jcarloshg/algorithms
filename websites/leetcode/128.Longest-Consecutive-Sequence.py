"""
Docstring for websites.leetcode.128.Longest-Consecutive-Sequence

 128. Longest Consecutive Sequence
 https:leetcode.com/problems/longest-consecutive-sequence/description/

 CONTEXT:
 Given an unsorted array of integers nums, return the length of the longest
 consecutive elements sequence.

 You must write an algorithm that runs in O(n) time.

 EXAMPLES:
 Input: nums = [100,4,200,1,3,2]
 Output: 4
 Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 Therefore its length is 4.

 Input: nums = [0,3,7,2,5,8,4,6,0,1]
 Output: 9

 Input: nums = [1,0,1,2]
 Output: 3

 Constraints:
 0 <= nums.length <= 105
 -109 <= nums[i] <= 109

"""


def longest_consecutive(nums: list) -> int:
    """
    Docstring for longest_consecutive

    :param nums: Description
    :type nums: list
    :return: Description
    :rtype: int
    """

    unique_numbers: set = set(nums)
    longest = 0
    print(f"unique_numbers {unique_numbers}")

    for unique in unique_numbers:
        next_num = unique + 1
        if next_num in unique_numbers:

            local_longest = 1
            exists_next_num = True

            while exists_next_num == True:
                next_num += 1
                exists_next_num = True if next_num in unique_numbers else False
                local_longest += 1

            longest = max(longest, local_longest)

    return longest


intput_01 = [100, 4, 200, 1, 3, 2]
print(f"intput_01 {intput_01} {longest_consecutive(intput_01)}")

input_02 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
print(f"input_02 {input_02} {longest_consecutive(input_02)}")
