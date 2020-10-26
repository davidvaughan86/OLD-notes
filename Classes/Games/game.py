class Unit:
    def __init__(self, name, position, sanity = 10, work = 5):
        self.name = name
        self.sanity = sanity
        self.work = work
        self.position = position
    
    def burden(self, work):
        self.sanity = self.sanity - work

    def attack(self, enemy):
        enemy.burden(self.work)

    def restore(self, work):
        self.sanity = self.sanity + work
    
    def charge(self, things):
        things.restore(self.work)

    def move(self, dir):
        if dir == "up":
            self.position = [self.position[0], self.position[1]+1]
        elif dir == "down":
            self.position = [self.position[0], self.position[1]-1]
        elif dir == "right":
            self.position = [self.position[0]+1, self.position[1]]
        elif dir == "left":
            self.position = [self.position[0]-1, self.position[1]]

class Player(Unit):
    def __init__(self, name, position, sanity = 10):
        super().__init__(name,position,sanity)

class Winning(Unit):
    def __init__(self, name, position):
        super().__init__(name,position)

class Supplies(Unit):
    def __init__(self, name, position):
        super().__init__(name,position)
        
         
    # def burden(self, work):
    #     self.sanity = self.sanity - work

    # def attack(self, enemy):
    #     enemy.burden(self.work)
# class Good_Stapler(Supplies):
#     def __init__(self, name, position, sanity = 5):
#         super().__init__(name, position)
#         self.owner = None

       

    # def use(self):
    #     self.owner.sanity += 5
    #     for i in range(len(self.owner.inventory)):
    #         if self.owner.inventory[i] == self:
    #             del self.owner.inventory[i]
    #     self.owner = None



# class Dollar(Supplies):
#     def __init__(self, nanme, position)
#     super().__init__(name, position)
#     self.owner = None

# class Menu:
#     def __init__(self, player):
#         self.player = player

menu = {
    "Move":{
        "options":["up","down","left","right"],
        "accept_input":True,
        "on_accept":{
            "action_on":"player",
            "action":"move"
            }
    }
}

name = input("It's half passed 4 and you are ret2go! Who is trying to escape the office?\n")
player = Player(name, [1,1])

enemies = [
    Unit("Michael and hes got something stupid to say", [2,4]),
    Unit("Dwight and hes looking for that pen from 2 months ago", [5,4]),
    Unit("Angela and shes wants us to attend her cat's wedding...and funeral...again", [3,2]),
    Unit("Toby and he wants me to sign that HR document for indecent exposure", [1,5]),
    Unit("Michael and hes got a new dance", [-2,4]),
    Unit("Dwight and hes still exepcting that email", [-5,4]),
    Unit("Angela and shes inviting me to singles night for widowed Christians", [-3,2]),
    Unit("Toby and he wants me to sign that HR document for calling out in the parking lot", [-1,5]),
    Unit("Michael and hes hiding from Jan", [2,-4]),
    Unit("Dwight and hes in charge for the next 30 minutes", [5,-4]),
    Unit("Angela and shes shes inviting everyone to Dwight's birthday gathering", [3,-2]),
    Unit("Toby  and he wants me to sign that HR document for misappopriating Angela's event money", [1,-5])
]

winning = [
    Unit("Finally you find Jim and Pam and can get the fuck outta here!" , [5,5]),
    Unit("Finally you find Jim and Pam and can get the fuck outta here!" , [-5,5]),
    Unit("Finally you find Jim and Pam and can get the fuck outta here!" , [5, -5]),
    Unit("Finally you find Jim and Pam and can get the fuck outta here!" , [-5,-5])
]

stuff = [
    Supplies("You found LITERALLY the only working stapler - that put you in a good mood to deal with their BS", [3,5])
]
menu = ["Move up", "Move down", "Move left", "Move Right"]

def show_menu():
    for i in range(len(menu)):
        print(f"{i+1}. {menu[i]}")

playing = True

while playing:
    print("Employee:\n", player.name)
    print("sanity:\n", player.sanity)
    print("location:\n", player.position)
    show_menu()
    try:
        action = int(input("Escape! but which way?\n"))
    except ValueError:
        print("You have to escape! Pick an available direction")
        action = None
    
    if action:
        if action == 1:
            player.move("up")
        elif action == 2:
            player.move("down")
        elif action == 3:
            player.move("left")
        elif action == 4:
            player.move("right")
    for things in stuff:
        if things.position == player.position:
            print(f"{things.name}")
            things.charge(player)
    for enemy in enemies:  
        if enemy.position == player.position:
            print(f"Oh great it's {enemy.name}")
            print("They want to destroy your sanity!")
            enemy.attack(player)
    
    for winner in winning:
        if winner.position == player.position:
            print(f"Look! {winner.name}")
            playing = False
            break
        # if player.poistion == [7,7]:
        #     print("The exit is the other way. Keep going and you'll never go home!")
        # elif player.poistion == [-7,-7]:
        #     print("The exit is the other way. Keep going and you'll never go home!")
        # elif player.poistion == [-7,7]:
        #     print("The exit is the other way. Keep going and you'll never go home!")
        # elif player.poistion == [7,-7]:
        #     print("The exit is the other way. Keep going and you'll never go home!")

    if player.sanity == 0:
        print("Youll never go home now!")
        print("Game Over! You're stuck at the office!!")
        break #break is used to break out of a loop by not caring what the variable says