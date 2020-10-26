class Person:  
    def __init__(self,name,age, height = "normal"): #two underscores
        print(self) # class can be anything but SELF is the function
        print("wyou created a new intance of Peron")
        self.name = name
        self.age = age
        self.height = height

david = Person("David", 34, "tall")
mom = Person("Diana" , 68)

# print(f"wow {david.name} you are {david.age} years old")
# print(david.height)
# print(mom.height)

# Create a program that has a class named Vehicle.
# Mae the Vehicle have a 'category' which can be anything like, sport, truck, motorcycle, 
# minivan.
# Make the Vehicle class have 'wheels' as an attribute.
# Make the Vehicle class have 4 as the default value for the class.
# Create 5 different instances of the class with at least one being a motorcycle.

class Vehicle:   #dont forget your colon to make it change colors
    def __init__(self, make, name, brand, wheels = "4"):
        print(make)
        print("this is the car you requested")
        self.name = name
        self.brand = brand
        self.wheels = wheels
        self.make = make

hyundai = Vehicle("Genesis" , "Hyundai" , "wheel")
print(f" so looks like we have a {hyundai.name} by {hyundai.brand} and it has {hyundai.wheels} wheels")
