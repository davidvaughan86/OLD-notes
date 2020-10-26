#  a key allows a developt to access specific value
movie = {
    "name":"Star Wars", #name is the key and starwars is its value
    "episode":4,
    "year":"1977",
    "villians":["Vader" , "Tarkin"], #you can add a list to the value of the key
    "heroes":["Luke" , "Leigh" , "Han"] #you can use str, int, range etc
}
print(movie)

print(movie["year"])
print(movie["heroes"])#you can access the value specifically after [] the key

bad_guys = movie["villians"] #assining a the value of bad guys to the key value of villians
print(bad_guys)
print(bad_guys[1]) #printings specifically the key value of vallians in the second slot
bad_guys.append("Jabba") #adding jabba to the list of villians by way of bad_guys variable
print(movie)

search = "heroes"
print(movie[search]) #assigning searh variance to heroes if user inputs heroes ##looks like this requires an if statement and input

if search in movie:
    print(movie[search])
else:# this if else statement is to prevent the user from getting an error when entering something out of scope
    print("item not found") #to avoid using a try/catch

# if "year" in movie:
#     print("yes this has a year")

movie["ships"] = ["Falcone", "star destroyer" "death star" ]
print(movie)

movie["heroes"].append("Chewbacca")
print("*****************")
print(movie)
print("*********")
for key in movie:
    print("****NEXT ITEM****")
    print(key, movie[key])
