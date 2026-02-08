"""
explanation of lambdas
"""

from functools import reduce
print(f"="*60)
print(f"simple lambdas")
print(f"="*60)

# No arguments
# greet = lambda: "Hello, World!"


def greet(): return "Hello, World!"


print(greet())  # Hello, World!

# One argument
# square = lambda x: x ** 2


def square(x): return x ** 2


print(square(5))  # 25

# Two arguments
# multiply = lambda x, y: x * y


def multiply(x, y): return x * y


print(multiply(3, 4))  # 12

# Three arguments
# volume = lambda l, w, h: l * w * h


def volume(l, w, h): return l * w * h


print(volume(2, 3, 4))  # 24

print(f"="*60)
print(f"using in sort && sorted")
print(f"="*60)

pairs = [(1, 'one'), (3, 'three'), (2, 'two')]
pairs.sort(key=lambda p: p[1])
print(f"pairs {pairs}")  # [(1, 'one'), (3, 'three'), (2, 'two')]

words = ['apple', 'banana', 'cherry']
words.sort(key=lambda w: w[-1])
print(f"words {words}")  # ['banana', 'apple', 'cherry']

print(f"="*60)
print(f"using in maps")
print(f"="*60)

numbers = [1, 2, 3, 4, 5]
squere = list(
    map(
        lambda n: n*n,
        numbers
    )
)
num_string = list(
    map(
        lambda n: str(n),
        numbers
    )
)
print(f"numbers {numbers}")  # [1, 2, 3, 4, 5]
print(f"squere {squere}")  # [1, 4, 9, 16, 25]
print(f"num_string {num_string}")  # ['1', '2', '3', '4', '5']


print(f"="*60)
print(f"adbance tecniques")
print(f"="*60)


numbers = [1, 2, 3, 4, 5]

# Sum all numbers
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

# Find maximum
maximum = reduce(lambda x, y: x if x > y else y, numbers)
print(maximum)  # 5

# classify = lambda x: "P" if x > 0 else "N" if x < 0 else "Z"


def classify(x): return "P" if x > 0 else "N" if x < 0 else "Z"


print(f"classify(5) = {classify(5)}")  # classify(5) = P
print(f"classify(0) = {classify(0)}")  # classify(0) = Z
print(f"classify(-1) = {classify(-1)}")  # classify(-1) = N

# default values
# power = lambda x, n=2: x**n


def power(x, n=2): return x**n


print(f"power(5) = {power(5)}")  # power(5) = 25

print(f"="*60)
print(f"Excercises")
print(f"="*60)


# Exercise 1: Filter and transform
print("Exercise 1: Filter and transform")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Get squares of only even numbers using lambda with map() and filter()
# Your solution:
num_even = filter(lambda n: n % 2 == 0, numbers)
num_square = map(lambda n: n ** 2, num_even)
num_square_list = list(num_square)
print(f"num_square_list {num_square_list}")


# Exercise 2: Sort complex data
print("Exercise 2: Sort complex data")
transactions = [
    {"id": 1, "amount": 100, "date": "2024-01-15"},
    {"id": 2, "amount": 200, "date": "2024-01-10"},
    {"id": 3, "amount": 150, "date": "2024-01-20"}
]
# Sort by date (oldest first) using lambda
# Your solution:
transactions.sort(key=lambda t: t["date"])
for t in transactions:
    print(f"[id:{t["id"]}] amound: {t["amount"]}, date: {t["date"]}")


# Exercise 3: String manipulation
print("Exercise 3: String manipulation")
words = ["Python", "is", "AWESOME", "and", "FUN"]
# Convert all to lowercase and sort by length using lambda
# Your solution:
words_lower = map(lambda w: w.lower(), words)
# a.sort(key=len)
words_worted = sorted(
    words_lower,
    key=lambda w: len(w)
)
print(f"words_worted {words_worted}")
