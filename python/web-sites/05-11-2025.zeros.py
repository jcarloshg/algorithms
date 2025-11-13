# Write an algorithm that takes an array and moves all of
# the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]
# ArraysSortingAlgorithms

def move_zeros(lst):
    lst_no_zeros = list(filter(lambda x: x != 0, lst))
    lst_count_zeros = len(lst) - len(lst_no_zeros)
    result = lst_no_zeros + [0] * lst_count_zeros
    return result


print(move_zeros([1, 0, 1, 2, 0, 1, 3]))  # returns [1, 1, 2, 1, 3, 0, 0]
