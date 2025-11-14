# Problem Statement
"""  # Use a regular docstring, but escape backslashes
Solves the Knapsack Problem using dynamic programming.

Given a set of n items, each with a weight w_i and a value v_i, this module determines the optimal number of each item to include in a collection such that:
    - The total weight does not exceed a given capacity W.
    - The total value of the collection is maximized.

Functions and classes in this module typically accept:
    - A list of item weights.
    - A list of item values.
    - The maximum capacity of the knapsack.

Returns:
    The maximum achievable value and/or the list of selected items.

Example usage:
    max_value, selected_items = knapsack(weights, values, capacity)

Dynamic Programming Approach
---------------------------
We'll build a 2D table, let's call it $DP$, where:
    - The rows represent the items considered (from 1 to $n$).
    - The columns represent the available knapsack capacity (from 0 to $W$).
    - $DP[i][w]$ stores the maximum value that can be obtained using the first $i$ items with a knapsack capacity of exactly $w$.

1. Initialization
    Create the $DP$ table of size $(n+1) \times (W+1)$ and initialize all entries to 0.

2. The Recurrence Relation
    To fill the table, we consider each item $i$ and each possible capacity $w$. For item $i$ (with weight $w_i$ and value $v_i$), there are two possibilities:

    Case 1: The current item's weight is greater than the current capacity ($w_i > w$).
        If the item is too heavy, we cannot include it. The maximum value remains the same as the maximum value obtained without considering this item (i.e., using only the first $i-1$ items).
        $$DP[i][w] = DP[i-1][w]$$

    Case 2: The current item's weight is less than or equal to the current capacity ($w_i \\leq w$).
        We must choose the maximum value between two options:
            - Don't include item $i$: The maximum value is $DP[i-1][w]$.
            - Include item $i$: The maximum value is the value of item $i$ ($v_i$) plus the maximum value we could have achieved with the remaining capacity ($w - w_i$) using the previous items ($DP[i-1][w - w_i]$).
    $$DP[i][w] = \\max(DP[i-1][w], v_i + DP[i-1][w - w_i])$$

3. Final Result
    After filling the entire table, the maximum value that can be achieved with all $n$ items and the full capacity $W$ is found at the bottom-right corner:
    $$\\text{Maximum Value} = DP[n][W]$$
"""

from pprint import pprint


def knapsack(weights: list[int], values: list[int], capacity: int):

    items_len = len(weights)
    table = [
        [0 for _ in colums+1]
        for colums in items_len + 1
    ]

    return table


capacity = 5
weights: list[int] = [2, 3, 4]
values: list[int] = [3, 4, 5]

print(f"knapsack {knapsack(weights, values, capacity)}")
