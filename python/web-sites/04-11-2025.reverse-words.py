# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

def reverse_words(text):
    words = text.split(' ')
    reversed_words = [word[::-1]
                      for word in words] 
    return ' '.join(reversed_words)


# Test the function with example input
print(reverse_words("This is an example!"))
# Test the function with double spaces
print(reverse_words("double  spaces"))
