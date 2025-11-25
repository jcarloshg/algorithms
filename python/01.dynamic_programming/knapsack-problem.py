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

    # create the table
    items_len = len(weights)
    table = [
        [0 for _ in range(capacity+1)]
        for _ in range(items_len+1)
    ]

    # data to return
    max_value = 0
    items = []

    # save the cache of values
    for item_index in range(1, items_len + 1):

        item_weight = weights[item_index - 1]
        item_value = values[item_index-1]

        for capacity_index in range(capacity+1):

            current_capacity = capacity_index
            can_be_added = current_capacity >= item_weight

            if not can_be_added:
                previous_value_calculated = table[item_index-1][capacity_index]
                table[item_index][capacity_index] = previous_value_calculated
                continue

            # prev value calculated
            value_cached = table[item_index - 1][capacity_index]

            # new value calculated
            weight_available = capacity_index - item_weight
            new_value_calculated = table[item_index - 1][weight_available]
            new_value_calculated = item_value + new_value_calculated

            max_value = max(value_cached, new_value_calculated)
            table[item_index][capacity_index] = max_value

            # updated the list items to return
            is_the_current_capacity = capacity_index == capacity
            was_the_value_updated = max_value == new_value_calculated
            if was_the_value_updated and is_the_current_capacity:
                item = (
                    weights[item_index - 1],
                    values[item_index-1]
                )
                items.append(item)

    print("DP Table:")
    for row in table:
        print(" ".join(f"{cell:3}" for cell in row))

    return {
        "maximum_value": max_value,
        "items": items
    }


max_capacity = 5
weights: list[int] = [2, 3, 4]
values: list[int] = [3, 4, 5]

print(f"knapsack {knapsack(weights, values, max_capacity)}")
