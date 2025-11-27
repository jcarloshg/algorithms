from typing import Generic, TypeVar, List

T = TypeVar('T')


class Stack(Generic[T]):
    def __init__(self):
        """Initializes an empty stack."""
        self.items: List[T] = []

    def is_empty(self) -> bool:
        """Checks if the stack is empty."""
        return not self.items

    def push(self, item: T) -> None:
        """Adds an item to the top of the stack."""
        self.items.append(item)

    def pop(self) -> T:
        """Removes and returns the top item of the stack."""
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self.items.pop()

    def peek(self) -> T:
        """Returns the top item of the stack without removing it."""
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self.items[-1]

    def size(self) -> int:
        """Returns the number of items in the stack."""
        return len(self.items)

    def print(self):
        """Prints the stack items."""
        indexes = list(range(len(self.items)))
        zip_items = zip(indexes, self.items)

        print(f"\n\n--- Stack Items {len(self.items)} {type(T)} - start ---")
        for index, item in zip_items:
            print(f"[{index}] -> {item}")
        print("--- Stack Items - end ---\n")


# Example usage
if __name__ == "__main__":
    stack = Stack[int]()
    stack.push(10)
    stack.push(20)
    stack.push(30)
    print("Stack after pushes:", stack.items)
    print("Popped item:", stack.pop())
    print("Top item:", stack.peek())
    print("Stack size:", stack.size())
    stack.print()

    names_stack = Stack[str]()
    names_stack.push("Alice")
    names_stack.push("Bob")
    names_stack.push("Charlie")
    names_stack.print()
