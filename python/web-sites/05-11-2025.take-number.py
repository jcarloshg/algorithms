# The number  89 is the first integer with more than one 
# digit that fulfills the property partially introduced 
# in the title of this kata. What's the use of saying 
# "Eureka"? Because this sum gives the same number: 
# 89 = 8 ^ 1 + 9 ^ 2
 
# The next number in having this property is: 135
# 135 = 1 ^ 1. +  3 ^ 2  +  5 ^ 3

# 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
# 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]


def sum_dig_pow(a, b): # range(a, b + 1) will be studied by the function
    result = []
    for number in range(a, b + 1):
        str_num = str(number)
        total = sum(int(digit) ** (index + 1) for index, digit in enumerate(str_num))
        if total == number:
            result.append(number)
    return result