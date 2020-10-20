# Creat a program that has a function that will multiply two numbers 
# together and print out the results.


# print(2*3)

# # Make the program properly handle an exception if 
# # something besides a number is passed as an argument.

# try:
#     result = 2*3
#     print (result)
# except TypeError:
#     print("not a number")

# # Have it print out 3 different sets of numbers
# try:
#     result = [2*3 , 3*1 , 7*1]
#     print (result)
# except TypeError:
#     print("not a number")

    # Create a program that has a function that will accept 3 
    # arguments as title, genre, year and then print out the 
    # values in list format.

    # 1. Title : Star Wars - A new Hope
    # 2. Genre : Sci-Fi
    # 3. Year  : 1977

movies = {
    "title":"star wars - a new hope",
    "genre":"sci-fi",
    "year":"1977"
}
# print(movies)
# print("#1." , (movies["title"]) ,  "#2." , (movies["genre"]) ,  "#3." , (movies["year"]))


def movies(movie):
    idx = 1
    for item in movie:
        print(f"{idx} . {item} : {movie[item]}")
        idx += 1