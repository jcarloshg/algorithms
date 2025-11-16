## Hash Tables Summary

- Hash tables store key-value pairs for fast data access.
- They use a hash function to map keys to indices in an array.
- Operations like insertion, deletion, and lookup are typically $O(1)$ on average.
- Collisions (when two keys hash to the same index) are handled by chaining (linked lists) or open addressing (probing).
- Hash tables are widely used for dictionaries, caches, and sets.

## Famous Algorithms Using Hashing

Some of the most well-known algorithms and techniques that use hashing include:

- Hash Table (basic implementation)
- Hash Map (used in many programming languages)
- Hash Set
- Rabin-Karp String Search
- Cuckoo Hashing
- Consistent Hashing (used in distributed systems)
- Bloom Filter
- Cryptographic Hash Functions (MD5, SHA-1, SHA-256)

## Collisions in Hash Tables

Collisions occur when two different keys produce the same index from the hash function. Handling collisions is crucial for maintaining hash table efficiency. Common strategies include:

- Chaining: Store multiple values at the same index using a linked list or another data structure.
- Open Addressing: Finds another open slot in the array using probing techniques:
  - Linear Probing: Checks the next slot sequentially.
  - Quadratic Probing: Checks slots at increasing intervals.
  - Double Hashing: Uses a second hash function to determine the probe sequence.

Proper collision handling ensures that hash tables remain fast and reliable for data storage and retrieval.

### Example: Quadratic Probing

Suppose we have a hash table of size 7 and a hash function h(key) = key % 7. If we try to insert key 10 and index 3 is occupied, quadratic probing will check the next slots using the formula:

index = (h(key) + i^2) % table_size

where i = 1, 2, 3, ...

For key 10:
h(10) = 10 % 7 = 3
Try index 3 (occupied)
Try index (3 + 1^2) % 7 = 4
Try index (3 + 2^2) % 7 = 0
Try index (3 + 3^2) % 7 = 5

Continue until an empty slot is found.

- Double Hashing: Uses a second hash function to determine the probe sequence.

Proper collision handling ensures that hash tables remain fast and reliable for data storage and retrieval.
