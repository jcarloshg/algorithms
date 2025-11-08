# Given a string s, return the longest palindromic substring in s.

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"


# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters.

class Solution:
    def longestPalindrome(self, s: str) -> str:

        longest_palindrome_str = ""

        for i in range(len(s)):
            for j in range(i+1, len(s)):
                
                word = s[i:j]
                reversed_word = word[::-1]
                
                if not word == reversed_word:
                    continue
                
                if len(longest_palindrome_str) < len(word):
                    print(f"{word} - {reversed_word}")
                    longest_palindrome_str = word

        return longest_palindrome_str


solution = Solution()
print(solution.longestPalindrome("babad"))
print(solution.longestPalindrome("cbbd"))
print(solution.longestPalindrome("carlos"))
