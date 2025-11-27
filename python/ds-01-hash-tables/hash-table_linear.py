class HashTableLinear:
    def __init__(self, size=10):
        self.size = size
        self.last_index = size - 1
        self._table = {}
        pass

    def get(self, key: int) -> str | None:
        key_str = str(key)
        return self._table.get(key_str)

    def _hash(self, obj: str) -> int:

        # create a key
        total_sum = 0
        for char in obj:
            char_unicode = ord(char)
            total_sum += char_unicode

        # the key must be major than 0 and lower than last_index
        key = total_sum
        while key < 0 or key > self.last_index:
            key = total_sum % self.size

        # validate that position is free
        temp_key = key
        is_there_data = self._table.get(key) is not None
        while is_there_data:
            key = (key + 1) % self.size
            if key == temp_key:
                is_there_data = False

        return key

    def insert(self, obj: str):
        key = self._hash(obj)
        self._table[key] = obj
        # print(f"obj '{obj}' was inserted at [{key}]")

    def print(self):
        print(f"self._table {self._table}")
        # for item_data in enumerate(self._table):
        #     print(f"item_data {item_data}")

    def keys(self) -> list:
        return list(self._table.keys())


hashTableLinear = HashTableLinear(30)
food_names = [
    "apple", "banana", "carrot", "bread", "cheese", "chicken", "rice", "beans",
    "tomato", "lettuce", "grapes", "pear", "peach", "yogurt", "beef", "fish",
    "potato", "onion", "egg", "spinach"
]
for name in food_names:
    hashTableLinear.insert(name)
    hashTableLinear.print()


hashTableLinear.print()
keys = hashTableLinear.keys()
print(f"keys {keys}")
