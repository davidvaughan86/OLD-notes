class Unit:
    def __init__(self, name, position, energy = 10, work = 5):
        self.name = name
        self.energy = energy
        self.position = position

    def burden(self, work):
        self.energy = self.energy - work

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
    def __init__(self, name, position, energy = 10):
        super().__init__(name,position,energy)
    

class Menu:
    def __init__(self, player):
        self.player = player

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

name = input("Who is trying to escape the office?\n")
player = Player(name, [1,1])

enemies = [
    Unit("Michael", [2,4]),#[-2,4],[2,-4],[-2,-4]),
    Unit("Dwight", [5,4]),#[-5,4],[5,-4],[-5,-4]),
    Unit("Angela", [3,2]),#[-3,2],[3,-2],[-3,-2]),
    Unit("Toby", [2,4])#[2,4],[-2,4],[2,-4])
]

menu = ["Move up", "Move down", "Move left", "Move Right"]

def show_menu():
    for i in range(len(menu)):
        print(f"{i+1}. {menu[i]}")

playing = True

while playing:
    print(player)
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
    
    for enemy in enemies:  
        if enemy.position == player.position:
            print("Oh great it's {enemy.name}:")
            print("Your excuse worked! You got away...")
            enemy.burden(player)
