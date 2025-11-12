# This kata is the performance version of Don't give me five by user5036852.

# Your mission, should you accept it, is to return the count of all integers
# in a given range which do not contain the digit 5 (in base 10 representation).
# You are given the start and the end of the integer range.
# The start and the end are both inclusive.

# Examples:

# 1,9 -> 1,2,3,4,6,7,8,9 -> return 8
# 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
# The result may contain fives. ;-)
# The start will always be smaller than the end. Both numbers can be also negative.

# The regions can be very large and there will be a large number of test cases. So brute force solutions will certainly time out!

# Good luck, warrior!

def dont_give_me_five(start, end):
    count = 0
    for num in range(start, end + 1):
        if '5' not in str(num):
            count += 1
    return count


print(dont_give_me_five(-17, 9), 24)
print(dont_give_me_five(1, 9), 8)
print(dont_give_me_five(4, 17), 12)
print(dont_give_me_five(-17, -4), 12)
print(dont_give_me_five(984, 4304), 2449)
print(dont_give_me_five(2313, 2317), 4)
print(dont_give_me_five(-4045, 2575), 4819)
print(dont_give_me_five(-4436, -1429), 2194)
print(dont_give_me_five(-40076, 40076), 326131553237897713)
print(dont_give_me_five(0, 1), 2)
print(dont_give_me_five(5, 15), 9)
print(dont_give_me_five(-5, 4), 9)
print(dont_give_me_five(51, 60), 1)
