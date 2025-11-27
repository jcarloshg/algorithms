class OwnHashTableChaining:
    def __init__(self, size=10):
        self.size = size
        self.last_index = size - 1 
        self._table = [None] * self.size
        
        print(f"self.table {self._table}")
        
        
    def _hash(self, object:str) -> int:
        aux = 0
        for char in object:
            aux += ord(char)
        
        key = aux
        while key < 0 or key > self.last_index :
            print(f"key = {key,self.size, key  % self.size}")
            key = key  % self.size

        return key
            
        
    def insert(self, object:str):
        index = self._hash(object)
        if self._table[index] is None:
            self._table[index] = []
        if object not in self._table[index]:
            self._table[index].append(object)
    
    def get(self, key: int) -> list[str] | None:
        if key < 0:
            return None
        if key > self.last_index:
            return None
        return self._table[key]
        
    def remove(self, key:int) -> bool:
        if self.get(key) == None:
            return False
        
        self._table[key] = None
        return True
    
    def get_keys(self) -> list[int]:
        keys:list[int]=[]
        for key_data in enumerate(self._table):
            key_index, data = key_data
            if data != None:
                keys.append(key_index)
        return keys
        
    def get_values(self) -> list:
        values = list(filter(lambda data: data is not None, self._table))
        return values
    
    def print(self):
        for item_data in enumerate(self._table):
            print(f"item_data {item_data}")
            # item_index, items = item_data


ownHashTable = OwnHashTableChaining(5)
food_names = [
    "apple", "banana", "carrot", "bread", "cheese", "chicken", "rice", "beans",
    "tomato", "lettuce", "grapes", "pear", "peach", "yogurt", "beef", "fish",
    "potato", "onion", "egg", "spinach"
]
for name in food_names:
    ownHashTable.insert(name)
    ownHashTable.print()

print(f"keys {ownHashTable.get_keys()}")
print(f"remove key 2 {ownHashTable.remove(2)}")
print(f"remove key 2 {ownHashTable.remove(2)}, already deleted")
print(f"after remove {ownHashTable.get_keys()}")

print(f"keys {ownHashTable.get_keys()}")
print(f"values {ownHashTable.get_values()}")

ownHashTable.print()