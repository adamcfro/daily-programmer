
def hello ():
    """Returns the string 'Hello World!'"""
    return 'Hello World!'


def range_creator ():
    """Returns a list of numbers divisible by 3 and 5 in a range"""
    fizzbuzz = []
    for num in range(1, 101):
        if num % 3 == 0 and num % 5 == 0:
            fizzbuzz.append(num)
    return fizzbuzz


def anagram (str1, str2):
    """Returns True if the string parameters are anagrams of each other"""
    obj = {}
    for char in str1:
        if char in obj:
            obj[char] += 1
        else:
            obj[char] = 1
    for char in str2:
        if char in obj:
            obj[char] -= 1
        else:
            return False
    return True


def remove_letter (string, char):
    """Removes all instances of a specified character and returns the string"""
    string = string.replace(char, '')
    return string


def sum_list (list):
    """Returns a sum of all elements in a list"""
    total = 0
    for elem in list:
        total += elem
    return total