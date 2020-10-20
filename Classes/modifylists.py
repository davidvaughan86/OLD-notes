# my_pets = ["aries, king, myron, pretty kitty, max, caesar"]
# my_pets.append ("aries")
# print(my_pets)

# my_dogs = ["aries" , "king" , "max" , "caesar"]
# my_cats = ["myron", "pretty kitty"]

# my_pets = my_dogs + my_cats
# my_pets =  my_pets + []

# print(my_pets)
# print(my_dogs)

# combined_literal = [1,3,5] + ['a', "k", True]
# print(combined_literal)

# new_set_of_pets = []
# new_set_of_pets.extend(my_dogs)
# print(new_set_of_pets)
# new_set_of_pets.extend(my_cats) ["p" , "m"]

# print(new_set_of_pets)

# my_pets[2] = "aries baby"
# print(my_pets)

# del my_pets[2]
# print(my_pets)

#Write a program that has a list of names.

# family = ["alex" , "brooklyn" , "mom" , "michele" , "michael"]
# family.append("alex")
# print(family)


family = ["alex" , "brooklyn" , "mom" , "michele" , "michael"]
family[2] = "foo"
family[4] = "bar"
print(family)

family = ["alex" , "brooklyn" , "mom" , "michele" , "michael"]
while len(family):
    del family[0]
    print(family)