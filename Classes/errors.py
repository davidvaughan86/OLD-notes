try:
    if 2 > "3":
        print('Never Prints')
except TypeError:
    print("the program doesn't crash now")


try:
    impossible = 1000/0
except TypeError:
    print("it does not get here")
except ZeroDivisionError:
    print("you cannot devide by 0")

if 1 > "2":
     print("true")

name = input("What is your name?")
print(name)