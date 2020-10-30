# class Mob:
#     def __init__(self, name, health = 10, power = 2): #has to lead with self
#         self.name = name 
#         self.health = health
#         self.power = power

#     def get_hit(self, power):
#             print(f"I {self.name} was hit for {power} points and now have \n {self.health} remaining")
#     def attack(self, enemy):
#         enemy.get_hit(self.power)
# class Hero(Mob):#creating a subclass within a class
#     pass #using this to be able to use everything else

# hero = Hero("David")
# print(hero.attack)


class Mob:
    def __init__(self, name, health = 10, power = 2): #has to lead with self
        self.name = name 
        self.health = health
        self.power = power

    def get_hit(self, power):
        if self.health > 0:
            self.health = self.health - power
            print(f"I {self.name} was hit for {power} points and now have \n {self.health} remaining")
        elif self.health <= 0: #the if statement for death has to occur during the get hit command so the next command for attack does not run
            print(f"I {self.name} have been slain!")
        
    def attack(self, enemy):
        enemy.get_hit(self.power)

hero = Mob("sir barksalot", 30, 10)
bad_guy = Mob("evilguy", 20, 3)

# print(hero.health)
# bad_guy.attack(hero)

# hero.attack(bad_guy)
# hero.attack(bad_guy)
# hero.attack(bad_guy)

class Hero(Mob):
    def yell(self):
        print(f"i %s, say to thou villiar...prepare to die!" % (self.name))
    pass

hero = Hero("David")
print(hero.attack)
    #ask alex about this