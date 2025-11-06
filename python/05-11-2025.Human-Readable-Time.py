# Write a function, which takes a non-negative integer (seconds)
# as input and returns the time in a human-readable format (HH:MM:SS)

# HH = hours, padded to 2 digits, range: 00 - 99
# MM = minutes, padded to 2 digits, range: 00 - 59
# SS = seconds, padded to 2 digits, range: 00 - 59
# The maximum time never exceeds 359999 (99:59:59)

# You can find some examples in the test fixtures.

def make_readable(seconds):
    hours = seconds // 3600
    remaining = seconds % 3600
    
    minutes = remaining // 60
    seconds_res = remaining % 60
    
    return f"{hours:02d}:{minutes:02d}:{seconds_res:02d}"


print(make_readable(0), "00:00:00")
print(make_readable(59), "00:00:59")
print(make_readable(60), "00:01:00")
print(make_readable(3599), "00:59:59")
print(make_readable(3600), "01:00:00")
print(make_readable(86399), "23:59:59")
print(make_readable(86400), "24:00:00")
print(make_readable(359999), "99:59:59")