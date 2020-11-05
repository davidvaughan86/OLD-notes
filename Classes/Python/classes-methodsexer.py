# Using our vehicle class from the previous lesson, add a 
# speed, top_speed, position, and acceleration attribute.

#init is a constructor: you pass in default instructions to teh parameters. the methods are class specific
class Vehicle:
    def __init__ (self, speed = 0, top_speed = 350, position = 0, accellerate = 25):
        self.speed = speed
        self.top_speed = top_speed
        self.position = position
        self.acellerate = accellerate
    
    def increase_speed(self, accelerate):
        accelerate.increase_speed(self.accelerate)
        if self.top_speed >= 350:
                print("the car cannot go any fasterthan this!")
         

racecar = Vehicle("Genesis", 0, 25)
racecar.increase_speed(racecar)


class Person:
    


# speed and position should start at 0, top_speed and 
# acceleration are numbers.
# add a class method called move. When the move method is 
# called have the position increase by the speed of the car.
# add a class method called accelerate and using the very 
# simplified equation to have the vehicle accelerate when t
# he accelerate method is called on that instance:
#  speed = speed + acceleration
# In the accelerate method, do not allow the vehicle to 
# pass the top speed.
# modify the instances of the vehicles to include 

# acceleration and top speed when you instance the vehicles.
# using a while loop and assuming each iteration of the 
# loop is a 'second' have the vehicles 'race' by 
# accelerating as much as possible on a drag strip for 
# 20, 40, and 60 seconds to see who wins.
# (challange) instead of racing for a timeframe, make the 
# race different distances. Position can be considered in 
# meters.