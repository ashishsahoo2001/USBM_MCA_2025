 differences between push(), pop(),shift() and unshift() proper defination and example
 # push()
  It is used to add an element to the end of an array.
  # Example:
  array = [1, 2, 3]
  array.push(4)
  print(array)  
   Output: [1, 2, 3, 4]
 
 # pop()
  It is used to remove the last element from an array and returns that element.
  # Example:
  array = [1, 2, 3, 4]
  popped_element = array.pop()
  print(array)  
   Output: [1, 2, 3]
  print(popped_element)  
   Output: 4
   
 # shift()
  It is used to remove the first element from an array and returns that element.
  # Example:
  array = [1, 2, 3, 4]
  shifted_element = array.shift()
  print(array)
   Output: [2, 3, 4]
  print(shifted_element)
   Output: 1
   
 # unshift()
  It is used to add an element to the beginning of an array and returns the new length of the array.
  # Example:
  array = [1, 2, 3]
  array.unshift(0)
  print(array)
   Output: [0, 1, 2, 3]
   
