# For a given positive integer convert it into its English representation.
# All words are lower case and are separated with one space.
# No trailing spaces are allowed.

# To keep it simple, hyphens and the writing of the word 'and' both
# aren't enforced. (But if you are looking for some extra challenge,
# such an output will pass the tests.)

# Large number reference: http://en.wikipedia.org/wiki/Names_of_large_numbers
# (U.S., Canada and modern British)

# Input range: 1 -> 10**26 (10**16 for JS)

# Examples:

def int_to_english(n):

    num_groups = []
    s = str(n)

    # Split the number string into groups of 3 digits from the right
    num_groups = [int(s[max(i - 3, 0):i]) for i in range(len(s), 0, -3)]

    labels_for_units = ["zero", "one", "two", "three",
                        "four", "five", "six", "seven", "eight", "nine"]
    labels_teens = ["ten", "eleven", "twelve", "thirteen", "fourteen",
                    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    labels_for_tens = ["", "", "twenty", "thirty", "forty",
                       "fifty", "sixty", "seventy", "eighty", "ninety"]

    labels_power_ten = ["", "thousand", "million", "billion", "trillion", "quadrillion",
                        "quintillion", "sextillion", "septillion"]
    pivot_labels_power_ten = 0

    words = []
    for num in num_groups:

        aux_words = []

        nums_str = str(num)
        if len(nums_str) == 1:
            nums_str = "00"+nums_str
        if len(nums_str) == 2:
            nums_str = "0"+nums_str

        nums = list(str(nums_str))
        nums = [int(i) for i in nums]

        unit_for_hundred = nums[0]
        if unit_for_hundred >= 1:
            label = f"{labels_for_units[unit_for_hundred]} hundred".strip()
            aux_words.append(label)

        decades_units = nums[1]
        units = nums[2]

        decades = int(f"{decades_units}{units}")

        if decades >= 10 and decades <= 19:
            # get position for teens, for 15 -> 5, for 13 -> 3
            units_for_decades_str = str(decades)
            position = list(units_for_decades_str)[1]
            position_int = int(position)
            # get the specific number, e.g. 14 -> fourteen
            label = labels_teens[position_int]
            aux_words.append(label)

        if decades_units >= 2:
            label = labels_for_tens[decades_units]
            aux_words.append(label)

        if units >= 1 and (decades_units == 0 or decades_units >= 2):
            label = labels_for_units[units]
            aux_words.append(label)

        label = " ".join(aux_words).strip()

        if pivot_labels_power_ten >= 1 and len(label) > 1:
            label = f"{label} {labels_power_ten[pivot_labels_power_ten]}"
        pivot_labels_power_ten += 1

        words.insert(0, label)

    print(f"words {words}")
    num_str = " ".join(words).strip()
    return num_str


print(int_to_english(2856317000290348))
