#!/usr/bin/python3

"""class Square."""

class Square:
    """define a square."""

    def __init__(self, size=0):
        """Initialization of a new square.
        args:
            size (int): The square size.
        """
        self.size = size

    @property
    def size(self):
        """set current square size."""
        return (self.__size)

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Return the current square area."""
        return (self.__size * self.__size)
