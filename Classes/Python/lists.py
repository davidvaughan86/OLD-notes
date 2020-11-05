# [1, 2, 3]
# ["hi", "my", "name is", "david"]
# [" hi", 2, False, 3.5, None]
#all of these items can be in a list
#a "list" is a list of items that can be used and assigned to a value
#also called an array

list_of_ints = [2, 4, 6]
print(list_of_ints)
# you can assign variables and add to the list
me = "dave"
age = 34
single = True

info = [me, age, single]
print(info)
# changing the variable after the "list" is assigned will not change the value of the variable
the_kids = ["alex", "michael", "ari", "patrick"]
#the order is ran from 0 to 4 known as index

print(the_kids[0])
my_only_kid = the_kids[3]
print(my_only_kid)

# #Create a program that has a list of at least 3 of your favorited foods in order and assign that list to a variable named "favorite_foods".

# print out the value of your favorite food by accessing by it's index.
# print out the last item on the list as well.
favorite_food = "all pototatoes" , "eggs" , "french toast"
print(favorite_food)
print(favorite_food[-1])
# Create a program that contains a list of 4 different "things" around you.
# Print out the each item on a new line with the number of it's index in front of the item.
# things_around_me = ["water", "sunscreen", "cup", "phone"]

# index = 0
# while index < len(things_around_me):
#     things = things_around_me[index]
#     print("%d: %s" % (things + 1, things))
#     index += 1

kids = ["patrick" , "alex" , "ari"]

index = 0

# my_list[index] # this_list[0] same thing

while index < len(kids):
    print(index, kids[index])
    index += 1 #this is to get the index to list the items under each other with their corresponding numbers

index = 0
for child in enumerate(kids): #for assigns the value of child in the index
    print(child) #once the index is assigned to a variable it no longer pulls from the index
    index += 1


# idx = 0
# for child in kids:
#     (print(idx, child) #this isnt working nor makes sense
  
stars = ["Washington" , "Hathaway", "Fox"]
index = 0
while index < len(stars): 
    print(index, stars[index]) #make sure when using index for listing numbers you use [index] in the print twice with and without brackets
    index += 1 

stars = ["Washington" , "Hathaway", "Fox"]
index = 0
for major_star in enumerate(stars):
    print(major_star) # for statement does not require (index " " [index])
    index += 1

# start = 1 # Start of your range
# end = 10 # End of your range
# num_list = range(start, end + 1) # List of all numbers in given range
# final_sum = sum(num_list)
# print "Final Sum =", final_sum
# #Combining all of it together in a single line
# print "Final Sum =", sum(range(start, end + 1))


start = 1
end = 10
num_list = range(start, end)
final_sum = sum(num_list)
print("final sum=", final_sum)
#new
start = 5
end = 25
num_list = range(start, end)
final_sum = sum(num_list)
print("final sum=", final_sum)
#new
start = 10
end = 100
num_list = range(start, end)
final_sum = sum(num_list)
print("final sum=", final_sum)
