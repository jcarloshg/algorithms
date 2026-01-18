# optimizing_cpu_task_scheduling.py

# The Challenge: "Optimizing CPU Task Scheduling"
#
# Context:
# You are writing a scheduler for a single-core CPU. The CPU needs to execute
# a set of tasks (represented by letters A through Z).
#
# - Each task takes 1 unit of time.
# - There is a cooldown period n: If you execute task 'A', you must wait n
#   units of time before you can execute 'A' again.
# - During the cooldown, the CPU can either do a different task ('B', 'C') or
#   stay Idle.
#
# Problem Statement:
# Given a characters array tasks and an integer n, return the least number of
# units of time that the CPU will take to finish all the given tasks.
#
# EXAMPLES:
#
# Input: tasks = ["A","A","A","B","B","B"], n = 2
# Output: 8
# Explanation:
# A -> B -> idle -> A -> B -> idle -> A -> B
# There is at least 2 units between each 'A'. Same for 'B'.
# Total time is 8 units.
#
# Input: tasks = ["A","A","A","B","B","B"], n = 0
# Output: 6
# Explanation: With no cooldown, we just run them all sequentially.
#
# Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
# Output: 16
# Explanation:
# The 'A's are the bottleneck.
# A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

# from collections import Counter


def leastInterval(task: list[str], n: int) -> int:

    bucket = {}
    for t in task:
        if bucket.get(t) is None:
            bucket[t] = 0
        bucket[t] += 1

    task_queue = []
    chunk_taks = n+1

    while len(bucket) > 0:

        flow_task = ['idle'] * chunk_taks
        for_delete = []
        bucket_size = len(bucket)
        print(f"bucket_size {bucket_size}")

        for i in range(chunk_taks):
            if i >= bucket_size:
                continue
            current_tak = list(bucket.keys())[i]
            bucket[current_tak] -= 1
            print(f"bucket[current_tak] {bucket[current_tak]}")
            if bucket[current_tak] == 0:
                for_delete.append(current_tak)
                print(f"for_delete {for_delete}")
            flow_task[i] = current_tak
            print(f"flow_task {flow_task}")
            print(f"bucket {bucket}")

        for t in for_delete:
            bucket.pop(t)

        task_queue = task_queue + flow_task
        print("\n")

    return task_queue


res_01 = leastInterval(
    task=["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
    # task=["A", "A", "A", "A", "A", "A", "A", "A", "A", "A",],
    n=2
)
print(f"res_01 {res_01}")
