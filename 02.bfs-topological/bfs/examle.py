from collections import deque

maze = [
    [" ", "X", " ", " ", "X", " ", "X", " "],
    [" ", "X", "X", " ", "X", " ", "X", " "],
    [" ", " ", " ", " ", " ", "X", " ", " "],
    ["X", "X", "X", "X", " ", "X", "X", " "],
    [" ", " ", " ", "X", " ", " ", " ", " "],
    ["X", " ", "X", "X", "X", "X", "X", " "],
    [" ", " ", " ", " ", " ", " ", "X", " "],
    ["X", "X", "X", "X", "X", " ", " ", " "]
]

# maze = [
#     [" ", " ", " "],
#     ["X", "X", " "],
#     ["X", "X", " "]
# ]


def findSortestWay(
    start: list[int],
    end: list[int],
    maze: list[list[int]]
):

    # edges
    edge_y = len(maze) - 1
    edge_x = len(maze[0]) - 1

    start_tuple = tuple(start)
    # start & distance
    queue = deque()
    queue.append([start_tuple, 1])
    visited = set()
    visited.add(start_tuple)

    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    while queue:

        current_point, current_distance = queue.popleft()
        print(f"current_point {current_point}")
        print(f"current_distance {current_distance}")

        if current_point[0] == end[0] and current_point[1] == end[1]:
            print("founded")
            return current_distance

        for dir_x, dir_y in directions:
            new_pos_x = current_point[0] + dir_x
            new_pos_y = current_point[1] + dir_y

            # check bounded
            if not (0 <= new_pos_x <= edge_x):
                continue
            if not (0 <= new_pos_y <= edge_y):
                continue

            # check if is already visited
            visited_tuple = tuple([new_pos_x, new_pos_y])
            if visited_tuple in visited:
                continue

            # check if can be visited
            position_value = maze[new_pos_y][new_pos_x]
            if position_value == "X":
                continue

            # add the
            new_post_tuple = tuple([new_pos_x, new_pos_y])
            queue.append([new_post_tuple, current_distance + 1])
            visited.add(new_post_tuple)

    return -1


max_x = len(maze) - 1
max_y = len(maze[0]) - 1

sortest_path = findSortestWay(
    start=(0, 0),
    end=(max_x, max_y),
    maze=maze
)


print(f"\n sortest_path {sortest_path}")
