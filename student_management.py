class Student:

    def __init__(self, name, age, m1, m2, m3):
        self.name = name
        self.age = age
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3

    def calculate_result(self):

        total = self.m1 + self.m2 + self.m3
        average = total / 3

        print("\n----- Student Details -----")
        print("Name:", self.name)
        print("Age:", self.age)
        print("Mark 1:", self.m1)
        print("Mark 2:", self.m2)
        print("Mark 3:", self.m3)
        print("Total:", total)
        print("Average:", average)

        if self.m1 >= 40 and self.m2 >= 40 and self.m3 >= 40:
            print("Result: PASS")
        else:
            print("Result: FAIL")


print("===== Student Management System =====")

name = input("Enter student name: ")

age = int(input("Enter age: "))

while True:

    m1 = int(input("Enter Mark 1 (0-100): "))

    if 0 <= m1 <= 100:
        break
    else:
        print("Invalid mark! Enter a value between 0 and 100.")


while True:

    m2 = int(input("Enter Mark 2 (0-100): "))

    if 0 <= m2 <= 100:
        break
    else:
        print("Invalid mark! Enter a value between 0 and 100.")


while True:

    m3 = int(input("Enter Mark 3 (0-100): "))

    if 0 <= m3 <= 100:
        break
    else:
        print("Invalid mark! Enter a value between 0 and 100.")


s1 = Student(name, age, m1, m2, m3)

s1.calculate_result()