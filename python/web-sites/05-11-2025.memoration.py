# A prime number is an integer greater than 1 that is
# only evenly divisible by itself and 1.

# Write your own Primes class with class method Primes.first(n)
# that returns an array of the first n prime numbers.

# For example:

# Primes.first(1)
# # => [2]

# Primes.first(2)
# # => [2, 3]

# Primes.first(5)
# # => [2, 3, 5, 7, 11]

# Primes.first(20).last(5)
# # => [53, 59, 61, 67, 71]
# Note: An inefficient algorithm will time out. Memoization may help.

# More info on primes here.


class Primes:
    @classmethod
    def first(cls, n: int):
        primes = []
        num = 2  # The first prime number

        while len(primes) < n:
            is_prime = True
            for prime in primes:
                print(f"num: {num}, prime {prime}, prime²: {prime * prime}, num: {num % prime}")
                if prime * prime > num:
                    break
                if num % prime == 0:
                    is_prime = False
                    break
            if is_prime:
                print(f"num: {num}, primes: {primes}")
                primes.append(num)
            num += 1

        return primes


print(Primes.first(1), [2])
print(Primes.first(2), [2, 3])
print(Primes.first(5), [2, 3, 5, 7, 11])
print(Primes.first(20)[-5:], [53, 59, 61, 67, 71])
print(Primes.first(100)[99], 541)
print(Primes.first(80)[79], 409)
