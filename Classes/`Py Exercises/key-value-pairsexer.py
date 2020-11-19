# Create a program that starts with an empty dictionary.
# Add 3 different key value pairs to the empty dictionary.

# games = {
#     "tomb raider":"laura croft",
#     "metal gear solid":"solid snake",
#     "world of warcraft":"Thrall",
# }
# print(games)

# Create a program with a dictionary called person.
# The person dictionary needs to have the keys, first_name, last_name, age, 
# hair_color.
# Print each one of these key/values pairs without directly using the 
# key's name as a string by using a for loop.
# After each key value pair, print out a sentence using each one of 
# the keys.

person = {
    "first name":"David",
    "last name":"Vaughan",
    "age":35,
    "haircolor":"black"
}

first_name = person
for identity in first_name:
    print(first_name)

    #print("%s was episode %s and release in %s" % (movie["name"], movie["episode"], movie["year"]))