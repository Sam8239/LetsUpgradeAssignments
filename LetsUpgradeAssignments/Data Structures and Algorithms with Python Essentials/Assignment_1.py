# ASSIGNMENT 1
# Q.1 Write a python program that takes two numbers as the input and print the result of Addition,
#     Subtraction, Multiplication, Division of the two numbers
# A.1
a = int(input("Enter 1st Number: "))
b = int(input("Enter 2nd Number: "))

choice = int(input(
    "Menu: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit\nEnter Your Choice: "))

try :
    if choice == 1:
        print("The Addition of Two Numbers is: ", a+b)

    elif choice == 2:
        print("The Subtration of Two Numbers is: ", a-b)

    elif choice == 3:
        print("The Multiplication of Two Numbers is: ", a*b)

    elif choice == 4:
        print("The Division of Two Numbers is: ", a/b)

    elif choice == 5:
        exit()

    else:
        print ("Not a Valid Option!! Try Again")

except Exception as e:
    print (e)

# Q.2  Write a python program that takes two numbers as the input such as X and Y and print the result
#      of X ^ Y(X to the power of Y).
# A.2
x = int(input("Enter 1st Number: "))
y = int(input("Enter 2nd Number: "))
print (x**y)