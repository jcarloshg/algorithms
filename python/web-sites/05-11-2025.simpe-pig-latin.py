# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

def pig_it(text) -> str:
    """
    Convert a string of words to Pig Latin.
    """
    print(f"text {text}")
    words = text.split()
    for i, word in enumerate(words):

        if word == '?' or word == '!':
            continue

        if len(word) == 1:
            word += "ay"
            words[i] = word
            continue

        first_char = word[0]
        word = word[1::] + first_char + "ay"
        words[i] = word

    return " ".join(words)


print(pig_it('Pig latin is cool'), 'igPay atinlay siay oolcay')
print(pig_it('This is my string'), 'hisTay siay ymay tringsay')
