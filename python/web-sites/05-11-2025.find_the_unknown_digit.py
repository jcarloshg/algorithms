# find_the_unknown_digit


# To give credit where credit is due: This problem was taken from the
# ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

# You are helping an archaeologist decipher some runes. He knows that this
# ancient society used a Base 10 system, and that they never start a number
# with a leading zero. He's figured out most of the digits as well as a few
# operators, but he needs your help to figure out the rest.

# The professor will give you a simple math expression, of the form

# [number][op][number]=[number]
# He has converted all of the runes he knows into digits. The only operators he
# knows are addition (+),subtraction(-), and multiplication (*), so those are
# the only ones that will appear. Each number will be in the range from -1000000
# to 1000000, and will consist of only the digits 0-9, possibly a leading -,
# and maybe a few ?s. If there are ?s in an expression, they represent a digit
# rune that the professor doesn't know (never an operator, and never a leading -).
# All of the ?s in an expression will represent the same digit (0-9), and it
# won't be one of the other given digits in the expression. No number will
# begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

# Given an expression, figure out the value of the rune represented by the
# question mark. If more than one digit works, give the lowest one. If no digit
# works, well, that's bad news for the professor - it means that he's got some
# of his runes wrong. output -1 in that case.

# Complete the method to solve the expression to find the value of the unknown
# rune. The method takes a string as a paramater repressenting the expression
# and will return an int value representing the unknown rune or -1 if no such
# rune exists.

# def solve_runes(runes):
#     for digit in range(10):
#         str_digit = str(digit)
#         if str_digit in runes:
#             continue

#         candidate = runes.replace('?', str_digit)
#         try:
#             left_side, right_side = candidate.split('=')
#             if left_side.startswith('-0') or right_side.startswith('-0'):
#                 continue
#             left_value = eval(left_side)
#             right_value = int(right_side)
#             if left_value == right_value:
#                 if any(num.startswith('0') and len(num) > 1 for num in left_side.replace('-', ' ').replace('+', ' ').replace('*', ' ').split()) or (right_side.startswith('0') and len(right_side) > 1):
#                     continue
#                 return digit
#         except (SyntaxError, ZeroDivisionError, ValueError):
#             continue
#     return -1


def solve_runes(runes: str):

    for candidate in range(10):
        candidate_str = str(candidate)
        if candidate_str in runes:
            continue

        new_runes = runes.replace('?', candidate_str)
        left_side, right_side = new_runes.split('=')

        # check that the left side has the form [num][op][num]
        left_side_nums = left_side.replace("+", " ").replace("-", " ").replace("*", " ").split()
        for num in left_side_nums:
            if len(num) == 0:
                continue
            if num.startswith('0') and len(num) > 1:
                continue

        # check the right side, it has the form [num]
        if right_side.startswith('0') and len(right_side) > 1:
            continue

        try:
            # eval the lef side
            left_value = int(eval(left_side))
            print(f"left_side: {left_side} = {left_value} ")
            right_value = int(right_side)
            if left_value == right_value:
                return candidate
        except:
            continue

    return -1


print(solve_runes("1+1=?"), 2, "Answer for runes = '1+1=?' ")
print(solve_runes("123*45?=5?088"), 6, "Answer for runes = '123*45?=5?088' ")
print(solve_runes("-5?*-1=5?"), 0, "Answer for runes = '-5?*-1=5?' ")
print(solve_runes("19--45=5?"), -1, "Answer for runes = '19--45=5?' ")
print(solve_runes("??*??=302?"), 5, "Answer for runes = '??*??=302?' ")
print(solve_runes("?*11=??"), 2, "Answer for runes = '?*11=??' ")
print(solve_runes("??*1=??"), 2, "Answer for runes = '??*1=??' ")
