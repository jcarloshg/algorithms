# The main idea is to count all the occurring characters in a string.
# If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

# What if the string is empty? Then the result should be empty object literal, {}.

def count(s):
    counts = {}
    for char in s:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    return counts


print(count('aba'), {'a': 2, 'b': 1})
print(count(''), {})
print(count('aa'), {'a': 2})
print(count('aabb'), {'b': 2, 'a': 2})
