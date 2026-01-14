At the Senior and Staff level, I am not interested in whether you have memorized LeetCode. I am interested in your **Pattern Recognition** and your ability to discuss **Computational Complexity** under pressure.

Here is the "High-Signal" study guide for evaluating engineering depth.

---

### 1. Pattern: Sliding Window & Two Pointers

**The "Efficiency" Test.** This pattern reveals if a candidate knows how to turn nested loops () into linear time () operations.

#### The Challenge: "Longest Substring Without Repeating Characters"

- **Problem:** Given a string, find the length of the longest substring without repeating characters.
- **Real-World Translation:** Network packet inspection, looking for unique signatures in telemetry streams, or implementing rolling rate limiters.

| Metric            | Analysis                                                                                                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Senior Signal** | Does the candidate immediately recognize that a `Set` or `Map` combined with a window `[left, right]` allows for time? A Junior often tries to generate all substrings (). |
| **Edge Cases**    | How do they handle empty strings? Strings with all identical characters? The difference between ASCII (128) and Unicode (extended sets).                                   |
| **Complexity**    | **Time:**                                                                                                                                                                  |

---

### 2. Pattern: Breadth-First Search (BFS) / Topological Sort

**The "Dependency" Test.** This tests a candidate's ability to model complex relationships and detect circular dependencies.

#### The Challenge: "Course Schedule II" (Dependency Resolution)

- **Problem:** You have `n` courses labeled `0` to `n-1`. Some courses have prerequisites. Return the ordering of courses you should take to finish all courses. Return empty if impossible (cycle).
- **Real-World Translation:** This is exactly how `npm install`, `pip`, or Docker build layers resolve dependencies. It is also used in Microservice orchestration and initialization logic.

| Metric            | Analysis                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Senior Signal** | Do they identify this as a **Directed Acyclic Graph (DAG)** problem? Do they implement **Kahn’s Algorithm** (in-degree counting) or DFS with 3 states (visiting, visited, unvisited) to detect cycles? |
| **Edge Cases**    | Disconnected graphs (courses with no relation to others). A graph that is purely a cycle ().                                                                                                           |
| **Complexity**    | **Time:** (Vertices + Edges).                                                                                                                                                                          |

---

### 3. Pattern: Heap / Priority Queue

**The "Streaming Data" Test.** This assesses how a candidate handles sorting when data is too large to fit in memory or arrives continuously.

#### The Challenge: "Merge k Sorted Lists"

- **Problem:** You are given an array of `k` linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list.
- **Real-World Translation:** Merging log files from 100 different servers into a single time-ordered stream. Database query merging (Sort-Merge Joins).

| Metric            | Analysis                                                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Senior Signal** | A naive approach puts all elements in a massive array and sorts (). A Senior uses a **Min-Heap** to keep track of only the current "head" of each list, achieving . They should discuss the memory trade-off of the heap size. |
| **Edge Cases**    | One of the lists is null. All lists are null. `k` is larger than the number of total elements.                                                                                                                                 |
| **Complexity**    | **Time:** where is total elements.                                                                                                                                                                                             |

---

### 4. Pattern: Dynamic Programming (DP)

**The "Optimization" Test.** This checks if a candidate can cache results to avoid redundant work.

#### The Challenge: "Word Break"

- **Problem:** Given a string `s` and a dictionary of strings `wordDict`, return true if `s` can be segmented into a space-separated sequence of one or more dictionary words.
- **Real-World Translation:** Search engine query segmentation (splitting "newyorktimes" into "new york times"), spell checkers, or parsing concatenated commands.

| Metric            | Analysis                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Senior Signal** | Do they recognize overlapping subproblems? A recursive solution is . A Senior will implement **Memoization** (Top-Down) or a **DP Table** (Bottom-Up) to reduce this to or . |
| **Edge Cases**    | Dictionary words that are prefixes of other words (e.g., "apple", "pen", "applepen").                                                                                        |
| **Complexity**    | **Time:** (depending on implementation).                                                                                                                                     |

---

### 🏆 Evaluation Rubric: Junior vs. Senior vs. Staff

| Level                  | Characteristics                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Junior (L3)**        | **"Makes it work."** Writes code that solves the core test case. Often uses brute force () initially. Needs hints to find the optimal data structure. Code may be messy or lack helper functions.                                                                                                                                                                 |
| **Mid/Senior (L4/L5)** | **"Makes it scalable."** Identifies the optimal pattern (e.g., "This is a heap problem") immediately. Writes clean, modular code. Proactively checks for null/empty inputs. clearly states Big O Time/Space complexity.                                                                                                                                           |
| **Staff (L6+)**        | **"Makes it production-ready."** Solves the algorithmic problem quickly, then pivots to **trade-offs**. _"If this data was on disk instead of RAM, I would use an external merge sort."_ _"If this was a hot path, recursion might cause stack overflow, so I'll use iteration."_ Defines variable names that map to the business domain, not just `i`, `j`, `x`. |
