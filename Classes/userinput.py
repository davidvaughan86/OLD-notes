greeting = "Hello %s, it is very nice to meet you and your friend %s "

name_of_user = input("what is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 0:
    name_of_friend = input("what is your friend's name? ")  
    print(greeting % (name_of_user, name_of_friend))
else:
    print(" Ok, ill ask you later")


name_of_user = input("what is your knickname\n")
print("Hey what up %s, how you doin?" % name_of_user)

name_of_user = input("what is your government name?\n")
last_name_of_user = input("what is your surname? \n")
print("hello, %s %s, how you doin today?" % (name_of_user, last_name_of_user))



age = int(input(" how old are you?\n"))
if age == 21:
     print("wow thats a young ass age bro\n")
elif age > 21:
    print("wow! youre old af\n")
elif age < 21:
    print("wow even younger!\n")
    
