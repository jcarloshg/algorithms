class Node:
    def __init__(self, value):
        self.value = value
        self.next: 'None | Node' = None
        self.prev: 'None | Node' = None


class DoubleLinkedList:
    def __init__(self):
        self._tail = None
        self._head = None
        self.lenght = 0

    def apped(self, value):

        new_node = Node(value)

        if self._tail is None and self._head is None:
            # init nodes
            self._tail = new_node
            self._head = new_node
            # set nodes for prev and next
            self._tail.next = self._head
            self._head.prev = self._tail
            return

        self._tail.next = new_node
        new_node.prev = self._tail
        self._tail = new_node
        self.lenght += 1

    def preapen(self, value):

        new_node = Node(value)

        if self._tail is None and self._head is None:
            # init nodes
            self._tail = new_node
            self._head = new_node
            # set nodes for prev and next
            self._tail.next = self._head
            self._head.prev = self._tail
            return

        self._head.prev = new_node
        new_node.next = self._head
        self._head = new_node
        self.lenght += 1

    def insert(self, index: int, value):

        if index > self.lenght:
            self.apped(value)
            return

        if index < 0:
            return

        if index == 0:
            self.preapen(value)
            return

        new_node = Node(value)
        prev_node = self.get_by_index(index - 1)
        if prev_node:

            next_of_prev = prev_node.next
            new_node.next = next_of_prev
            next_of_prev.prev = new_node

            new_node.prev = prev_node
            prev_node.next = new_node
            self.lenght += 1

    def get_by_index(self, index: int):
        aux_index = 0
        aux_pivot = self._tail
        while aux_index < index:
            aux_index += 1
            aux_pivot = aux_pivot.next
        return aux_pivot

    def print(self):
        pivot_aux = self._head

        while pivot_aux:
            prev_value = pivot_aux.prev.value if pivot_aux.prev else None
            current_val = pivot_aux.value
            next_value = pivot_aux.next.value if pivot_aux.next else None
            pivot_aux = pivot_aux.next

            print(f"prev: {prev_value} | value: {current_val} | next: {next_value}")
            
        print("\n")


doubleLinkedList = DoubleLinkedList()
doubleLinkedList.apped("Jose")
doubleLinkedList.apped("Carlos")
doubleLinkedList.print()

doubleLinkedList.preapen("Huerta")
doubleLinkedList.print()
doubleLinkedList.insert(index=2, value="Garcia")
doubleLinkedList.print()
