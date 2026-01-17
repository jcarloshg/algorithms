# the_trending_hashtags_algorithm.py

from collections import Counter

# The Trending Hashtags Algorithm
#
# Context:
# You are building the "Trending Now" sidebar for a social media platform.
# You have a stream of incoming hashtags(represented as numbers or strings),
# and you need to return the k most frequent elements.
#
# Problem Statement: Given an integer array nums and an integer k, return the
# k most frequent elements. You may return the answer in any order.
#
# Crucial Constraint: Your algorithm's time complexity must be better than
# $O(N \log N)$, where $N$ is the array's size. (This forbids standard sorting).
#
# EXMAPLES:
#
# PlaintextInput: nums = [1, 1, 1, 2, 2, 3], k = 2
# Output: [1, 2]
# Explanation:
# '1' appears 3 times.
# '2' appears 2 times.
# '3' appears 1 time.
# The top 2 are[1, 2].
#
# PlaintextInput: nums = [1], k = 1
# Output: [1]


def topKFrequent(nums: list, k: int) -> list:

    # get frequency
    frequency_num = Counter(nums)
    # create the bucket at the same size of nums
    bucket = [[] for _ in nums]

    # set order according frequency
    for item, freq in frequency_num.items():
        bucket[freq].append(item)

    k_top = []

    for i in range(len(bucket) - 1, 0, -1):

        # valid if the current list has value
        list_in_bucket = bucket[i]
        list_len = len(list_in_bucket)
        if list_len == 0:
            continue

        # get the item and append it into k_top
        item = list_in_bucket[0]
        k_top.append(item)

        if len(k_top) == k:
            return k_top

    return k_top


result_01 = topKFrequent(
    nums=[1, 1, 2, 2, 1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 4], k=3)
print(f"result_01 {result_01}")

result_02 = topKFrequent(nums=[1, 1, 1, 2, 2, 3], k=2)
print(f"result_02 {result_02}")
