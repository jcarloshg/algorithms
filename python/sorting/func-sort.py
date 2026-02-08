print(f"="*60)
print(f"Simple")
print(f"="*60)

numbers = [5, 2, 8, 1, 9]
numbers.sort()
print(numbers)  # Output: [1, 2, 5, 8, 9]

print(f"="*60)
print(f"Reserve")
print(f"="*60)

numbers_01 = [5, 2, 8, 1, 9]

# Ascending (default)
numbers_01.sort()
print(numbers_01)  # [1, 2, 5, 8, 9]

# Descending
numbers_01.sort(reverse=True)
print(numbers_01)  # [9, 8, 5, 2, 1]


print(f"="*60)
print(f"common keys")
print(f"="*60)

print(">> words.sort(key=len)")
words = ["python", "is", "awesome", "fun"]
words.sort(key=len)
print(words)
# ['is', 'fun', 'python', 'awesome']

# Uppercase comes before lowercase in ASCII
print(">> key=str.lower")
names = ["alice", "Bob", "Charlie", "david"]
names.sort()  # Wrong: ['Bob', 'Charlie', 'alice', 'david']
names.sort(key=str.lower)  # Correct
print(names)
# ['alice', 'Bob', 'Charlie', 'david']

print(f"="*60)
print(f"sort tuples")
print(f"="*60)

# List of (name, age) tuples
students = [("Alice", 25), ("Bob", 20), ("Charlie", 23)]
students.sort(key=lambda students: students[1])
print(f"students {students}")
# [('Bob', 20), ('Charlie', 23), ('Alice', 25)]

print(f"="*60)
print(f"Mutiple Sort Criteria")
print(f"="*60)

# Sort by age, then by name if ages are equal
students = [("Alice", 25), ("Bob", 20), ("Charlie", 25)]
students.sort(key=lambda x: (x[1], x[0]))
print(students)
# [('Bob', 20), ('Alice', 25), ('Charlie', 25)]

# Given this list of dictionaries:
movies = [
    {"title": "Inception", "year": 2010, "rating": 8.8},
    {"title": "The Matrix", "year": 1999, "rating": 8.7},
    {"title": "Interstellar", "year": 2014, "rating": 8.6},
    {"title": "The Dark Knight", "year": 2008, "rating": 9.0}
]

movies.sort(key=lambda m: (-m["rating"], -m["year"]))
for m in movies:
    print(f"title: {m["title"]}, year: {m["year"]}, rating: {m["rating"]}")
