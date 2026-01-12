### The Challenge: "Network Packet Glitch Detector"

**Context:**
You are working on a network monitoring tool that analyzes a live stream of data packets. Due to a hardware glitch, sometimes a sequence of packets gets corrupted. A corrupted sequence is identified as a contiguous block of packets where the sum of their signal strengths is **greater than or equal to** a danger threshold.

Your task is to find the **smallest** number of contiguous packets that could be causing this glitch.

**Problem Statement:**
Given an array of positive integers `packets` (representing signal strengths) and a positive integer `threshold`, return the **minimal length** of a **contiguous subarray** of which the sum is greater than or equal to `threshold`. If there is no such subarray, return 0.

#### Examples:

**Example 1:**

```text
Input: threshold = 7, packets = [2, 3, 1, 2, 4, 3]
Output: 2
Explanation: The subarray [4, 3] has a sum of 7, which is >= 7. Its length is 2.
Another valid subarray is [2, 4, 3] (sum 9), but its length is 3. The minimal length is 2.

```

**Example 2:**

```text
Input: threshold = 4, packets = [1, 4, 4]
Output: 1
Explanation: The subarray [4] has a sum of 4. Length is 1.

```

**Example 3:**

```text
Input: threshold = 11, packets = [1, 1, 1, 1, 1, 1, 1, 1]
Output: 0
Explanation: No contiguous subarray sums up to 11 or more.

```

### Constraints (The "Production" Reality):

- `1 <= threshold <= 10^9` (The threshold can be large)
- `1 <= packets.length <= 10^5` (The stream is long, an solution will timeout)
- `1 <= packets[i] <= 10^4` (Packets are always positive)

### The Interviewer's "Signal" Checklist (Self-Evaluation)

Before you look at the solution, try to solve it. Here is what a senior interviewer is looking for:

1. **Do you recognize the pattern?** Do you immediately see "contiguous subarray" and "minimal length" and think "Sliding Window"?
2. **Do you avoid brute force?** A naive solution uses nested loops to check every possible subarray. That's . With , that's operations, which will fail performance tests.
3. **Can you manage the window state?** This is a **dynamic size** sliding window. You need to:

- **Expand** the window (move `right` pointer) to try and reach the `threshold`.
- **Contract** the window (move `left` pointer) once you hit the `threshold`, to see if you can make it smaller while still being valid.

4. **Do you handle edge cases?** What if the array is empty? What if no subarray is valid (return 0, not infinity)?

### 💡 Hint (If you get stuck)

Don't use a fixed-size window. Use two pointers, `left` and `right`, both starting at 0.

1. Iterate with the `right` pointer, adding `packets[right]` to a running `current_sum`.
2. **While** `current_sum >= threshold`, you have found a valid window.

- Update your minimum length result: `min_len = min(min_len, right - left + 1)`.
- Now, try to shrink it from the left to see if it can be smaller: subtract `packets[left]` from `current_sum` and increment `left`.

3. Repeat until `right` reaches the end.
