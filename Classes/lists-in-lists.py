# people = [
#     ["david", "vaughan" , 34],
#     ["diana", "vaughan" , 37]
# ]

# print(people[0][2])

# me = people[0]
# print(me[2])

# me[2]= 35
# print(me[2])
# print(people)
# print(me)

# del people[1][2]
# print(people)

# more_people = [
#     ["david", "vaughan" , 34],
#     ["diana", "vaughan" , 68]
#     ["michele", "vaughan" , 53],
#     ["alex", "vaughan" , 29]
# ]

# for person in more_people:
#     print("first" , "last" , "age")
#     for Attribute
#         print(attribute)

# coordinates = [[10 , 10] , [20, 10] , [10, 20]]

# for cord in coordinates:
#     idex = 0
#     print("position")
#     for position in cord:
#         p = "x"
#         if idx == 1:
#             p = "y"
#         print(f",{p}-{position}")
#         idx += 1

# Write a program that has a list of shopping lists that where each list is for a different food group.
# Print each full list on a seperate line.

shopping_list = [
 
 ["steak" , "fish" , "milk"],
    ["lettuce" , "peanuts"],
    ["corn" , "pasta" , "bread"]
]
print(shopping_list[0])
print(shopping_list[1])
print(shopping_list[2])

#or

for food in shopping_list:
    print(food)

Using the code from the previous exercise, have each grouping have a title with the number in the title and each item of the list have a number in front of the item.
(bonus) Have each of the titles of the main grouping be in a seperate list that gives the name to the heading.