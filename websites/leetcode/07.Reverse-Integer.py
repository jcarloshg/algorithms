# 7. Reverse Integer
# Attempted
# Medium
# Topics
# premium lock icon
# Companies
# Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
#
# Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
#
#
#
# Example 1:
#
# Input: x = 123
# Output: 321
# Example 2:
#
# Input: x = -123
# Output: -321
# Example 3:
#
# Input: x = 120
# Output: 21
#
#
# Constraints:
#
# -2^31 <= x <= 2^31 - 1

class Solution:
    def reverse(self, x: int) -> int:

        if x < -2**31 or x > 2**31 - 1:
            return 0

        sign = -1 if x < 0 else 1
        x = abs(x)
        reversed_num = 0
        while x > 0:
            reversed_num = (reversed_num * 10) + (x % 10)
            print(f"reversed_num {reversed_num}")
            x //= 10
            print(f"x //= 10 {x}")
        reversed_num *= sign

        return reversed_num


solution = Solution()

in_01 = 123
out_01 = 321
res_01 = solution.reverse(in_01)
print(f"out_01: {out_01}, res_01: {res_01} -> {out_01 == res_01}")
