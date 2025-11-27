class Node:

    def __init__(self, value):
        self._value = value
        self._next = None

    def set_next(self, item: 'Node'):
        self._next = item

    def get_next(self) -> 'Node | None':
        return self._next

    def get_value(self):
        return self._value


class LinkedList:

    def __init__(self):
        self._head = None
        self._tail = None
        self._lenght = 0

    def apped(self, value):

        new_node = Node(value)

        if self._tail is None and self._head is None:
            self._tail = new_node
            self._head = new_node
            return

        self._head.set_next(new_node)
        self._head = new_node
        self._lenght += 1

    def prepend(self, value):

        new_node = Node(value)

        if self._tail is None and self._head is None:
            self._tail = new_node
            self._head = new_node
            return

        new_node.set_next(self._tail)
        self._tail = new_node
        self._lenght += 1

    def insert(self, index: int, value):

        if index > self._lenght:
            self.apped(value)
            return

        if index < 0:
            return

        if index == 0:
            self.prepend(value)
            return

        prev_node = self.get_by_index(index-1)
        if not prev_node:
            return

        new_node = Node(value=value)
        next_for_prev = prev_node.get_next()
        prev_node.set_next(new_node)
        new_node.set_next(next_for_prev)
        self._lenght += 1

    def get_by_index(self, index: int):
        aux_index = 0
        aux_pivot = self._tail
        while aux_index < index:
            aux_index += 1
            aux_pivot = aux_pivot.get_next()
        return aux_pivot

    def print(self):

        visiter = self._tail
        i = 0

        while visiter:
            value = visiter.get_value()
            print(f"[{i}] -> {value}")
            visiter = visiter.get_next()
            i += 1
        print("\n")

    def reserse(self):
        # If the list is empty, do nothing
        if self._tail is None:
            return
        # If the list has only one node, do nothing
        if self._tail.get_next() is None:
            return

        prev = None  # Previous node starts as None
        current = self._tail  # Start from the tail (first node)
        self._head = current  # Set head to current (will be updated in loop)
        while current:
            next_node = current.get_next()  # Store next node
            current.set_next(prev)  # Reverse the link
            prev = current  # Move prev to current node
            current = next_node  # Move to next node in original list
        self._tail = prev  # After loop, prev is the new tail (was head)


linkedList = LinkedList()
linkedList.apped("jose")
linkedList.apped("carlos")
linkedList.apped("huerta")
linkedList.print()

linkedList.prepend("garcia")
linkedList.print()

linkedList.insert(2, "andree")
linkedList.print()

linkedList.reserse()
linkedList.print()
