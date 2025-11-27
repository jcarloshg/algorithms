from typing import Generic, TypeVar, List

T = TypeVar('T')


class Queue(Generic[T]):

    def __init__(self):
        self.items: List[T] = []

    def enqueue(self, item: T):
        self.items.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("there are not items")
        return self.items.pop()

    def peek(self) -> T:
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items[-1]

    # aux methods

    def is_empty(self) -> bool:
        return True if len(self.items) <= 0 else False

    def print(self) -> None:
        indexes = list(range(len(self.items)))
        zip_items = zip(indexes, self.items)

        print("\n\n====== Queue - start ======")
        for index, item in zip_items:
            print(f"[{index}] -> {item}")
        print("====== Queue - end ======\n")


# Example usage
if __name__ == "__main__":
    names_queue = Queue[str]()
    print(f"is empty =  {names_queue.is_empty()}")
    names_queue.enqueue("Alice")
    names_queue.enqueue("Bob")
    names_queue.enqueue("Charlie")
    names_queue.print()
    print(f"dequeue {names_queue.dequeue()}")
    names_queue.print()
