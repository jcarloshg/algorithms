
# log_message_clustering.py

# The Challenge: "Log Message Clustering" (Group Anagrams)
#
# Context:
# You are aggregating logs from a distributed system. Due to a race condition
# in the logger, the parameters in the log strings are scrambled (e.g., "Error:
# 500, User: 12" might appear as "User: 12, Error: 500" or even scrambled
# characters if it's a raw dump). You assume that if two logs contain the exact
# same characters in any order, they belong to the same "Event Group."
#
# Problem Statement:
# Given an array of strings strs, group the anagrams together. You can return
# the answer in any order.
#
# Examples:
#
# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
#
# Input: strs = [""]
# Output: [[""]]
#
# Input: strs = ["a"]
# Output: [["a"]]
#
# Constraints:
# 1 <= strs.length <= 10^4
# 0 <= strs[i].length <= 100
# strs[i] consists of lowercase English letters.


def groupAnagrams(strs: list[str]) -> list[list[str]]:

    differ = 97
    groups = {}

    for s in strs:

        counter = [""] * 26

        for char in s:
            code = ord(char) - differ
            counter[code] = char

        counter_joined = "".join(counter)
        if groups.get(counter_joined) is None:
            groups[counter_joined] = []

        groups[counter_joined].append(s)

    return [i for i in groups.values()]


res_01 = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "zaz"])
print(f"res_01 {res_01}")
