#when we say print you can return a function with a value.
print(len([0, 1, 2, 3, 4])) #this is a return value becuase it prints a result
#because it has a return value it does not need an argument

def add_numbers(a,b):
        result = a+b
        return result

num_length = len([2,3,5])

final = add_numbers (1,3) / add_numbers(4,6)
print(final)# you get none if there is no return value
#if the return statement does not match the def statement the function will not result

def make_dict(first, last, phone, zip):
    data = {
        "first_name":first,
        "last_name":last, 
        "phone number":phone,
        "zip code": zip
    }
david_data = make_dict("david", "vaughan", "3233233232", "91344")
for key in david_data:
    print(david_data[key])