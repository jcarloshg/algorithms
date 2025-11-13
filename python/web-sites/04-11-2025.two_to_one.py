# two_to_one

# Take 2 strings s1 and s2 including only letters from a to z.
# Return a new sorted string (alphabetical ascending), the longest possible,
# containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

def longest(a1: str, a2: str):

    combinated = a1 + a2

    unique_chars = []
    for char in combinated:
        if char not in unique_chars:
            unique_chars.append(char)

    for i in range(0, len(unique_chars), 1):
        for j in range(0, len(unique_chars), 1):
            if ord(unique_chars[j]) > ord(unique_chars[i]):
                aux = unique_chars[j]
                unique_chars[j] = unique_chars[i]
                unique_chars[i] = aux

    str_to_return = "".join(unique_chars)
    print(str_to_return)
    return str_to_return
    # combined = a1 + a2
    # unique_chars = set(combined)
    # sorted_chars = sorted(unique_chars)
    # result = ''.join(sorted_chars)
    # return result


longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")
