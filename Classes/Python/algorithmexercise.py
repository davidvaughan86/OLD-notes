# 1. Given an array nums, write a function to move all zeroes to the end of it while maintaining the relative order of 
# the non-zero elements.


# array = [0,4,5,6,7,8,9]
# for i in array:
#   if i == 0:
#     array.remove(i)
#     array.append(i)
# print(array)



# 2. Write a function that counts the number of times the number 7 occurs in a given integer
# without converting it to a string.
# For example the number 7,704,793 would output 3

# 3. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# array2 = [0,1,5,12]
# target = 17
# def count(array,target):
#   for

redbull = {
  "name": "redbull", 
  "type": "paper"
}

redstripe = {
  "name": "redstrip", 
  "type": "glass"
}

cups = [redbull, redstripe]


def filter(array):
  for item in array:
    if item["type"] != "glass":
      print("%s is not made of glass" %(item['name']))
      array.remove(item)
    return array

glass_only__array = filter(cups)
for item in glass_only__array:
  print(item)
# Examples and clarification here: https://leetcode.com/problems/two-sum/
# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Because nums[0] + nums[1] == 9, we return [0, 1].
# JEREMY'S CHALLENGE:
# 4. You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

# array = [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
# newarray = []

#     while array != 0
#         print()




# def list_count_7(nums):
#   count = 0  
#   for num in nums:
#     if num == 7:
#       count = count + 1

#   return count

# print(list_count_7([1, 4, 6, 7, 4, 8, 10, 7, 20, 7, 100, 7]))
# print(list_count_7([1, 4, 6, 4, 7, 4, 8, 7, 20, 7]))
# print(list_count_7([1, 4, 6, 4, 76, 4, 8, 72, 20, 97]))

# count = list_count_7([1, 4, 6, 7, 4, 8, 10, 7, 20, 7, 100, 7]))